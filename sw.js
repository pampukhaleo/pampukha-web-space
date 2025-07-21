// const CACHE_NAME = 'leonforge‑v2';
// const urlsToCache = [
//   // оставляем здесь только статику, без '/'
//   '/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
//   '/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png'
// ];
//
// self.addEventListener('install', event => {
//   self.skipWaiting();
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache =>
//       Promise.allSettled(
//         urlsToCache.map(url =>
//           fetch(url).then(res => {
//             if (res.ok) return cache.put(url, res);
//           }).catch(()=>{})
//         )
//       )
//     )
//   );
// });
//
// self.addEventListener('activate', event => {
//   self.clients.claim();
//   event.waitUntil(
//     caches.keys().then(keys =>
//       Promise.all(
//         keys
//           .filter(k => k !== CACHE_NAME)
//           .map(k => caches.delete(k))
//       )
//     )
//   );
// });
//
// self.addEventListener('fetch', event => {
//   // для навигации (т.е. для index.html) — network‑first
//   if (event.request.mode === 'navigate') {
//     event.respondWith(
//       fetch(event.request)
//         .then(res => {
//           // можно дополнительно закешировать новую html, если надо
//           return res;
//         })
//         .catch(() => caches.match('/'))
//     );
//     return;
//   }
//
//   // остальная статика — cache‑first
//   event.respondWith(
//     caches.match(event.request).then(r => r || fetch(event.request))
//   );
// });
