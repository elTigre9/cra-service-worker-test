(this["webpackJsonpservice-worker-test"]=this["webpackJsonpservice-worker-test"]||[]).push([[0],{18:function(n,e,o){},19:function(n,e,o){},37:function(n,e){},41:function(n,e,o){"use strict";o.r(e);var t=o(1),i=o.n(t),r=o(12),c=o.n(r),s=(o(18),o(19),o(13)),a=o.n(s),l=o(0),d=function(){var n=Object(t.useRef)(""),e=function(e){if(n.current=e,"granted"===e)new Notification("Subscribed!",{body:"Thanks for subscribing!"})};return Object(l.jsxs)("section",{children:[Object(l.jsx)("button",{onClick:function(){console.log("notifs!"),window.Notification&&Notification.requestPermission().then(e)},children:"Show Notifs"}),Object(l.jsx)("button",{onClick:function(){if("granted"===n.current){console.log("scheduling job!");a.a.scheduleJob("*/1 * * * *",(function(){new Notification("Doing it!",{body:"And doing it, and doing it, well."})}))}},children:"Show Notifs"})]})};var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("section",{children:Object(l.jsx)(d,{})})})})},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var o=n.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var g=function(n){n&&n instanceof Function&&o.e(3).then(o.bind(null,42)).then((function(e){var o=e.getCLS,t=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;o(n),t(n),i(n),r(n),c(n)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/cra-service-worker-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/cra-service-worker-test","/service-worker.js");f?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):h(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(e,n)}))}}(),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.08a2c477.chunk.js.map