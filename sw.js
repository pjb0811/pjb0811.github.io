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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

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
    "url": "webpack-runtime-c802195c3dbe245aa694.js"
  },
  {
    "url": "app-c0aa65ac4b42515830ae.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d88e31064f1cfdf86d87.js"
  },
  {
    "url": "index.html",
    "revision": "2ae8a688b9a5ccc6a485b72f053d81f3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "48f6333f5b4b81a2b19bc809ea86cd8c"
  },
  {
    "url": "1.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-components-pages-index-jsx-a35fcf6d0d3f42a6bfee.js"
  },
  {
    "url": "2-2d799a63d43402d76ba1.js"
  },
  {
    "url": "1-3847fdea438e539c3cc7.js"
  },
  {
    "url": "0-473e499cdbf6b81ca9f5.js"
  },
  {
    "url": "static/d/730/path---index-6a9-SiNvKAIoVWaKkPLb4YMoHbYQJ8.json",
    "revision": "e6b009b67074c99bbc1eee9782eec5ed"
  },
  {
    "url": "component---src-pages-404-jsx-fae6d9ae73a105e7c2f4.js"
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