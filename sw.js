// const CACHE_NAME = "englisharena-6";

// const fileToCache = [
//     './',
//     './index.html',
//     './app.js',
//     './components/home-page.js',
//     './components/page-notfound.js',
//     './components/table-page.js',
//     './view/main.js',
//     './js/materialize.min.js',
//     './js/data-api.js',
//     './js/vaadin-router.js',
//     './css/materialize.min.css',
//     './css/own-style.css',
//     './img/banner.jpg',
//     './img/banner-fav.jpg',
//     './img/banner-squad.jpg',
//     './img/banner-table.jpg',

// ];

// self.addEventListener('install', event => {
//     console.log("service worker installing...");
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             console.log("service worker caching all...");
//             return cache.addAll(fileToCache);
//         }).catch(error => {
//             console.log(error)
//         })
//     )
// });

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request).then(res => {
//             console.log(`service worker fetching resource: ${event.request.url}`);
//             return res || fetch(event.request).then(response => {
//                 return caches.open(CACHE_NAME).then(cache => {
//                     console.log(`service worker caching new resource: ${event.request.url}`);
//                     cache.put(event.request, response.clone());
//                     return response;
//                 })
//             })
//         })
//     )
// })

// self.addEventListener("activate", e => {
//     e.waitUntil(
//         caches.keys().then(keylist => {
//             return Promise.all(keylist.map(key => {
//                 if (key !== CACHE_NAME) {
//                     return caches.delete(key);
//                 }
//             }))
//         })
//     )
// });