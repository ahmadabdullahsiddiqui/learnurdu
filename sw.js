/* Ustad - The Urdu Teacher — offline service worker.
   HTML is network-first so a new version lands on the next online visit;
   everything else is cache-first so the app opens with no connection.     */
const CACHE = 'ustad-v7';
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
  // Precache, then WAIT (no auto-skipWaiting) so the app can prompt the user
  // before a new version takes over mid-session.
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.allSettled(ASSETS.map((u) => c.add(u))))
  );
});

// The page asks us to activate the new version when the user taps "Update".
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

  const isDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
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
