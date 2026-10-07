import { SITE, releases, getRelease, tabsFor, featuresFor, faq, hosting, setupSteps, legal } from './data.js';
import { esc } from './layout.js';

export function home() {
  return {
    title: 'CivicForge Studio',
    description: 'Open-source Discord tools for communities that run their own automation and moderation stack.',
    body: [
      '<header class="topbar">',
      '  <div class="topbar-inner">',
      '    <a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a>',
      '    <a class="status-pill" href="/releases/erlc-lite/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a>',
      '  </div>',
      '</header>',
      '<main>',
      '  <section class="hero">',
      '    <div class="hero-grid">',
      '      <div>',
      '        <h1>Open-source Discord tools, built to be run by you.</h1>',
      '        <p>CivicForge Studio helps communities run their own moderation, ticketing and server-ops tooling without depending on a third-party platform.</p>',
      '        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">',
      '          <a class="btn primary go" href="/releases">View releases</a>',
      '          <a class="btn" href="/about">About the studio</a>',
      '        </div>',
      '      </div>',
      '      <div class="panel reveal">',
      '        <h2>Current Releases</h2>',
      '        <div class="release-card">',
      '          <span class="badge">In development</span>',
      '          <h3><a href="/releases/erlc-lite">ERLC Lite</a></h3>',
      '          <p class="muted">Self-hosted moderation and utility bot for ER:LC communities.</p>',
      '        </div>',
      '        <div class="release-card" style="margin-top:0.9rem;">',
      '          <span class="badge">In development</span>',
      '          <h3><a href="/releases/erlc-lite-dashboard">ERLC Lite &amp; Dashboard</a></h3>',
      '          <p class="muted">Everything in Lite plus a browser dashboard and remote controls.</p>',
      '        </div>',
      '        <div style="margin-top:1rem;">',
      '          <a class="btn" href="/releases">All releases</a>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </section>',
      '  <section>',
      '    <h2>Built for self-hosted communities</h2>',
      '    <div class="grid-3">',
      '      <div class="panel reveal"><h3>Self-hosted</h3><p class="muted">You control the server, the process and the data.</p></div>',
      '      <div class="panel reveal"><h3>Open source</h3><p class="muted">The stack is transparent and owned by the community.</p></div>',
      '      <div class="panel reveal"><h3>Privacy-first</h3><p class="muted">No extra platform dependency is required for daily operations.</p></div>',
      '    </div>',
      '  </section>',
      '<footer class="footer">',
      '  <div class="footer-grid">',
      '    <div><h3>Studio</h3><p><a href="/about">About</a></p><p><a href="/releases">Releases</a></p></div>',
      '    <div><h3>Releases</h3><p><a href="/releases/erlc-lite">ERLC Lite</a></p><p><a href="/releases/erlc-lite-dashboard">Lite &amp; Dashboard</a></p></div>',
      '    <div><h3>Legal</h3><p><a href="/legal/privacy">Privacy</a></p><p><a href="/legal/terms">Terms</a></p><p><a href="/legal/credits">Credits</a></p></div>',
      '  </div>',
      '  <p class="muted" style="margin-top:1rem;">CivicForge Studio is an independent project and is not affiliated with Discord or the developers of ER:LC.</p>',
      '</footer>',
      '</main>'
    ].join('')
  };
}

export function releasesIndex() {
  return {
    title: 'Releases · CivicForge Studio',
    description: 'See the current CivicForge Studio releases and edition details.',
    body: [
      '<header class="topbar"><div class="topbar-inner"><a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a><a class="status-pill" href="/releases/erlc-lite/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a></div></header>',
      '<main>',
      '  <h1>Releases</h1>',
      '  <div class="grid-2">',
      '    <div class="release-card reveal"><span class="badge">In development</span><h3><a href="/releases/erlc-lite">ERLC Lite</a></h3><p class="muted">Local moderation and utility bot for ER:LC communities.</p></div>',
      '    <div class="release-card reveal"><span class="badge">In development</span><h3><a href="/releases/erlc-lite-dashboard">ERLC Lite &amp; Dashboard</a></h3><p class="muted">Adds a browser dashboard and remote controls.</p></div>',
      '  </div>',
      '</main>'
    ].join('')
  };
}

