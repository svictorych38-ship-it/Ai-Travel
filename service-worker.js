// ======================================
// AI Travel v1.1
// Service Worker
// Автор: Сергей Коконов + ChatGPT
// ======================================

const CACHE_NAME = "ai-travel-v1.1";

const FILES_TO_CACHE = [

    "./",

    "index.html",
    "style.css",
    "app.js",
    "manifest.json",

    "documents.html",

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
    "settings.html",

    // ===== Документы =====

    "assets/documents/ticket-sergey-go.pdf",
    "assets/documents/ticket-yana-go.pdf",
    "assets/documents/ticket-sergey-back.pdf",
    "assets/documents/ticket-yana-back.pdf",

    "assets/documents/hotel-voucher.pdf",
    "assets/documents/insurance.pdf",

    "assets/documents/lounge-qr.jpg",
    "assets/documents/lounge-qr-return.jpg",
    "assets/documents/immigration-qr.jpg",

    "assets/documents/passport-sergey.jpg",
    "assets/documents/passport-yana.jpg"

];

// ======================================
// INSTALL
// ======================================

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                console.log("AI Travel cache install");

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});

// ======================================
// ACTIVATE
// ======================================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});

// ======================================
// FETCH
// ======================================

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if (response) {
                    return response;
                }

                return fetch(event.request)

                    .then(networkResponse => {

                        if (!networkResponse || networkResponse.status !== 200) {
                            return networkResponse;
                        }

                        const copy = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {

                                cache.put(event.request, copy);

                            });

                        return networkResponse;

                    })

                    .catch(() => {

                        if (event.request.mode === "navigate") {

                            return caches.match("index.html");

                        }

                    });

            })

    );

});
