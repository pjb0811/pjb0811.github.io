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
    "url": "webpack-runtime-5f3a8283a6792727d3bb.js"
  },
  {
    "url": "app-58adde979f8c062864cf.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d88e31064f1cfdf86d87.js"
  },
  {
    "url": "index.html",
    "revision": "0bb4af3720ff3bb22cdab4260bd1d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "17ae119d27d2944678e7bd3bd5da05eb"
  },
  {
    "url": "1.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-components-pages-index-jsx-4f399bc8140c30315c71.js"
  },
  {
    "url": "2-f5da5fe6dc296f73af47.js"
  },
  {
    "url": "1-16dcba751d1343d300f2.js"
  },
  {
    "url": "0-f93e16e9411aa2e8bc22.js"
  },
  {
    "url": "static/d/773/path---index-6a9-YIwIX40NK26O5eT2FEIN2PZ88s.json",
    "revision": "35f92388da86d138fabff86933ac7060"
  },
  {
    "url": "component---src-pages-404-jsx-c977dc97b413c13b31e6.js"
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