# Ustad — live presence server

A tiny **Cloudflare Worker + Durable Object** that counts how many people have
Ustad open right now, over WebSockets. It stores nothing: a connection is +1,
a disconnect is −1, and the current number is broadcast to everyone. No cookies,
no identifiers, no per‑user logging.

## Deploy (free tier, ~3 minutes)
You need a free Cloudflare account.

```
cd server
npx wrangler@latest login        # opens the browser to authorize
npx wrangler@latest deploy
```

Wrangler prints a URL like:

```
https://ustad-presence.<your-subdomain>.workers.dev
```

The WebSocket endpoint is that URL + `/ws`, i.e.:

```
wss://ustad-presence.<your-subdomain>.workers.dev/ws
```

**Send me that `wss://…/ws` URL** and I will:
1. set `PRESENCE_URL` in `app.js`,
2. add the worker's origin to the app's `connect-src` CSP,
3. update the privacy policy to disclose the live‑count feature.

Until then the feature stays **off** and the app makes no runtime connections.

## Cost
Cloudflare's free plan covers small‑to‑moderate traffic. Durable Objects on the
free plan are sufficient for a single global counter like this.

## Security / privacy
- The worker only accepts WebSocket upgrades from Ustad's own origins
  (GitHub Pages + localhost) — see `ALLOWED` in `worker.js`; add your custom
  domain there if you use one.
- It broadcasts only an integer `count`. It never stores or logs who connected.
- Cloudflare (as the host) still terminates the connection and can see the IP at
  the network layer, the same as any web request — this is disclosed in the
  privacy policy once the feature is enabled.
