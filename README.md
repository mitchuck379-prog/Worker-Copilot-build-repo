# CivicForge Studio redesign

This repository contains the Cloudflare Worker implementation for the CivicForge Studio redesign.

## Files

- `site.js` — router and page entry
- `data.js` — release, feature and content metadata
- `layout.js` — shared HTML shell, CSS and global script
- `pages.js` — landing, release and legal page builders
- `link.js` — bot link API and Durable Object
- `logo.js` — logo asset
- `wrangler.toml` — Cloudflare Worker config

## Deploy

1. Ensure the Worker is named `civicforge`.
2. Ensure the route is `simpletickets.xyz`.
3. Run:

   `npx wrangler deploy`

## Rate limits

- `/v1/link/test`: 1 every 10 seconds and 20 per day per secret
- `/v1/link/status`: 1 every 3 seconds and 500 per day per secret
- dashboard configuration changes: 30 per minute and 300 per day per installation

## Adding a release

Add a new entry to the `releases` array in `data.js`. The page router automatically exposes the standard release tabs using the shared page builders.