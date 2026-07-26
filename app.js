// ======================================
// AI Travel v0.2
// Автор: Сергей + ChatGPT
// ======================================

// ---------- Дни путешествия ----------

function openDay1() {
    window.location.href = "day1.html";
}

function openDay2() {
    window.location.href = "day2.html";
}

function openDay3() {
    window.location.href = "day3.html";
}

function openDay4() {
    window.location.href = "day4.html";
}

function openDay5() {
    window.location.href = "day5.html";
}

function openDay6() {
    window.location.href = "day6.html";
}

function openDay7() {
    window.location.href = "day7.html";
}

function openDay8() {
    window.location.href = "day8.html";
}

function openDay9() {
    window.location.href = "day9.html";
}

function openDay10() {
    window.location.href = "day10.html";
}

function openDay11() {
    window.location.href = "day11.html";
}

function openDay12() {
    window.location.href = "day12.html";
}

// ---------- Разделы, которые появятся позже ----------

function comingSoon() {
    alert("🚧 Этот раздел появится в следующей версии AI Travel.");
}

// ---------- Service Worker ----------

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {
                console.log("✅ Service Worker зарегистрирован");
            })
            .catch((error) => {
                console.error("❌ Ошибка Service Worker:", error);
            });
    });
}
// ---------- Основные разделы ----------

function openRestaurants() {
    window.location.href = "restaurants.html";
}

function openMassage() {
    window.location.href = "massage.html";
}

function openExchange() {
    window.location.href = "exchange.html";
}

function openGrab() {
    window.location.href = "grab.html";
}

function openMaps() {
    window.location.href = "maps.html";
}

function openShopping() {
    window.location.href = "shopping.html";
}

function openPhones() {
    window.location.href = "phones.html";
}

function openInfo() {
    window.location.href = "info.html";
}

// ---------- Дополнительные страницы ----------

function openAbout() {
    window.location.href = "about.html";
}

function openPrivacy() {
    window.location.href = "privacy.html";
}

function openChecklist() {
    window.location.href = "checklist.html";
}

function openPacking() {
    window.location.href = "packing.html";
}

function openFlights() {
    window.location.href = "flights.html";
}

// ---------- Нижнее меню ----------

function openRoute() {
    window.location.href = "route.html";
}

function openDocuments() {
    window.location.href = "documents.html";
}


function openSettings() {
    window.location.href = "settings.html";
}