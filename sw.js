self.addEventListener("notificationclick", event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://github.com") // Ganti dengan link tujuan
    );
});
