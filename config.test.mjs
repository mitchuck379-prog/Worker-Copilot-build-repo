import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

test('wrangler.toml has the required lines', () => {
  const text = readFileSync(new URL('../wrangler.toml', import.meta.url), 'utf8');
  assert.match(text, /name = "civicforge"/);
  assert.match(text, /main = "site.js"/);
  assert.match(text, /compatibility_date = "2026-10-01"/);
  assert.match(text, /routes = \[\{ pattern = "simpletickets.xyz", custom_domain = true \}\]/);
  assert.match(text, /name = "LINK"/);
  assert.match(text, /class_name = "Link"/);
  assert.match(text, /tag = "v1"/);
  assert.match(text, /new_sqlite_classes = \["Link"\]/);
});

test('main file exists and exports Link', async () => {
  const mod = await import('../site.js');
  assert.ok(mod.default && typeof mod.default.fetch === 'function');
  assert.ok(mod.Link);
});

test('deployable files import only top-level files', async () => {
  const files = ['site.js', 'data.js', 'layout.js', 'pages.js', 'link.js', 'logo.js'];
  for (const file of files) {
    const source = readFileSync(new URL('../' + file, import.meta.url), 'utf8');
    const matches = [...source.matchAll(/from ["']\.\/([^"']+)["']/g)];
    for (const match of matches) {
      const dep = match[1];
      assert.ok(dep.endsWith('.js'));
      const candidate = resolve(process.cwd(), 'src', dep);
      // we only care that the imported target is top-level and exists in repo root
      const fsPath = new URL('../' + dep, import.meta.url);
      assert.doesNotThrow(() => readFileSync(fsPath, 'utf8'));
    }
  }
});