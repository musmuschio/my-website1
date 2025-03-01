self.addEventListener("push", event => {
    const options = {
        body: "Ini adalah notifikasi persistent di ponsel!",
        icon: "Logo Centered.png",
        tag: "PersistentNotification",
        requireInteraction: true // Notifikasi tidak akan otomatis hilang
    };
    event.waitUntil(
        self.registration.showNotification("Notifikasi Persistent", options)
    );
});
