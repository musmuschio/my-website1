self.addEventListener("notificationclick", event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://github.com") // Ganti dengan link tujuan
    );
});
self.addEventListener("install", function(event) {
  console.log("Service Worker Terinstall");
});

self.addEventListener("fetch", function(event) {
  console.log("Fetching:", event.request.url);
});
