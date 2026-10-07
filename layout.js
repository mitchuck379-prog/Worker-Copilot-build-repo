export const SITE = {
  name: 'CivicForge Studio',
  url: 'https://simpletickets.xyz',
  description: 'CivicForge Studio builds open-source Discord tools that communities run themselves.'
};

export function esc(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const CSS = [
  ':root {',
  '  --bg: #1a1b1d;',
  '  --surface: #242528;',
  '  --panel: #2a2b2e;',
  '  --hover: #323336;',
  '  --line: #3a3b3f;',
  '  --text: #d4d6d9;',
  '  --bright: #f2f3f5;',
  '  --muted: #8f9399;',
  '  --green: #57c27d;',
  '  --red: #e5645a;',
  '  --max: 1160px;',
  '  color-scheme: dark;',
  '}',
  'body { margin: 0; background: var(--bg); color: var(--text); font: 16px/1.6 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }',
  '* { box-sizing: border-box; }',
  'a { color: inherit; text-decoration: none; }',
  'main { width: min(100%, var(--max)); margin: 0 auto; padding: 2rem 1rem 4rem; }',
  '.topbar { position: sticky; top: 0; z-index: 20; border-bottom: 1px solid var(--line); background: rgba(26, 27, 29, 0.88); backdrop-filter: blur(8px); }',
  '.topbar-inner { width: min(100%, var(--max)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 0.9rem 1rem; }',
  '.brand { display: inline-flex; align-items: center; gap: 0.6rem; font-weight: 700; color: var(--bright); letter-spacing: -0.02em; }',
  '.brand-mark { width: 10px; height: 10px; border-radius: 50%; background: var(--green); display: inline-block; box-shadow: 0 0 14px rgba(87, 194, 125, 0.7); }',
  '.btn { display: inline-flex; align-items: center; justify-content: center; border-radius: 0.8rem; padding: 0.8rem 1.1rem; font-weight: 700; border: 1px solid var(--line); background: var(--surface); color: var(--bright); cursor: pointer; }',
  '.btn:hover { background: var(--panel); }',
  '.btn.primary { background: var(--bright); color: var(--bg); border-color: transparent; }',
  '.btn.primary:hover { background: #e8eaed; }',
  '.btn.go::after { content: " →"; }',
  '.btn:disabled { opacity: 0.5; cursor: not-allowed; }',
  '.status-pill { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.45rem 0.8rem; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); color: var(--muted); font-size: 0.8rem; }',
  '.status-dot { width: 0.6rem; height: 0.6rem; display: inline-block; border-radius: 50%; background: var(--muted); }',
  '.status-pill[data-state="ok"] .status-dot { background: var(--green); }',
  '.status-pill[data-state="bad"] .status-dot { background: var(--red); }',
  'h1 { margin: 0 0 0.8rem; color: var(--bright); font-size: clamp(2.3rem, 5vw, 4rem); line-height: 1.05; letter-spacing: -0.05em; }',
  'h2 { margin: 2rem 0 0.8rem; color: var(--bright); font-size: clamp(1.4rem, 3vw, 2rem); letter-spacing: -0.04em; }',
  'h3 { margin: 0.5rem 0; color: var(--bright); font-size: 1.1rem; }',
  'p { color: var(--text); margin-bottom: 1rem; }',
  'ul, ol { margin: 0 0 1rem 1.5rem; color: var(--text); }',
  'li { margin-bottom: 0.5rem; }',
  'code { background: var(--panel); padding: 0.2rem 0.4rem; border-radius: 0.3rem; font-family: monospace; font-size: 0.9em; }',
  'pre { background: var(--panel); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.85em; color: var(--text); margin-bottom: 1rem; }',
  '.muted { color: var(--muted); }',
  '.hero { padding-top: 2rem; padding-bottom: 1.75rem; }',
  '.hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.5rem; align-items: center; }',
  '.panel { background: var(--surface); border: 1px solid var(--line); border-radius: 1rem; padding: 1.2rem; }',
  '.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }',
  '.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }',
  '.release-card { background: var(--surface); border: 1px solid var(--line); border-radius: 1rem; padding: 1rem; }',
  '.release-card h3 { margin: 0.5rem 0 0.4rem; color: var(--bright); font-size: 1.2rem; }',
  '.release-card a { color: var(--green); }',
  '.release-card a:hover { text-decoration: underline; }',
  '.badge { display: inline-block; padding: 0.24rem 0.65rem; border-radius: 999px; border: 1px solid var(--line); background: rgba(255,255,255,0.02); color: var(--muted); font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; }',
  '.tabs { display: flex; gap: 0.5rem; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; padding-bottom: 0.4rem; border-bottom: 1px solid var(--line); }',
  '.tabs::-webkit-scrollbar { display: none; }',
  '.tab { white-space: nowrap; background: transparent; border: 1px solid var(--line); border-bottom: 0; color: var(--muted); border-radius: 0.75rem 0.75rem 0 0; padding: 0.7rem 1rem; cursor: pointer; }',
  '.tab:hover { background: rgba(255,255,255,0.02); }',
  '.tab[aria-current="page"] { color: var(--bright); background: var(--surface); }',
  '.feature-row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 0.8rem 0; border-bottom: 1px solid var(--line); }',
  '.feature-meta { display: flex; flex-direction: column; gap: 0.15rem; }',
  '.feature-meta strong { color: var(--bright); }',
  '.chip { display: inline-flex; padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid var(--line); color: var(--muted); font-size: 0.7rem; white-space: nowrap; }',
  '.chip.in { color: var(--green); border-color: rgba(87, 194, 125, 0.4); background: rgba(87, 194, 125, 0.1); }',
  '.chip.planned { color: var(--red); border-color: rgba(229, 100, 90, 0.4); background: rgba(229, 100, 90, 0.08); }',
  '.footer { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--line); color: var(--muted); }',
  '.footer-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }',
  '.footer-grid h3 { margin-top: 0; color: var(--bright); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; }',
  '.footer-grid a { color: var(--muted); }',
  '.footer-grid a:hover { color: var(--bright); }',
  '.reveal { opacity: 1; transform: none; transition: opacity 0.25s ease, transform 0.25s ease; }',
  'html.js .reveal { opacity: 0; transform: translateY(8px); }',
  'html.js .reveal.is-visible { opacity: 1; transform: none; }',
  'blockquote { margin: 0; }',
  'blockquote p { margin-bottom: 0.5rem; }',
  'blockquote footer { margin-top: 0.75rem; font-size: 0.9em; }',
  '@media (max-width: 760px) {',
  '  .hero-grid, .grid-3, .grid-2, .footer-grid { grid-template-columns: 1fr; }',
  '  .tabs { gap: 0.4rem; }',
  '  .tab { padding: 0.65rem 0.8rem; }',
  '  main { padding-left: 0.8rem; padding-right: 0.8rem; }',
  '  .topbar-inner { padding-left: 0.8rem; padding-right: 0.8rem; }',
  '}'
].join('\n');

export const SCRIPT = [
  'document.documentElement.classList.add("js");',
  'const HASH_MAP = ' + JSON.stringify({
    '#/how': '/releases/erlc-lite/setup',
    '#/setup': '/releases/erlc-lite/setup',
    '#/features': '/releases/erlc-lite/features',
    '#/faq': '/releases/erlc-lite/faq',
    '#/api': '/releases/erlc-lite/api',
    '#/hosting': '/releases/erlc-lite/hosting',
    '#/products': '/releases',
    '#/about': '/about',
    '#/privacy': '/legal/privacy',
    '#/terms': '/legal/terms',
    '#/credits': '/legal/credits',
    '#/dashboard': '/releases/erlc-lite-dashboard/dashboard'
  }) + ';',
  'if (location.hash && HASH_MAP[location.hash]) { location.replace(HASH_MAP[location.hash]); }',
  'if ("IntersectionObserver" in window) { var observer = new IntersectionObserver(function(entries) { entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }); }, { threshold: 0.15 }); document.querySelectorAll(".reveal").forEach(function(el) { observer.observe(el); }); } else { document.querySelectorAll(".reveal").forEach(function(el) { el.classList.add("is-visible"); }); }'
].join('\n');

export function page(opts) {
  var title = (opts && opts.title) || SITE.name;
  var description = (opts && opts.description) || SITE.description;
  var body = (opts && opts.body) || '';
  var scripts = (opts && opts.scripts) || '';
  var path = (opts && opts.path) || '/';

  return [
    '<!doctype html>',
    '<html lang="en">',
    '<head>',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    '  <title>' + esc(title) + '</title>',
    '  <meta name="description" content="' + esc(description) + '">',
    '  <meta property="og:title" content="' + esc(title) + '">',
    '  <meta property="og:description" content="' + esc(description) + '">',
    '  <link rel="canonical" href="' + SITE.url + path + '">',
    '  <style>' + CSS + '</style>',
    '</head>',
    '<body>',
    body,
    '<script>' + SCRIPT + '</script>',
    scripts ? '<script>' + scripts + '</script>' : '',
    '</body>',
    '</html>'
  ].join('\n');
}