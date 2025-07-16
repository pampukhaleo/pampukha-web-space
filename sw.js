
const CACHE_NAME = 'leonforge-v2';
const urlsToCache = [
  '/',
  '/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
  '/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Кешируем только существующие ресурсы
        return Promise.allSettled(
          urlsToCache.map(url => 
            fetch(url).then(response => {
              if (response.ok) {
                return cache.put(url, response);
              }
              console.warn(`Failed to cache ${url}: ${response.status}`);
            }).catch(error => {
              console.warn(`Failed to fetch ${url}:`, error);
            })
          )
        );
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Кешируем только GET запросы
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).catch(() => {
          // Если запрос не удался, возвращаем базовую страницу для навигации
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
      })
  );
});

// Очищаем старые кеши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
