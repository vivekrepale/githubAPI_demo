!function(e){function t(t){for(var r,l,i=t[0],c=t[1],s=t[2],d=0,u=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&u.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);u.length;)u.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},o={0:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=c;n.push([49,1]),a()}({21:function(e,t,a){var r=a(22),o=a(23);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};r(o,n);e.exports=o.locals||{}},23:function(e,t,a){var r=a(24),o=a(25),n=a(26);(t=r(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);var l=o(n);t.push([e.i,"*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}body{box-sizing:border-box}html{letter-spacing:-0.5px}.layout-wrapper{height:100vh;width:100%}.layout-wrapper__data{display:grid;grid-template-columns:repeat(auto-fit, 15rem);grid-gap:2rem;justify-content:center;align-items:center;padding:2rem 0;margin-top:10vh;margin-bottom:5vh}.layout-wrapper__data--following{background-color:lightgreen}.card-wrapper{display:grid;align-items:center;grid-gap:0.7rem;background-image:linear-gradient(to bottom, rgba(0,255,255,0.8), rgba(0,0,0,0.6)),url("+l+');background-size:cover;color:#fff;padding:0 1rem;padding-bottom:0.7rem;box-shadow:0px 10px 6px -5px rgba(0,0,0,0.6),0px 8px 6px -5px rgba(0,0,0,0.6),0px 6px 6px -5px rgba(0,0,0,0.6);overflow-y:hidden}.card-wrapper__head{display:grid;grid-template-columns:repeat(2, min-content);grid-gap:0.5rem}.card-wrapper__head__avatar{height:4rem;width:4rem;border-radius:5%;box-shadow:0px 10px 6px -5px rgba(0,0,0,0.6),0px 8px 6px -5px rgba(0,0,0,0.6)}.card-wrapper__head__username{align-self:end;overflow-wrap:break-word;word-break:keep-all;hyphens:auto;font-family:"Times New Roman", Times, serif;color:white}.card-wrapper__follow{justify-self:end}.card-wrapper__follow__button{border:1px solid rgba(255,255,255,0.8);cursor:pointer;padding:0.1rem 0.5rem}.card-wrapper__follow__button:hover{transform:translateY(0.1rem) scaleY(0.99)}.header{background-color:blue;color:lightblue;position:fixed;width:100%;top:0;z-index:2;height:10vh}.footer-wrapper{width:100%;position:fixed;bottom:0;background-color:black;height:6vh;display:grid;grid-auto-flow:column;justify-content:center}\n',""]),e.exports=t},26:function(e,t,a){"use strict";a.r(t),t.default=a.p+"app/assets/images/card-bg-66732020.jpg"},49:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(14),l=a.n(n),i=(a(21),a(2)),c=a.n(i),s=a(15),p=a(3);var d=({username:e,id:t,avatar:a,unique:n,getUsersIFollow:l})=>{const[i,d]=Object(r.useState)(!1),[u,m]=Object(r.useState)(!1),g=Object(p.c)({opacity:u?1:0,transform:u?"scale(1)":"scale(0.5)",config:p.b.slow}),f=(Object(p.d)(u,null,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:p.b.slow}),async e=>{const t="https://api.github.com/user/following/"+e,a={headers:{Authorization:"Token 5ede6a5bde154d02ae6514db2e8eb2c399aed675"}};try{await c.a.get(t,a);d(!0)}catch(e){d(!1)}});return Object(r.useEffect)(()=>{f(e)},[e]),o.a.createElement(p.a.div,{style:g,className:"card-wrapper",key:n},o.a.createElement(s.a,{onEnter:()=>m(!0),onLeave:()=>m(!1),bottomOffset:"10%"}),o.a.createElement("div",{className:"card-wrapper__head"}," ",o.a.createElement("img",{className:"card-wrapper__head__avatar",src:a,alt:"avatar"}),o.a.createElement("h3",{className:"card-wrapper__head__username"},e)),o.a.createElement("h4",{className:"card-wrapper__id"},"Fork id: ",t),o.a.createElement("div",{className:"card-wrapper__follow"},i?o.a.createElement("h4",{className:"card-wrapper__follow__text"},"Following"):o.a.createElement("h4",{className:"card-wrapper__follow__button",onClick:t=>{(async e=>{const t="https://api.github.com/user/following/"+e,a={headers:{Authorization:"Token 5ede6a5bde154d02ae6514db2e8eb2c399aed675"}};try{const r=await c.a.put(t,null,a);console.log(r),204==r.status&&(f(e),l(),setInterval(()=>{l()},1e4))}catch(e){console.log(e)}})(e)}},"Follow")))};var u=({url:e,buttonText:t,unique:a,sendRequest:r,setDisplayCard:n})=>o.a.createElement("footer",{className:"footer",key:a},o.a.createElement("button",{onClick:()=>{r(e),window.scrollTo({top:0,behavior:"smooth"})}},t));var m=()=>o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Github Demo App"));var g=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(""),[l,i]=Object(r.useState)([]),s=async(e="https://api.github.com/repos/facebook/react/forks")=>{try{const a=await c.a.get(e);t(a.data),n(a.headers.link)}catch(e){console.log(e)}};Object(r.useEffect)(()=>{s()},[]);const p=a.split(","),g=async()=>{const e={headers:{Authorization:"Token 5ede6a5bde154d02ae6514db2e8eb2c399aed675"}};try{const t=await c.a.get("https://api.github.com/user/following",e);i(t.data)}catch(e){console.log(e)}return l.length};return o.a.createElement("div",{className:"layout-wrapper"},o.a.createElement(m,null),o.a.createElement("div",{className:"layout-wrapper__data"},o.a.createElement("h3",null,"Users who forked Reacts repo from github:"),e.map((e,t)=>o.a.createElement(d,{username:e.owner.login,id:e.id,avatar:e.owner.avatar_url,unique:t,getUsersIFollow:g}))),o.a.createElement("div",{className:"footer-wrapper"},a?p.map((e,t)=>{const a=e.split(";")[0].trim().slice(1,-1),r=e.split(";")[1];return o.a.createElement(u,{url:a,buttonText:r,unique:t,sendRequest:s})}):""))};l.a.render(o.a.createElement(g,null),document.getElementById("app"))}});