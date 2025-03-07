const button = document.querySelector("button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("Example notification", {
                body: Math.random(), // Menampilkan angka acak
                data: { hello: "world" },
                icon: "Logo Centered.png",
                tag: "Welcome Message",
            });

            notification.addEventListener("error", e => {
                alert("error");
            });
        }
    });
});

// Notifikasi saat tab tidak aktif
let notification;
let interval;

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date();
        interval = setInterval(() => {
            notification = new Notification("Come back please", {
                body: `You've been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
                tag: "ComeBack",
            });
        }, 5000); // Notifikasi muncul setiap 5 detik
    } else {
        clearInterval(interval);
    }
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(reg => {
        console.log("Service Worker Terdaftar!", reg);
    });
}

// Event Click untuk Notifikasi
document.querySelector("button").addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            navigator.serviceWorker.ready.then(reg => {
                reg.showNotification("Example notification", {
                    body: Math.random(),
                    icon: "Logo Centered.png",
                    tag: "Welcome Message",
                    requireInteraction: true // Agar tetap muncul di notification bar
                });
            });
        }
    });
});
