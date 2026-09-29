
const CACHE_NAME = "intospaceV1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/starship.png",
  "/reactor.gif",
  "/monscript.js",
  "/explosion.gif",
  "/background.jpg",
  "/asteroid.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
