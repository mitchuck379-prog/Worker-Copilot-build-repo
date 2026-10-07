export const LIMITS = {
  test: { gapMs: 10000, perDay: 20 },
  status: { gapMs: 3000, perDay: 500 },
  config: { perMinute: 30, perDay: 300 }
};

export const SECRET = /^cfk_[A-Za-z0-9_-]{43}$/;

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: Object.assign({
      'content-type': 'application/json',
      'cache-control': 'no-store'
    }, headers || {})
  });
}

async function sha256(text) {
  var digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest)).map(function(b) {
    return b.toString(16).padStart(2, '0');
  }).join('');
}

function secretFrom(request) {
  return (request.headers.get('authorization') || '').replace(/^Bearer /i, '').trim();
}

function clip(v, n) {
  return String(v == null ? '' : v).slice(0, n || 64);
}

export class Link {
  constructor(state) {
    this.state = state;
    this.pending = new Map();
  }

  async fetch(request) {
    if (request.headers.get('Upgrade') === 'websocket') {
      var sockets = this.state && typeof this.state.getWebSockets === 'function' ? this.state.getWebSockets() : [];
      for (var i = 0; i < sockets.length; i += 1) {
        try { sockets[i].close(1000, 'replaced'); } catch (e) {}
      }
      var pair = new WebSocketPair();
      this.state.acceptWebSocket(pair[1]);
      return new Response(null, { status: 101, webSocket: pair[0] });
    }

    var ws = this.state && typeof this.state.getWebSockets === 'function' ? this.state.getWebSockets()[0] : null;
    if (!ws) return json({ ok: false, error: 'offline' }, 404);

    var url = new URL(request.url);
    var kind = url.pathname.endsWith('/status') ? 'status' : 'test';
    var wait = await this.limit(kind);
    if (wait > 0) {
      return json({ ok: false, error: 'rate_limited', retryAfter: wait }, 429, { 'retry-after': String(wait) });
    }

    var id = crypto.randomUUID();
    var start = Date.now();
    var result = await new Promise(function(resolve) {
      var timer = setTimeout(function() {
        this.pending.delete(id);
        resolve(null);
      }.bind(this), 8000);
      this.pending.set(id, function(payload) {
        clearTimeout(timer);
        this.pending.delete(id);
        resolve(payload);
      });
      ws.send(JSON.stringify({ type: 'test', id: id, kind: kind }));
    }.bind(this));

    if (!result) return json({ ok: false, error: 'no_reply' }, 504);
    return json({
      ok: true,
      botName: clip(result.botName),
      botId: clip(result.botId, 24),
      version: clip(result.version, 24),
      guilds: Number(result.guilds) || 0,
      latencyMs: Date.now() - start
    }, 200);
  }

  async limit(kind) {
    var config = LIMITS[kind] || LIMITS.test;
    var now = Date.now();
    var day = new Date(now).toISOString().slice(0, 10);
    var key = 'rl:' + kind;
    var state = await this.state.storage.get(key);

    if (!state || state.day !== day) {
      state = { day: day, n: 0, last: 0 };
    }

    if (config.perDay && state.n >= config.perDay) {
      var nextDay = Date.parse(day) + 86400000;
      var wait = Math.ceil((nextDay - now) / 1000);
      return wait > 0 ? wait : 1;
    }

    if (config.gapMs && (state.last + config.gapMs - now) > 0) {
      return Math.ceil((state.last + config.gapMs - now) / 1000);
    }

    state.n += 1;
    state.last = now;
    await this.state.storage.put(key, state);
    return 0;
  }

  webSocketMessage(ws, message) {
    var parsed;
    try { parsed = JSON.parse(message); } catch (e) { return; }
    if (parsed && parsed.type === 'test-result' && this.pending.has(parsed.id)) {
      this.pending.get(parsed.id)(parsed);
    }
  }

  webSocketClose(ws, code) {
    try { ws.close(code === 1005 ? 1000 : code, 'bye'); } catch (e) {}
  }
}

export async function handleApi(request, env) {
  var url = new URL(request.url);
  var path = url.pathname;

  if (!path.startsWith('/v1/')) return null;

  if (path === '/v1/health') {
    return json({ status: 'online', service: 'CivicForge API' }, 200);
  }

  if (path === '/v1/link/test' || path === '/v1/link/status') {
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'use_post', allow: 'POST' }, 405, { allow: 'POST' });
    }

    var secret = secretFrom(request);
    if (!SECRET.test(secret)) {
      return json({ ok: false, error: 'invalid_secret' }, 401);
    }

    if (!env || !env.LINK) {
      return json({ ok: false, error: 'not_configured' }, 503);
    }

    var durable = env.LINK.get(env.LINK.idFromName(await sha256(secret)));
    return durable.fetch(request);
  }

  return json({ error: 'not_found' }, 404);
}