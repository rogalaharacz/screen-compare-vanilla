if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const l=e=>i(e,c),f={module:{uri:c},exports:r,require:l};s[c]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(o(...e),r)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/cookie-policy-e52ff5f6.css",revision:null},{url:"assets/cookiePolicy-3541846c.js",revision:null},{url:"assets/domUtils-94b4f7fa.js",revision:null},{url:"assets/feedback-0d08f0c5.css",revision:null},{url:"assets/feedback-1fd009ee.js",revision:null},{url:"assets/firestore-7866e5ba.js",revision:null},{url:"assets/index-81575636.css",revision:null},{url:"assets/main-902a3332.js",revision:null},{url:"cookie-policy.html",revision:"8e814c86daf05b21e5377c64000541a4"},{url:"feedback.html",revision:"482cce2e0bb07cde8d68506a6659c901"},{url:"index.html",revision:"e34444fbea528f7ab4d5800c738bb2f0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/light-mode.svg",revision:"990363263e15569dc4108dc7f0b66793"},{url:"icons/dark-mode.svg",revision:"fd2a31db2d2c7ab7b202253e51975978"},{url:"icons/popular-screens-icon.svg",revision:"e73e3d7246cb78f146eeb27c9ebbf11a"},{url:"icons/cross.svg",revision:"99ca84ef8b9878f0095dba76e26e0bbf"},{url:"icons/edit-field.svg",revision:"a0071c6fca91e87156f0f48a1f5c41f8"},{url:"icons/plus.svg",revision:"986aaf23d9926d45a8e58ed8473318f7"},{url:"icons/reset.svg",revision:"8a4ca2771152ee30f41dc5806ae57de9"},{url:"favicons/favicon.svg",revision:"cb08e7d15200e842aabcf0b7ded468e1"},{url:"favicons/favicon.ico",revision:"87f537f4149bd5caed35aca699e20e5a"},{url:"favicons/apple-touch-icon.png",revision:"46d275a3eb74bfb5269d2dc25aa458da"},{url:"favicons/pwa-192x192.png",revision:"8388301d9254c73394bcb0b8086cb442"},{url:"favicons/pwa-512x512.png",revision:"978a92c44c961993f3e73f4600b1ad19"},{url:"manifest.webmanifest",revision:"f8eae2f4126f81e1df88cdf0d98f1cf9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
