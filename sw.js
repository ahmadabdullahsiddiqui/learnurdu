/* Ustad - The Urdu Teacher — offline service worker.
   HTML is network-first so a new version lands on the next online visit;
   everything else is cache-first so the app opens with no connection.     */
const CACHE = 'ustad-v16';
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./privacy.html",
  "./manifest.json",
  "./fonts.css",
  "./icon-16.png",
  "./icon-32.png",
  "./icon-48.png",
  "./icon-128.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png",
  "./fonts/fredoka-500-latin-ext.woff2",
  "./fonts/fredoka-500-latin.woff2",
  "./fonts/fredoka-600-latin-ext.woff2",
  "./fonts/fredoka-600-latin.woff2",
  "./fonts/fredoka-700-latin-ext.woff2",
  "./fonts/fredoka-700-latin.woff2",
  "./fonts/ibm-plex-mono-400-italic-latin-ext.woff2",
  "./fonts/ibm-plex-mono-400-italic-latin.woff2",
  "./fonts/ibm-plex-mono-400-latin-ext.woff2",
  "./fonts/ibm-plex-mono-400-latin.woff2",
  "./fonts/ibm-plex-mono-500-latin-ext.woff2",
  "./fonts/ibm-plex-mono-500-latin.woff2",
  "./fonts/ibm-plex-sans-400-latin-ext.woff2",
  "./fonts/ibm-plex-sans-400-latin.woff2",
  "./fonts/ibm-plex-sans-500-latin-ext.woff2",
  "./fonts/ibm-plex-sans-500-latin.woff2",
  "./fonts/ibm-plex-sans-600-latin-ext.woff2",
  "./fonts/ibm-plex-sans-600-latin.woff2",
  "./fonts/newsreader-400-latin-ext.woff2",
  "./fonts/newsreader-400-latin.woff2",
  "./fonts/newsreader-600-latin-ext.woff2",
  "./fonts/newsreader-600-latin.woff2",
  "./fonts/noto-nastaliq-urdu-400-arabic.woff2",
  "./fonts/noto-nastaliq-urdu-400-latin-ext.woff2",
  "./fonts/noto-nastaliq-urdu-400-latin.woff2",
  "./fonts/noto-nastaliq-urdu-700-arabic.woff2",
  "./fonts/noto-nastaliq-urdu-700-latin-ext.woff2",
  "./fonts/noto-nastaliq-urdu-700-latin.woff2"
];

self.addEventListener('install', (e) => {
  // Precache, then take over immediately so a new deploy activates on the next
  // load (paired with clients.claim + the page's reload-on-controllerchange,
  // this makes a normal refresh always land on the latest version).
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(ASSETS.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  // The app "shell" — the HTML page and the code that runs it. Served
  // network-first with revalidation so a normal refresh always loads the
  // latest version online (fonts/audio below stay cache-first).
  const isShell = isDoc || /\/(app\.js|styles\.css)$/.test(url.pathname);

  if (isShell) {
    e.respondWith(
      // {cache:'no-cache'} bypasses the browser HTTP cache and revalidates,
      // so GitHub Pages' 10-minute caching can't serve a stale build.
      fetch(url.href, { cache: 'no-cache' })
        .then((res) => {
          if (res && res.status === 200 && url.origin === self.location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(isDoc ? './index.html' : req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(isDoc ? './index.html' : req).then((r) => r || caches.match('./')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        // Only cache our OWN same-origin, successful, non-opaque responses.
        if (res && res.status === 200 && res.type === 'basic' &&
            new URL(req.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
    })
  );
});
