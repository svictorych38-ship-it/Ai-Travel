// ======================================
// AI Travel v1.0
// Service Worker
// Автор: Сергей + ChatGPT
// ======================================

const CACHE_NAME = "ai-travel-v1";

const FILES_TO_CACHE = [
    "./",
    "index.html",
    "style.css",
    "app.js",
    "manifest.json",

    "day1.html",
    "day2.html",
    "day3.html",
    "day4.html",
    "day5.html",
    "day6.html",
    "day7.html",
    "day8.html",
    "day9.html",
    "day10.html",
    "day11.html",
    "day12.html",

    "restaurants.html",
    "massage.html",
    "exchange.html",
    "grab.html",
    "maps.html",
    "shopping.html",
    "phones.html",
    "info.html",

    "about.html",
    "privacy.html",
    "checklist.html",
    "packing.html",
    "flights.html",

    "route.html",
    "favorites.html",
    "settings.html"
];

// ---------- Установка ----------

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => cache.addAll(FILES_TO_CACHE))

    );

    self.skipWaiting();

});

// ---------- Активация ----------

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            )

        )

    );

    self.clients.claim();

});

// ---------- Работа офлайн ----------

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});