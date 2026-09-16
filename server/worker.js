/* Ustad — live presence server (Cloudflare Worker + Durable Object).
 *
 * Counts how many people have the app open *right now* using WebSockets.
 * It stores NOTHING: a connection = +1, a disconnect = -1, and the current
 * count is broadcast to everyone. No cookies, no IDs, no logs of who.
 *
 * Deploy:  cd server && npx wrangler@latest login && npx wrangler deploy
 * Then the app connects to  wss://<name>.<subdomain>.workers.dev/ws
 */

// Only allow the app's own origins to connect (prevents random abuse).
const ALLOWED = [
  "https://ahmadabdullahsiddiqui.github.io",
  "http://localhost",
  "http://127.0.0.1",
];
const okOrigin = (o) => !o || ALLOWED.some((a) => o === a || o.startsWith(a));

export class Presence {
  constructor(state) {
    this.state = state;
    this.sessions = new Set();
  }
  broadcast() {
    const msg = JSON.stringify({ count: this.sessions.size });
    for (const ws of [...this.sessions]) {
      try { ws.send(msg); } catch { this.sessions.delete(ws); }
    }
  }
  async fetch(request) {
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response(JSON.stringify({ count: this.sessions.size }), {
        headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
      });
    }
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();
    this.sessions.add(server);
    this.broadcast();
    const drop = () => { this.sessions.delete(server); this.broadcast(); };
    server.addEventListener("close", drop);
    server.addEventListener("error", drop);
    return new Response(null, { status: 101, webSocket: client });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/ws" || url.pathname === "/count") {
      if (url.pathname === "/ws" && !okOrigin(request.headers.get("Origin"))) {
        return new Response("forbidden", { status: 403 });
      }
      const id = env.PRESENCE.idFromName("global");
      return env.PRESENCE.get(id).fetch(request);
    }
    return new Response("Ustad presence server. Connect a WebSocket to /ws.", { status: 200 });
  },
};
