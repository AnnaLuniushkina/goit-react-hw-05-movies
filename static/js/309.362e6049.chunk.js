"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[309],{2309:function(A,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(885),e=n(6871),a=n(2791),c=n(4635),s="CastPage_cast_page__-xnVY",u="CastPage_cast_page_item__Uopgt",i="CastPage_cast_img__Gsomk",p="CastPage_cast_name__uUlpm",o="CastPage_cast_character__pNT2R",l=n(5988),f=n(184);function y(A){var t=A.cast;return(0,f.jsx)("ul",{className:s,children:t.map((function(A){var t=A.id,n=A.profile_path,r=A.original_name,e=A.name,a=A.character;return(0,f.jsxs)("li",{className:u,children:[n?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:r,width:"200px"}):(0,f.jsx)("img",{className:i,src:l,alt:r,width:"200px"}),(0,f.jsx)("h3",{className:p,children:e}),(0,f.jsx)("p",{className:o,children:a})]},t)}))})}function g(){var A=(0,e.UO)().movieId,t=(0,a.useState)(null),n=(0,r.Z)(t,2),s=n[0],u=n[1];return(0,a.useEffect)((function(){(0,c.zv)(A).then((function(A){u(A.data.cast)}))}),[A]),(0,f.jsx)(f.Fragment,{children:s&&(0,f.jsx)(y,{cast:s})})}},4635:function(A,t,n){n.d(t,{Hg:function(){return p},TP:function(){return y},V0:function(){return l},tx:function(){return v},zv:function(){return m}});var r=n(5861),e=n(7757),a=n.n(e),c=n(4569),s=n.n(c),u="c20f2af9e3efd6f7ff4fb5feff25f58d",i="https://api.themoviedb.org/3";function p(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function A(){return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s().get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:return A.abrupt("return",A.sent);case 3:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function l(A){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function A(t){return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s().get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=1"));case 2:return A.abrupt("return",A.sent);case 3:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function y(A){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function A(t){return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s().get("".concat(i,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return A.abrupt("return",A.sent);case 3:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function m(A){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function A(t){return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s().get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return A.abrupt("return",A.sent);case 3:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function v(A){return S.apply(this,arguments)}function S(){return(S=(0,r.Z)(a().mark((function A(t){return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s().get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return A.abrupt("return",A.sent);case 3:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},5988:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=309.362e6049.chunk.js.map