(this.webpackJsonplocationfinder=this.webpackJsonplocationfinder||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(12),s=n.n(a),i=(n(19),n(6)),o=(n(20),n(29)),r=n(30),l=n(1);var d=function(e){var t=Object(c.useState)(e.match.params.postcode),n=Object(i.a)(t,2),a=n[0],s=n[1],d=Object(c.useState)(""),j=Object(i.a)(d,2),h=j[0],m=j[1],b=Object(c.useState)({}),u=Object(i.a)(b,2),O=u[0],x=u[1],p=Object(c.useState)({}),f=Object(i.a)(p,2),v=f[0],g=f[1];Object(c.useEffect)((function(){void 0!==e.match.params.postcode&&(s(e.match.params.postcode),N(e.match.params.postcode))}),[a]);var N=function(e){return m(""),e.length>=6&&e.length<=8?/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/gm.test(e)?(m(!0),s(e),function(e){fetch("http://api.postcodes.io/postcodes/"+e).then((function(e){return e.json()})).then((function(e){x(e)})).catch((function(e){console.error(e)})),fetch("http://api.postcodes.io/postcodes/"+e+"/nearest/").then((function(e){return e.json()})).then((function(e){g(e)})).catch((function(e){console.error(e)}))}(e),!0):(m(!1),!1):e.length>8?(m(!1),!1):void 0},C=function(){var e=[];return Object.keys(v).length>0&&v.result.forEach((function(t){t.postcode!==O.result.postcode&&e.push(Object(l.jsxs)(o.a,{className:"elementContainer",children:[Object(l.jsx)(r.a,{md:4,className:"element",children:t.postcode}),Object(l.jsx)(r.a,{md:4,className:"element",children:t.country}),Object(l.jsx)(r.a,{md:4,children:t.region})]}))})),Object(l.jsx)("div",{className:"nearestDetailsContainer",children:e})};return Object(l.jsxs)("div",{className:"mainHome",children:[Object(l.jsx)(o.a,{className:"mainHeader",children:Object(l.jsx)(r.a,{className:"header",children:Object(l.jsx)("h1",{children:"Location Finder"})})}),Object(l.jsxs)("div",{className:"mainContent",children:[Object(l.jsxs)(o.a,{className:"contentList",children:[Object(l.jsx)(r.a,{md:3}),Object(l.jsx)(r.a,{md:2,className:"labelContainer",children:"Enter Post Code: "}),Object(l.jsxs)(r.a,{md:4,className:"inputContainer",children:[Object(l.jsx)("input",{type:"text",name:"postcode",onChange:function(e){return N(e.target.value)},defaultValue:a}),!0===h&&Object(l.jsx)("span",{className:"validate valid",children:"Valid"}),!1===h&&Object(l.jsx)("span",{className:"validate invalid",children:"Invalid"})]}),Object(l.jsx)(r.a,{md:3})]}),!0===h&&Object.keys(O).length>0&&Object.keys(v).length>0&&Object(l.jsxs)(o.a,{children:[Object(l.jsxs)(r.a,{md:4,className:"detailsContainer details",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Details"})}),Object(l.jsxs)("div",{children:["Country : ",O.result.country]}),Object(l.jsxs)("div",{children:["Region : ",O.result.region]})]}),Object(l.jsxs)(r.a,{md:7,className:"detailsContainer",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Nearest Locations"})}),Object(l.jsxs)(o.a,{className:"elementContainer",children:[Object(l.jsx)(r.a,{md:4,className:"elementElement",children:"Postcode"}),Object(l.jsx)(r.a,{md:4,className:"element",children:"Country"}),Object(l.jsx)(r.a,{md:4,children:"Region"})]}),C()]})]},Math.random)]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},h=(n(22),n(31)),m=n(32),b=n(33);s.a.render(Object(l.jsx)(h.a,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(b.a,{path:"/:postcode?",component:d})})}),document.getElementById("root")),j()}},[[26,1,2]]]);
//# sourceMappingURL=main.bbfcbc19.chunk.js.map