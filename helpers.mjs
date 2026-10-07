import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { WebSocket } from 'undici'; // Node 22 supports global WebSocket, but this keeps compatibility

const siteModule = await import('../site.js');
const { Link } = await import('../link.js');

function makeFakeWebSocketPair() {
  const client = {
    sent: [],
    closed: false,
    readyState: 1,
    send(data) {
      this.sent.push(data);
    },
    close(code = 1000, reason = '') {
      this.closed = true;
      this.readyState = 3;
    }
  };

  const server = {
    sent: [],
    closed: false,
    readyState: 1,
    send(data) {
      this.sent.push(data);
    },
    close(code = 1000, reason = '') {
      this.closed = true;
      this.readyState = 3;
    }
  };

  client._peer = server;
  server._peer = client;

  client.serializeAttachment = () => null;
  server.serializeAttachment = () => null;

  return { client, server };
}

class FakeStorage {
  constructor() {
    this.map = new Map();
  }

  async get(key) {
    return this.map.has(key) ? this.map.get(key) : undefined;
  }

  async put(key, value) {
    this.map.set(key, value);
  }
}

class FakeState {
  constructor() {
    this.storage = new FakeStorage();
    this.webSockets = [];
  }

  acceptWebSocket(ws) {
    this.webSockets.push(ws);
  }

  getWebSockets() {
    return this.webSockets;
  }

  setWebSocketAutoResponse() {}

  close() {}
}

class FakeNamespace {
  constructor() {
    this.instances = new Map();
  }

  idFromName(name) {
    return { name };
  }

  get(id) {
    if (!this.instances.has(id.name)) {
      const state = new FakeState();
      const durable = new Link(state);
      state._durable = durable;
      this.instances.set(id.name, durable);
    }
    return this.instances.get(id.name);
  }
}

export function makeEnv() {
  const env = { LINK: new FakeNamespace() };
  return env;
}

export async function call(path, init = {}, env = makeEnv()) {
  const req = new Request('https://example.com' + path, init);
  const fetch = siteModule.default.fetch.bind(siteModule.default);
  return fetch(req, env);
}

export async function connectBot(env, secret, info = {}) {
  const durable = env.LINK.get(env.LINK.idFromName(await sha256(secret)));
  const pair = makeFakeWebSocketPair();
  durable.state = durable.state || new FakeState();
  durable.state.acceptWebSocket(pair.server);

  const req = new Request('https://example.com/v1/link', {
    method: 'GET',
    headers: {
      Upgrade: 'websocket',
      Authorization: 'Bearer ' + secret
    }
  });

  await durable.fetch(req);

  const socket = durable.state.getWebSockets()[0];
  let lastText = null;

  const originalSend = socket.send.bind(socket);

  socket.send = function(data) {
    originalSend.call(this, data);
    lastText = data;
  };

  return {
    socket,
    sendResult(id, payload) {
      const result = { type: 'test-result', id, ...payload };
      durable.webSocketMessage(socket, JSON.stringify(result));
    },
    lastText() {
      return lastText;
    }
  };
}

export function setClock(skewMs) {
  const now = Date.now();
  const base = now + skewMs;
  const oldNow = Date.now;
  Date.now = () => base;
  return () => { Date.now = oldNow; };
}

export function serve(port, env, router = null) {
  const app = router || siteModule.default.fetch.bind(siteModule.default);

  const server = createServer(async (req, res) => {
    const request = new Request(`http://127.0.0.1:${port}${req.url}`, {
      method: req.method,
      headers: req.headers
    });

    const response = await app(request, env || makeEnv());
    res.statusCode = response.status;
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }
    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

function sha256(input) {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}