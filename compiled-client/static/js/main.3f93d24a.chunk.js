(this["webpackJsonpaccounting-notebook-client"]=this["webpackJsonpaccounting-notebook-client"]||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(20),n(14)),u=n(6),i=n(7);var s=function(e){var t=e.transactions;return r.a.createElement(u.a,null,t.map((function(e){return r.a.createElement(i.a,{key:e.id,bg:"credit"===e.type?"success":"danger",text:"white"},r.a.createElement(u.a.Toggle,{as:i.a.Header,eventKey:e.id},r.a.createElement("strong",null,"$")," ",e.amount," ",e.type),r.a.createElement(u.a.Collapse,{eventKey:e.id},r.a.createElement(i.a.Body,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Transaction ID:")," ",e.id),r.a.createElement("p",null,r.a.createElement("strong",null,"Effective Date:")," ",e.effectiveDate),r.a.createElement("p",null,r.a.createElement("strong",null,"Transaction type:")," ",e.type),r.a.createElement("p",null,r.a.createElement("strong",null,"Transaction amount:")," ",e.amount))))})))};var m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("http://localhost:8080/api/transactions").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement(s,{transactions:n})},E=n(11),f=n(12),p=n(13);n(24);var g=function(){return r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement("h1",null,"Accounting Notebook"))),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3f93d24a.chunk.js.map