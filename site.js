import { page } from './layout.js';
import { releases, getRelease, tabsFor } from './data.js';
import { home, releasesIndex, about, legalHub, legalDoc, notFound, releaseTab } from './pages.js';
import { handleApi, Link } from './link.js';

export { Link };

export function allPaths() {
  var output = ['/', '/releases', '/about', '/legal', '/legal/privacy', '/legal/terms', '/legal/credits'];
  var releaseIds = ['erlc-lite', 'erlc-lite-dashboard'];
  for (var i = 0; i < releaseIds.length; i += 1) {
    var release = getRelease(releaseIds[i]);
    if (!release) continue;
    output.push('/releases/' + release.id);
    var tabs = tabsFor(release);
    for (var j = 0; j < tabs.length; j += 1) {
      output.push('/releases/' + release.id + '/' + tabs[j].id);
    }
  }
  return output;
}

export const REDIRECTS = {
  '/products': '/releases',
  '/how-it-works': '/releases/erlc-lite/setup',
  '/features': '/releases/erlc-lite/features',
  '/faq': '/releases/erlc-lite/faq',
  '/api': '/releases/erlc-lite/api',
  '/hosting': '/releases/erlc-lite/hosting',
  '/dashboard': '/releases/erlc-lite-dashboard/dashboard',
  '/privacy': '/legal/privacy',
  '/terms': '/legal/terms',
  '/credits': '/legal/credits'
};

function htmlResponse(pageData, path) {
  var output = page({
    path: path || '/',
    title: pageData.title,
    description: pageData.description,
    body: pageData.body,
    scripts: pageData.scripts || ''
  });

  return new Response(output, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300'
    }
  });
}

export default {
  async fetch(request, env) {
    var url = new URL(request.url);
    var path = url.pathname;

    var handled = await handleApi(request, env);
    if (handled) return handled;

    if (path === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\nSitemap: https://simpletickets.xyz/sitemap.xml\n', {
        headers: { 'content-type': 'text/plain; charset=utf-8' }
      });
    }

    if (path === '/sitemap.xml') {
      var xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
      for (var i = 0; i < allPaths().length; i += 1) {
        xml.push('<url><loc>https://simpletickets.xyz' + allPaths()[i] + '</loc></url>');
      }
      xml.push('</urlset>');
      return new Response(xml.join(''), {
        headers: { 'content-type': 'application/xml; charset=utf-8' }
      });
    }

    if (path.endsWith('/') && path !== '/') {
      return Response.redirect(path.replace(/\/+$/, ''), 301);
    }

    if (REDIRECTS[path]) {
      return Response.redirect(REDIRECTS[path], 301);
    }

    if (path === '/') return htmlResponse(home(), path);
    if (path === '/releases') return htmlResponse(releasesIndex(), path);
    if (path === '/about') return htmlResponse(about(), path);
    if (path === '/legal') return htmlResponse(legalHub(), path);
    if (path === '/legal/privacy') return htmlResponse(legalDoc('privacy'), path);
    if (path === '/legal/terms') return htmlResponse(legalDoc('terms'), path);
    if (path === '/legal/credits') return htmlResponse(legalDoc('credits'), path);

    if (path.startsWith('/releases/')) {
      var parts = path.split('/').filter(Boolean);
      var releaseId = parts[1];
      var tab = parts[2] || 'overview';
      var release = getRelease(releaseId);

      if (!release) return htmlResponse(notFound(), path);
      var pageData = releaseTab(release, tab);
      if (!pageData) return htmlResponse(notFound(), path);
      return htmlResponse(pageData, path);
    }

    return htmlResponse(notFound(), path);
  }
};