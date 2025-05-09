
// Service Worker for J GROUPS Enterprises PWA
const CACHE_NAME = 'jgroups-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
  // Don't cache dynamic assets here to prevent stale content
];

// Install the service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Cache opening failed:', err);
        // Continue without caching
      })
  );
});

// Fetch resources from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from cache
        if (response) {
          return response;
        }
        
        // Clone the request as it can only be used once
        const fetchRequest = event.request.clone();
        
        // For navigation requests (HTML pages), always go to network first
        if (event.request.mode === 'navigate') {
          return fetch(fetchRequest)
            .catch(() => caches.match('/index.html'));
        }
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response as it can only be used once
            const responseToCache = response.clone();
            
            // Add response to cache for future use (non-sensitive data only)
            if (!event.request.url.includes('/api/')) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
              
            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // For navigation requests when offline, serve index.html
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('Network error occurred', { status: 503 });
          });
      })
  );
});

// Update service worker and clear old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
  
  // Immediately claim all clients
  return self.clients.claim();
});

// Handle errors gracefully
self.addEventListener('error', event => {
  console.error('Service worker error:', event.error);
});
