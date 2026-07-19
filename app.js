// ======================================
// AI Travel v0.1
// Автор: Сергей + ChatGPT
// ======================================

function openDay1() {
    window.location.href = "day1.html";
}

function comingSoon() {
    alert("🚧 Этот раздел появится в следующей версии.");
}

// Проверяем поддержку Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {
                console.log("✅ Service Worker зарегистрирован");
            })
            .catch((error) => {
                console.log("❌ Ошибка Service Worker:", error);
            });
    });
}
