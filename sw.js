const CACHE='cellmarket-pro-v1';
const ASSETS=['./','index.html','css/style.css','js/app.js','js/storage.js','manifest.json','assets/icons/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