export function about() {
  return {
    title: 'About us · CivicForge Studio',
    description: 'Learn about the CivicForge Studio mission and the founder story behind the project.',
    body: [
      '<header class="topbar"><div class="topbar-inner"><a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a><a class="status-pill" href="/releases/erlc-lite/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a></div></header>',
      '<main>',
      '  <h1>About us</h1>',
      '  <p>CivicForge Studio builds open-source community tools that small Discord communities can run themselves, without depending on a large vendor or a private SaaS.</p>',
      '</main>'
    ].join('')
  };
}

export function legalHub() {
  return {
    title: 'Legal · CivicForge Studio',
    description: 'Review the CivicForge Studio privacy policy, terms and credits.',
    body: [
      '<header class="topbar"><div class="topbar-inner"><a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a><a class="status-pill" href="/releases/erlc-lite/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a></div></header>',
      '<main>',
      '  <h1>Legal</h1>',
      '  <div class="grid-3">',
      '    <div class="panel reveal"><h3><a href="/legal/privacy">Privacy policy</a></h3><p class="muted">Learn how browser storage and site data are handled.</p></div>',
      '    <div class="panel reveal"><h3><a href="/legal/terms">Terms of service</a></h3><p class="muted">Important service rules and responsibilities.</p></div>',
      '    <div class="panel reveal"><h3><a href="/legal/credits">Credits</a></h3><p class="muted">The open-source tools and platforms behind the project.</p></div>',
      '  </div>',
      '</main>'
    ].join('')
  };
}

export function legalDoc(id) {
  var entry = legal[id] || legal.privacy;
  var sections = (entry.sections || []).map(function(section) {
    return '<h2>' + esc(section.h) + '</h2><p>' + esc(section.html) + '</p>';
  }).join('');

  return {
    title: entry.title + ' · CivicForge Studio',
    description: entry.title + ' for CivicForge Studio.',
    body: [
      '<header class="topbar"><div class="topbar-inner"><a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a><a class="status-pill" href="/releases/erlc-lite/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a></div></header>',
      '<main>',
      '  <h1>' + esc(entry.title) + '</h1>',
      '  <p class="muted">Last updated: ' + esc(entry.updated) + '</p>',
      sections,
      '</main>'
    ].join('')
  };
}

export function notFound() {
  return {
    title: 'Page not found · CivicForge Studio',
    description: 'The page you requested could not be found.',
    body: [
      '<header class="topbar"><div class="topbar-inner"><a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a><a class="status-pill" href="/releases/erlc-lite/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a></div></header>',
      '<main>',
      '  <h1>Page not found</h1>',
      '  <p>The page you requested is not available.</p>',
      '  <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">',
      '    <a class="btn primary" href="/">Home</a>',
      '    <a class="btn" href="/releases">Releases</a>',
      '  </div>',
      '</main>'
    ].join('')
  };
}

export function releaseFrame(release, activeTab, inner) {
  var tabs = tabsFor(release).map(function(tab) {
    var href = '/releases/' + release.id + (tab.id === 'overview' ? '' : '/' + tab.id);
    var current = tab.id === activeTab ? ' aria-current="page"' : '';
    return '<a class="tab" href="' + href + '"' + current + '>' + esc(tab.label) + '</a>';
  }).join('');

  return [
    '<header class="topbar"><div class="topbar-inner"><a class="brand" href="/"><span class="brand-mark"></span> CivicForge <span class="muted">Studio</span></a><a class="status-pill" href="/releases/' + release.id + '/api" data-state="ok"><span class="status-dot"></span><span>API online</span></a></div></header>',
    '<main>',
    '  <h1>' + esc(release.name) + '</h1>',
    '  <div class="tabs" role="tablist">' + tabs + '</div>',
    '  <div class="panel" style="margin-top:1rem;">',
    inner,
    '  </div>',
    '</main>'
  ].join('');
}

