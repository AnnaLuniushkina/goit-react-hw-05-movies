"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[631],{6631:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(885),u=n(501),c=n(2791),a=n(4635),i=n(6871),o=n(184);function s(t){var e=t.moviesList,n=(0,i.TH)();return(0,o.jsx)("ul",{children:e.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}))})}function p(){var t=(0,c.useState)(""),e=(0,r.Z)(t,2),n=e[0],i=e[1],p=(0,u.lr)(),f=(0,r.Z)(p,2),l=f[0],d=f[1],h=(0,c.useState)(null),v=(0,r.Z)(h,2),m=v[0],g=v[1],x=l.get("query");(0,c.useEffect)((function(){null!==x&&(i(x),(0,a.V0)(x).then((function(t){g(t.data.results)})))}),[x]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===n.trim().toLowerCase())return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442.");d("query=".concat(n)),(0,a.V0)(n).then((function(t){g(t.data.results)}))},children:[(0,o.jsx)("input",{style:{padding:"5px",width:250,borderRadius:"5px"},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"searchQuery",value:n,onChange:function(t){i(t.currentTarget.value)}}),(0,o.jsx)("button",{type:"submit",style:{padding:"7px",borderRadius:"5px",backgroundColor:"#2196f3",border:"none",cursor:"pointer"},children:"Search"})]}),(0,o.jsx)("div",{children:m&&(0,o.jsx)(s,{moviesList:m})})]})}},4635:function(t,e,n){n.d(e,{Hg:function(){return p},TP:function(){return h},V0:function(){return l},tx:function(){return x},zv:function(){return m}});var r=n(5861),u=n(7757),c=n.n(u),a=n(4569),i=n.n(a),o="c20f2af9e3efd6f7ff4fb5feff25f58d",s="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=631.3f7a0bb0.chunk.js.map