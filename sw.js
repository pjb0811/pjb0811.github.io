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
    "url": "webpack-runtime-9158ce3240712c049914.js"
  },
  {
    "url": "app-e9371e4d85fc2c20c007.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-198b9ad945aeaf69efd8.js"
  },
  {
    "url": "index.html",
    "revision": "09344daa6423d555f3cd99e4683cd0dd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6846ff15517fe6f6aae77e1d8d67fd12"
  },
  {
    "url": "1.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-components-pages-index-jsx-4be339c36933c3cfea44.js"
  },
  {
    "url": "2-0e020a8b482ef446e4f1.js"
  },
  {
    "url": "1-fed8f9a1d591292fd51a.js"
  },
  {
    "url": "0-5befed61ee6aecc093e6.js"
  },
  {
    "url": "static/d/100/path---index-6a9-gZICpGAbK2FLVRq5J6RLc77mHBw.json",
    "revision": "7dd44e1a70bbec00815dfb83d20b9f4d"
  },
  {
    "url": "component---src-pages-404-jsx-30c0ddd22d2976362501.js"
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