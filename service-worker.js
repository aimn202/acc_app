self.addEventListener('install', (event) => {
    event.waitUntil(caches.open('ACCAPP-cache-v1').then((cache) => {
        return cache.addAll([
            './login.html',
            './home.html',
            './style.css',
            './script.js',
            './manifest.json'
        ]);
    }));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
