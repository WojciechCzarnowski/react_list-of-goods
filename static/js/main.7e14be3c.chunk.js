(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(4),o=n.n(r),c=n(3),a=n(5),i=n(6),l=n(8),u=n(7),b=n(1),h=n.n(b),d=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.none=0]="none",t[t.name=1]="name",t[t.lenght=2]="lenght"}(s||(s={}));var v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:[].concat(j),visible:!1,reversed:!1,sorted:s.none},t.start=function(){return t.setState({visible:!0})},t.reverse=function(){t.setState((function(t){return{reversed:!t.reversed}}))},t.sortByName=function(){t.setState({sorted:s.name})},t.sortByLenght=function(){t.setState({sorted:s.lenght})},t.reset=function(){t.setState({visible:!1,reversed:!1,sorted:s.none})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.visible,r=t.reversed,o=t.sorted,a=Object(c.a)(e);switch(o){case s.name:a.sort((function(t,e){return t.localeCompare(e)}));break;case s.lenght:a.sort((function(t,e){return t.length-e.length}));break;default:a=Object(c.a)(e)}return r&&a.reverse(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Goods"}),Object(d.jsx)("button",{type:"button",onClick:this.start,className:"button",children:"Start"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",onClick:this.reverse,className:"button",children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:this.sortByName,className:"button",children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:this.reset,className:"button",children:"Reset"}),Object(d.jsx)("button",{type:"button",onClick:this.sortByLenght,className:"button",children:"Sort by length"})]}),n&&Object(d.jsx)("ul",{children:a.map((function(t){return Object(d.jsx)("li",{children:t})}))})]})}}]),n}(h.a.Component),p=v;o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7e14be3c.chunk.js.map