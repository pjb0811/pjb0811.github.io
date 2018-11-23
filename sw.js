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
    "url": "webpack-runtime-e42dd6d9f1f0489e0750.js"
  },
  {
    "url": "app-f4890af14e962d980c3d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d88e31064f1cfdf86d87.js"
  },
  {
    "url": "index.html",
    "revision": "32a5a33f413e6153b47c15a17957ab99"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "46433c2a625f488752b0c861c4957b6a"
  },
  {
    "url": "1.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-components-pages-index-jsx-a8cf290775df0cbff04c.js"
  },
  {
    "url": "2-2d799a63d43402d76ba1.js"
  },
  {
    "url": "1-3847fdea438e539c3cc7.js"
  },
  {
    "url": "0-2a5f3a182953811b9da4.js"
  },
  {
    "url": "static/d/321/path---index-6a9-ayaJbL06R2Qa6tfcC5rt7NpnqFQ.json",
    "revision": "f7af18305dd7551da8bb729cdffa0562"
  },
  {
    "url": "component---src-pages-404-jsx-b344c9d744e828a0b8ff.js"
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