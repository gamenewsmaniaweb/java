const staticCacheName = 'v17';
const filesToCache = [
  '/',
    'https://rawcdn.githack.com/gamenewsmaniaweb/webff/126a90868bf868b0b634a2b992bf19d0709c842c/index.html',
        'https://rawcdn.githack.com/gamenewsmaniaweb/web/a7b63ff8a3d7a574d62ccfe5f04dfc59430784c1/style.css',
                  'https://rawcdn.githack.com/gamenewsmaniaweb/new/0654286c5181b9160112aaa6b6e526253298379b/pwa.js',
                             'https://i.ibb.co/74zykqX/Offline-Image.png'
                                                  ];
self.addEventListener('install', event => {
  event.waitUntil(
      caches.open(staticCacheName).then(cache => {
            return cache.addAll(filesToCache);
                })
                  );
                  });
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(function(cacheNames) {
      return Promise.all(
            cacheNames.filter(function(staticCacheName) {
                  }).map(function(staticCacheName) {
                          return caches.delete(staticCacheName);
                                })
                                    );
                                      }));
                                      });
self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                    return cachedResponse;
                          }
                                return fetch(event.request);
                                    })
                                      );
                                      });
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
        }
        });
