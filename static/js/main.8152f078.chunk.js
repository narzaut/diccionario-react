(this["webpackJsonpfutit-integrador"]=this["webpackJsonpfutit-integrador"]||[]).push([[0],{70:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),i=n.n(c),s=(n(70),n(29)),o=n(9),j=n(15),l=n(80),u=n(78),d=n(61);function b(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),a=Object(j.a)(n,2),c=a[0],i=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]}var O=n(3),f=Object(r.createContext)(),h=function(e){var t=Object(r.useState)("https://api.dictionaryapi.dev/api/v2/entries/es/"),n=Object(j.a)(t,2),a=n[0],c=n[1],i=b("favoriteList",[]),s=Object(j.a)(i,2),o=s[0],l=s[1];return Object(O.jsx)(f.Provider,{value:{api:[a,c],favorite:[o,l]},children:e.children})},x=n(62),p=n(81),v=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};function m(e){var t=Object(r.useContext)(f).favorite,n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"search-output-box",children:[Object(O.jsxs)("p",{children:["Palabra: ",e.word]}),Object(O.jsxs)("p",{children:["Definicion: ",e.definition]})]}),""!=e.word?Object(O.jsx)(p.a,{onClick:function(){var t=[].concat(Object(x.a)(a),[{word:e.word,definition:e.definition,id:v()}]);c(t)},className:"fav-btn btn-press"}):null]})}function g(){var e=l.a.Search,t=Object(r.useContext)(f).api,n=Object(j.a)(t,2),a=n[0],c=(n[1],b("currentWord",[])),i=Object(j.a)(c,2),o=i[0],h=i[1],x=b("currentDefinition",[]),p=Object(j.a)(x,2),v=p[0],g=p[1],w=Object(r.useState)(!1),y=Object(j.a)(w,2),S=y[0],N=y[1],C=Object(r.useState)(""),k=Object(j.a)(C,2),B=k[0],I=k[1];return Object(O.jsxs)("div",{class:"app-container",children:[Object(O.jsxs)("div",{class:"search-input-container",children:[Object(O.jsx)("label",{style:{marginBottom:"1rem"},children:"Busque una palabra"}),Object(O.jsx)(e,{onChange:function(e){return I(e.target.value)},value:B,placeholder:"Ingrese una palabra",onSearch:function(e){fetch(a+e).then((function(e){return e.json()})).then((function(e){e.map((function(e){return h(e.word)})),e.map((function(e){return g(e.meanings[0].definitions[0].definition)})),N(!1),I("")})).catch((function(){h([]),N(!0)}))},enterButton:!0})]}),Object(O.jsx)("div",{class:""!=o?"search-output-container":"alert-error",children:""!=o?Object(O.jsx)(m,{word:o,definition:v}):""}),!0===S?Object(O.jsx)(u.a,{style:{marginBottom:"10%"},message:"La palabra que esta buscando no existe",type:"error",showIcon:!0}):"",Object(O.jsx)(s.b,{to:"/favorite",children:Object(O.jsx)(d.a,{type:"dashed",ghost:!0,children:"Mostrar palabras favoritas"})})]})}var w=n(82),y=n(83);function S(e){var t=Object(r.useContext)(f).favorite,n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"favorite-title",children:[Object(O.jsx)("span",{children:"Lista de palabras favoritas"}),Object(O.jsx)(s.b,{to:"/",children:Object(O.jsx)(w.a,{style:{fontSize:"2rem"}})})]}),""!=a?a.map((function(e){return Object(O.jsxs)("div",{className:"search-output-container",children:[Object(O.jsxs)("div",{className:"search-output-box",children:[Object(O.jsxs)("p",{children:["Palabra: ",e.word]}),Object(O.jsxs)("p",{children:["Definicion: ",e.definition]})]}),Object(O.jsx)(y.a,{className:"delete-btn btn-press",onClick:function(){c(a.filter((function(t){return t.id!=e.id})))}})]})})):Object(O.jsx)("h2",{style:{color:"whitesmoke",padding:"2rem",textAlign:"center"},children:"No existen palabras marcadas como favoritas."}),""!=a?Object(O.jsx)(d.a,{type:"primary",danger:!0,onClick:function(){c(a.filter((function(e){return e!==e})))},children:"Borrar todas"}):""]})}var N=function(){return Object(O.jsx)(s.a,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(O.jsx)(o.a,{path:"/favorite",exact:!0,component:S})]})})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(h,{children:Object(O.jsx)(N,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8152f078.chunk.js.map