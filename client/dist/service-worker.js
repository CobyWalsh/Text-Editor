if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>n(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"a14cb28de973786b0e8469f8b342e370"},{url:"install.bundle.js",revision:"c874206208773cbcaaacc770b6f6478b"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"043a50854b278689e43c219c74df3cc6"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"src-sw.js",revision:"0f019d9c5bc638314390b9976b585d18"}],{})}));