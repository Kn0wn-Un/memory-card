(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{11:function(e,a,n){"use strict";n.r(a);var i=n(0),t=n(1),c=n.n(t),r=n(5),o=n.n(r),m=n(2);n(4);var s=function(e){var a=Object(t.useState)(!1),n=Object(m.a)(a,2),c=n[0],r=n[1];return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("h1",{children:"Memory Card"}),Object(i.jsxs)("div",{className:"navigation",children:[Object(i.jsxs)("span",{children:["Score: ",e.score," | "]}),Object(i.jsxs)("span",{children:["Best: ",e.highScore]})]}),Object(i.jsx)("div",{className:"navigation",style:{cursor:"pointer"},onClick:function(){r(!c)},children:"Instructions"})]}),c?Object(i.jsx)("div",{className:"info",children:"Cards Shuffle everytime you click on one, Don't click on the same card twice easy :)"}):null]})};var d=function(e){var a=Object(t.useState)(e.arr),n=Object(m.a)(a,2),c=n[0],r=n[1],o=c.map((function(a,n){return Object(i.jsxs)("div",{className:"card",onClick:function(){e.handler(a.id),r(function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[n],e[n]=i}return e}(c))},children:[Object(i.jsx)("img",{src:a.img,alt:a.name}),Object(i.jsx)("div",{children:a.name})]},a.id)}));return Object(i.jsx)("div",{className:"card-wrapper",children:o})},p=[{id:1,name:"Batman",img:"https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Batman_DC_Comics.png/170px-Batman_DC_Comics.png"},{id:2,name:"Superman",img:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"},{id:3,name:"Spider-man",img:"https://i.pinimg.com/originals/37/01/ab/3701ab4d685e7ccc686bef3714b80275.png"},{id:4,name:"Captian America",img:"https://img.pngio.com/captain-america-marvel-ultimate-alliance-wiki-fandom-powered-marvel-ultimate-alliance-png-1445_2151.png"},{id:5,name:"Wonder Woman",img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Wonder_Woman_DC_Comics.png/220px-Wonder_Woman_DC_Comics.png"},{id:6,name:"Iron Man",img:"https://yourpng.com/public/uploads/preview/iron-man-png-full-size-download-11594192619u5bgnbhrqg.png"},{id:7,name:"Hulk",img:"https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png"},{id:8,name:"Wolverine",img:"https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png"},{id:9,name:"Black Widow",img:"https://upload.wikimedia.org/wikipedia/en/1/1b/Black_Widow_1.png"},{id:10,name:"Black Panther",img:"https://freepngimg.com/thumb/black_panther/11-2-black-panther-png-clipart.png"},{id:11,name:"Thor",img:"https://www.pinclipart.com/picdir/big/12-129015_thor-png-transparent-image-thor-marvel-clipart.png"},{id:12,name:"Cat Woman",img:"https://www.pngkey.com/png/full/73-733539_catwoman-transparent-background-cat-woman-transparent-png.png"}];var l=function(){var e=Object(t.useState)(0),a=Object(m.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)(0),o=Object(m.a)(r,2),l=o[0],g=o[1],h=Object(t.useState)([]),u=Object(m.a)(h,2),j=u[0],b=u[1];return Object(t.useEffect)((function(){n>l&&g(n)}),[n,l]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{score:n,highScore:l}),Object(i.jsx)(d,{arr:p,handler:function(e){-1===j.indexOf(e)?(c(n+1),j.push(e),b(j)):(c(0),b([]))},score:n}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"https://github.com/Kn0wn-Un/memory-card",children:"Made with love <3"})})]})};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))},4:function(e,a,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.cc8c0ef0.chunk.js.map