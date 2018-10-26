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
    "url": "webpack-runtime-3d05e4292aa0edd62abc.js"
  },
  {
    "url": "app-0cd234bcc9329ab7d850.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c36ab03cf1f59fe9fd67.js"
  },
  {
    "url": "index.html",
    "revision": "b742a227949149d988374f83fd7c62a1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ce88626b35fd6e08621adc37f22d357c"
  },
  {
    "url": "0.efbeb78c60f66d75c538.css"
  },
  {
    "url": "component---src-components-pages-index-jsx.7e71967fcf2eddb08c88.css"
  },
  {
    "url": "component---src-components-pages-index-jsx-42e4fe3539e9e11ea4f0.js"
  },
  {
    "url": "0-6ba74d8a5ed789dece2d.js"
  },
  {
    "url": "static/d/763/path---index-6a9-5XBElO6bAozp6u49HJv7541OSNo.json",
    "revision": "0fee433d103ab49d95926c8220505541"
  },
  {
    "url": "component---src-pages-404-jsx-286cdf3fa1ffcff1bb29.js"
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