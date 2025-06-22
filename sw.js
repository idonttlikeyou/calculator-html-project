self.addEventListener('install', (event) => {
  self.skipWaiting(); // langsung aktifkan SW baru
});

self.addEventListener('activate', (event) => {
  clients.claim(); // langsung kendalikan tab terbuka
});