const CACHE_NAME = 'carnet-de-bande-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    // Assets locaux : cache d'abord, puis mise à jour en arrière-plan
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request).then((networkResp) => {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResp.clone()));
          return networkResp;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
  } else {
    // Bibliothèques externes (Chart.js) : on les met en cache dès qu'elles
    // chargent avec succès, pour qu'elles restent disponibles hors-ligne.
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((networkResp) => {
          if (networkResp && networkResp.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResp.clone()));
          }
          return networkResp;
        }).catch(() => cached);
      })
    );
  }
});