export function releaseTab(release, tab) {
  if (!release) return null;

  switch (tab) {
    case 'overview':
      return {
        title: release.name + ' · CivicForge Studio',
        description: release.summary,
        body: releaseFrame(release, 'overview', [
          '<h2>About</h2>',
          release.about.map(function(p) { return '<p>' + esc(p) + '</p>'; }).join(''),
          '<h2>What is included</h2>',
          '<ul>' + release.highlights.map(function(h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>',
          '<h2>Requirements</h2>',
          '<ul>' + release.requires.map(function(r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>'
        ].join(''))
      };

    case 'features':
      var items = featuresFor(release);
      return {
        title: 'Features · ' + release.name + ' · CivicForge Studio',
        description: 'Features for ' + release.name,
        body: releaseFrame(release, 'features', [
          '<h2>Features</h2>',
          items.map(function(item) {
            var status = item.status || 'in';
            return '<div class="feature-row"><div class="feature-meta"><strong>' + esc(item.name) + '</strong><span class="muted">' + esc(item.blurb) + '</span></div><span class="chip ' + status + '">' + esc(status) + '</span></div>';
          }).join('')
        ].join(''))
      };

    case 'dashboard':
      return {
        title: 'Dashboard · ' + release.name + ' · CivicForge Studio',
        description: 'Dashboard for ' + release.name,
        body: releaseFrame(release, 'dashboard', [
          '<h2>Dashboard</h2>',
          '<p>Browser-based control panel for administrators, synced with your self-hosted bot runtime.</p>',
          '<div class="grid-2">',
          '  <div class="panel reveal"><h3>Server overview</h3><p class="muted">Track active installs and server health.</p></div>',
          '  <div class="panel reveal"><h3>Config editor</h3><p class="muted">Adjust settings and defaults without bot restart.</p></div>',
          '  <div class="panel reveal"><h3>Bot status</h3><p class="muted">View uptime, active Guilds and API health.</p></div>',
          '  <div class="panel reveal"><h3>Support tools</h3><p class="muted">Manage tickets and logs remotely.</p></div>',
          '</div>'
        ].join(''))
      };

    case 'api':
      return {
        title: 'API · ' + release.name + ' · CivicForge Studio',
        description: 'API reference for ' + release.name,
        body: releaseFrame(release, 'api', [
          '<h2>API Reference</h2>',
          '<h3>Health Check</h3>',
          '<p><code>GET /v1/health</code> returns service status.</p>',
          '<h3>Bot Link</h3>',
          '<p><code>POST /v1/link/test</code> verifies bot reachability with your <code>CIVICFORGE_API_KEY</code>.</p>',
          '<p>Rate limited: 20 calls per day, 10-second gap between calls.</p>'
        ].join(''))
      };

    case 'setup':
      return {
        title: 'Setup · ' + release.name + ' · CivicForge Studio',
        description: 'Setup guide for ' + release.name,
        body: releaseFrame(release, 'setup', [
          '<h2>Setup Guide</h2>',
          setupSteps.map(function(step) {
            return '<div class="feature-row"><div class="feature-meta"><strong>' + esc(step.title) + '</strong><span class="muted">' + esc(step.html) + '</span></div></div>';
          }).join('')
        ].join(''))
      };

    case 'hosting':
      return {
        title: 'Hosting · ' + release.name + ' · CivicForge Studio',
        description: 'Recommended hosting for ' + release.name,
        body: releaseFrame(release, 'hosting', [
          '<h2>Recommended Hosting</h2>',
          '<div class="grid-2">',
          hosting.map(function(h) {
            return '<div class="panel reveal"><span class="badge">' + esc(h.tag) + '</span><h3>' + esc(h.name) + '</h3><p class="muted">' + esc(h.blurb) + '</p><a href="' + esc(h.url) + '" target="_blank" rel="noopener">Visit</a></div>';
          }).join(''),
          '</div>'
        ].join(''))
      };

    case 'faq':
      return {
        title: 'FAQ · ' + release.name + ' · CivicForge Studio',
        description: 'Frequently asked questions',
        body: releaseFrame(release, 'faq', [
          '<h2>FAQ</h2>',
          faq.map(function(item) {
            return '<div class="feature-row"><div class="feature-meta"><strong>' + esc(item.q) + '</strong><span class="muted">' + esc(item.a) + '</span></div></div>';
          }).join('')
        ].join(''))
      };

    default:
      return null;
  }
}

export { home, releasesIndex, about, legalHub, legalDoc, notFound };