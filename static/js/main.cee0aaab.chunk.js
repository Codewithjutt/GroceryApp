(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),i=(n(14),n(8)),o=n(5),s=n(1),u=n(4),m=function(e){var t=e.items,n=e.removeItem,a=e.editItem;return r.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,c=e.title;return r.a.createElement("article",{className:"grocery-item",key:t},r.a.createElement("p",{className:"title"},c),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return a(t)}},r.a.createElement(u.a,null)),r.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return n(t)}},r.a.createElement(u.b,null))))})))},f=function(e){var t=e.type,n=e.msg,c=e.removeAlert,l=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){c()}),3e3);return function(){return clearTimeout(e)}}),[l]),r.a.createElement("p",{className:"alert alert-".concat(t)},n)};var b=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(function(){var e=localStorage.getItem("list");return e?JSON.parse(localStorage.getItem("list")):[]}()),u=Object(s.a)(l,2),b=u[0],d=u[1],g=Object(a.useState)(!1),v=Object(s.a)(g,2),E=v[0],p=v[1],O=Object(a.useState)(null),y=Object(s.a)(O,2),j=y[0],N=y[1],h=Object(a.useState)({show:!1,msg:"",type:""}),S=Object(s.a)(h,2),I=S[0],k=S[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k({show:e,type:t,msg:n})};return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(b))}),[b]),r.a.createElement("section",{className:"section-center"},r.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),n)if(n&&E)d(b.map((function(e){return e.id===j?(console.log(e.id),Object(o.a)(Object(o.a)({},e),{},{title:n})):e}))),c(""),N(null),p(!1),w(!0,"success","value changed");else{w(!0,"success","item added to the list");var t={id:(new Date).getTime().toString(),title:n};d([].concat(Object(i.a)(b),[t])),c("")}else w(!0,"danger","please enter value")}},I.show&&r.a.createElement(f,Object.assign({},I,{removeAlert:w,list:b})),r.a.createElement("h3",null,"grocery bud"),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",className:"grocery",placeholder:"e.g. eggs",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"submit-btn"},E?"edit":"submit"))),b.length>0&&r.a.createElement("div",{className:"grocery-container"},r.a.createElement(m,{items:b,removeItem:function(e){w(!0,"danger","item removed"),d(b.filter((function(t){return t.id!==e})))},editItem:function(e){var t=b.find((function(t){return t.id===e}));p(!0),N(e),c(t.title)}}),r.a.createElement("button",{className:"clear-btn",onClick:function(){w(!0,"danger","empty list"),d([])}},"clear items")))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cee0aaab.chunk.js.map