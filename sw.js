/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3d7a08e816f679d89226.js"
  },
  {
    "url": "app-5a2fb3e6c519016708d1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7d8442d22c3522e629ab.js"
  },
  {
    "url": "index.html",
    "revision": "aba263bdf0d2c51ff94ad5838fd47eb7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1ce142a2518645aee27dc9e8c17f1d07"
  },
  {
    "url": "1.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-components-pages-index-jsx-00fa1cce0b3ff64fae36.js"
  },
  {
    "url": "2-e0d2017c47f8eb0f6233.js"
  },
  {
    "url": "1-b856bb303c35ed9acd85.js"
  },
  {
    "url": "0-640ad446e3fcb03bfb15.js"
  },
  {
    "url": "static/d/556/path---index-6a9-HwKuEG6r1FqmfdRgRwc9mhNTeGo.json",
    "revision": "4b31d7e58f68d911f40b1e98547e6295"
  },
  {
    "url": "component---src-pages-404-jsx-790823e1859bbd8dc17f.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6731e1e26776ea60af1c907b5735b22b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});