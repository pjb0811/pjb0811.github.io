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
    "url": "webpack-runtime-e31415bae689cb7e3c68.js"
  },
  {
    "url": "app-9c287e0f7f4b9a790973.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c36ab03cf1f59fe9fd67.js"
  },
  {
    "url": "index.html",
    "revision": "a16ebf595fcdfb5dad1b146607494f89"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c636c4bcb2c4a25b04cf40b1ee3f6d0c"
  },
  {
    "url": "0.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-pages-index-jsx.7e71967fcf2eddb08c88.css"
  },
  {
    "url": "component---src-pages-index-jsx-2a8004804dcb185e3618.js"
  },
  {
    "url": "0-74b7eb258c1ddb5ed8b2.js"
  },
  {
    "url": "static/d/763/path---index-6a9-xoFHT9HYgwMevFVaj71EL36P4.json",
    "revision": "de221f0eadfa5d5c3d6ff3f3f86875a9"
  },
  {
    "url": "component---src-pages-404-jsx-dce2aee1251743b49336.js"
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
    "revision": "ec97361227e991255806d48dda4356ee"
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