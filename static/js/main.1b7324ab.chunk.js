(window["webpackJsonplister-pwa"]=window["webpackJsonplister-pwa"]||[]).push([[0],{26:function(n,t,e){n.exports=e(39)},31:function(n,t,e){},32:function(n,t,e){},39:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),c=e(19),o=e.n(c),i=(e(31),e(2)),l=(e(32),e(9)),u=e(6),s=e(1);function f(){var n=Object(i.a)(["\n    width: 100%;\n    text-align: right;\n    height: 6%;\n"]);return f=function(){return n},n}function h(){var n=Object(i.a)(["\n    width: 100%;\n    text-align: justify;\n    height: 80%;\n"]);return h=function(){return n},n}function d(){var n=Object(i.a)(["\n    width: 100%;\n    text-align: center;\n    height: 8%;\n"]);return d=function(){return n},n}function p(){var n=Object(i.a)(["\n    width: 100%;\n    height: 6%;\n"]);return p=function(){return n},n}var m=s.a.div(function(n){return{width:20*parseInt(n.scale)+"px",height:30*parseInt(n.scale)+"px",backgroundColor:"lightgray",padding:.5*parseInt(n.scale)+"px",margin:parseInt(n.scale)+"px",display:"inline-block"}}),g=s.a.p(p()),b=s.a.h4(d()),v=s.a.p(h()),E=s.a.p(f()),w=Object(l.g)(function(n){var t=n.item,e=n.history,a=n.scale;return r.a.createElement(m,{scale:a,onClick:function(){var n="/lists/"+t.id;e.push(n)}},r.a.createElement(g,null,t.account),r.a.createElement(b,null,t.title),r.a.createElement(v,null,t.body),r.a.createElement(E,null,t.pub_date))});function j(){var n=Object(i.a)(["\n    margin-top: 50%;\n    margin-left: 50%;\n    transform: translate(-50%, -50%);\n"]);return j=function(){return n},n}function O(){var n=Object(i.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(200, 200, 200, 0.5);\n"]);return O=function(){return n},n}var x=s.a.div(O()),k=s.a.img(j()),y=function(){return r.a.createElement(x,null,r.a.createElement(k,{src:"/loading-animation.gif",alt:"Loading..."}))},I=function(){var n=Object(a.useState)([]),t=Object(u.a)(n,2),e=t[0],c=t[1],o=function(){fetch("http://localhost:8888/api/lists").then(function(n){return n.json()}).then(function(n){return c(n)})};return Object(a.useEffect)(function(){o(),setInterval(function(){return o()},1e4)},[]),r.a.createElement(ln,null,e.length?e.map(function(n){return r.a.createElement(w,{scale:"10",item:n})}):r.a.createElement(y,null))},S=e(8);function N(){var n=Object(i.a)(["\n    position: relative;\n    float: left;\n    width: 20%;\n    height: 100%;\n    color: green;\n    background-color: gray;\n    padding: 20px;\n    border: 20px solid white;\n"]);return N=function(){return n},n}function C(){var n=Object(i.a)(["\n    display: block;\n    width: 100%;\n    height: 30px;\n    background-color: white;\n    margin: 8px 0;\n    float: left;\n    color: black;\n    text-decoration: none;\n    text-align: center;\n    line-height: 30px;\n"]);return C=function(){return n},n}var W=Object(s.a)(S.b)(C()),A=s.a.div(N()),L=function(){var n=0,t=Object(a.useState)([]),e=Object(u.a)(t,2),c=e[0],o=e[1];return Object(a.useEffect)(function(){fetch("http://localhost:8888/api/accounts/"+n).then(function(n){return n.json()}).then(function(n){return JSON.parse(n.contacts)}).then(function(n){!function(n){n.forEach(function(n){fetch("http://localhost:8888/api/accounts/"+n).then(function(n){return n.json()}).then(function(n){o(function(t){return t.concat([n])})})})}(n)})},[n]),r.a.createElement(A,null,c.length?c.map(function(n){return r.a.createElement(W,{to:"/accounts/"+n.id},n.nick)}):r.a.createElement(y,null))};function R(){var n=Object(i.a)(["\n    display: block;\n    width: 100%;\n    height: 40px;\n    background-color: white;\n    margin: 10px 0;\n    float: left;\n    color: black;\n    text-decoration: none;\n    text-align: center;\n    line-height: 40px;\n"]);return R=function(){return n},n}function J(){var n=Object(i.a)(["\n    width: 70%;\n    margin: 0 15%;\n"]);return J=function(){return n},n}function U(){var n=Object(i.a)(["\n    float: left;\n    width: 20%;\n    height: 100%;\n    padding: 20px;\n    border: 20px solid white;\n    background-color: gray;\n"]);return U=function(){return n},n}var z=s.a.nav(U()),B=s.a.img(J()),P=Object(s.a)(S.c)(R()),T=function(){return r.a.createElement(z,null,r.a.createElement(B,{src:"/icon.png"}),r.a.createElement(P,{exact:!0,activeClassName:"current",to:"/lists"},"Lists"),r.a.createElement(P,{exact:!0,activeClassName:"current",to:"/accounts"},"Accounts"))};function X(){var n=Object(i.a)(["\n    width: 70%;\n    right: 0;\n    top: 50%;\n    position: absolute;\n    font-size: 20px;\n    transform: translate(0, -50%);\n"]);return X=function(){return n},n}function _(){var n=Object(i.a)(['\n    background-image: url("/loading-animation.gif");\n    background-position: center;\n    background-size: cover;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border: 1px solid black;\n    border-radius: 50%;\n']);return _=function(){return n},n}function D(){var n=Object(i.a)(["\n    position: relative;\n    display:inline-block;\n    width: 100%;\n    \n    &:after{\n        content: '';\n        display: block;\n        margin-top: 100%;\n    }\n"]);return D=function(){return n},n}function $(){var n=Object(i.a)(["\n    width:30%;\n    float: left;\n"]);return $=function(){return n},n}var q=s.a.a(function(n){return{display:"inline-block",textDecoration:"none",color:"black",width:40*parseInt(n.scale)+"px",backgroundColor:"lightgray",position:"relative",padding:"10px"}}),F=s.a.div($()),G=s.a.div(D()),H=s.a.div(_()),K=s.a.div(X()),M=function(n){var t=n.href,e=n.account,a=n.scale,c=n.className;return r.a.createElement(q,{href:t,scale:a,className:c},r.a.createElement(F,null,r.a.createElement(G,null,r.a.createElement(H,null))),r.a.createElement(K,null,r.a.createElement("p",null,"Nick: ",e.nick),r.a.createElement("p",null,"Email: x@x.x"),r.a.createElement("p",null,"Number of lists: X"),r.a.createElement("p",null,"Register date: X")))};function Q(){var n=Object(i.a)(["\n     width: 100%;\n     text-align: inherit;\n"]);return Q=function(){return n},n}var V=s.a.div(Q()),Y=function(n){var t=n.match.params.listId,e=Object(a.useState)({}),c=Object(u.a)(e,2),o=c[0],i=c[1];return Object(a.useEffect)(function(){fetch("http://localhost:8888/api/lists/"+t).then(function(n){return n.json()}).then(function(n){return i(n)})},[t]),r.a.createElement(ln,null,Object.keys(o).length?r.a.createElement("div",null,r.a.createElement(V,null,r.a.createElement(w,{scale:"15",key:o.toString(),item:o})),r.a.createElement(V,null,r.a.createElement(M,{href:"/accounts/"+o.account_id,scale:"8",account:{nick:o.account}}))):r.a.createElement(y,null))};function Z(){var n=Object(i.a)(["\n    margin: 3vh auto;\n    width: 80%;\n    text-align: center;\n"]);return Z=function(){return n},n}var nn=s.a.div(Z()),tn=function(n){var t=n.match.params.accountId,e=Object(a.useState)({}),c=Object(u.a)(e,2),o=c[0],i=c[1],l=Object(a.useState)([]),s=Object(u.a)(l,2),f=s[0],h=s[1];return Object(a.useEffect)(function(){fetch("http://localhost:8888/api/accounts/"+t).then(function(n){return n.json()}).then(function(n){h(n.lists),i(n)})},[t]),r.a.createElement(ln,null,r.a.createElement(M,{scale:"10",account:o}),r.a.createElement(nn,null,f.length?f.map(function(n){return r.a.createElement(w,{scale:"10",item:n})}):r.a.createElement(y,null)))};function en(){var n=Object(i.a)(["\n    margin: 10px 20px;\n"]);return en=function(){return n},n}var an=Object(s.a)(M)(en()),rn=function(){var n=Object(a.useState)([]),t=Object(u.a)(n,2),e=t[0],c=t[1],o=function(){fetch("http://localhost:8888/api/accounts").then(function(n){return n.json()}).then(function(n){return c(n)})};return Object(a.useEffect)(function(){o(),setInterval(function(){return o()},3e4)},[]),r.a.createElement(ln,null,e.length?e.map(function(n){return r.a.createElement(an,{href:"/accounts/"+n.id,scale:"8",account:n})}):r.a.createElement(y,null))};function cn(){var n=Object(i.a)(["\n    width: 80%;\n    height: 100vh;\n    margin: 0 auto;\n"]);return cn=function(){return n},n}function on(){var n=Object(i.a)(["\n    position: relative;\n    float: left;\n    width: 60%;\n    height: 100%;\n    border: 20px solid white;\n    text-align: center;\n    overflow: scroll;\n    scrollbar-width: none; \n"]);return on=function(){return n},n}var ln=s.a.div(on()),un=s.a.div(cn()),sn=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/lists",component:I}),r.a.createElement(l.b,{exact:!0,path:"/lists/:listId",component:Y}),r.a.createElement(l.b,{exact:!0,path:"/accounts",component:rn}),r.a.createElement(l.b,{exact:!0,path:"/accounts/:accountId",component:tn}),r.a.createElement(l.a,{path:"*",to:"/lists"}))},fn=function(){return r.a.createElement(un,null,r.a.createElement(T,null),r.a.createElement(sn,null),r.a.createElement(L,null))},hn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function dn(n,t){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}o.a.render(r.a.createElement(S.a,null,r.a.createElement(fn,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/lister-pwa-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lister-pwa-react","/service-worker.js");hn?(!function(n,t){fetch(n).then(function(e){var a=e.headers.get("content-type");404===e.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):dn(n,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):dn(t,n)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.1b7324ab.chunk.js.map