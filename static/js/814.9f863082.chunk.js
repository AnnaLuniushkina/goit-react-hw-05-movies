"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[814],{2814:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(885),a=t(2791),c=t(6871),u=t(4635),i="ReviewsPage_reviews_list__+yzpH",s="ReviewsPage_reviews_item__ZVgbi",o="ReviewsPage_reviews_author__S3pwi",p="ReviewsPage_reviews_content__vptqq",f=t(184);function h(e){var n=e.reviews;return n.length>0?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:i,children:n.map((function(e){return(0,f.jsxs)("li",{className:s,children:[(0,f.jsx)("h3",{className:o,children:e.author}),(0,f.jsx)("p",{className:p,children:e.content})]},e.id)}))})}):(0,f.jsx)("span",{children:"We don't have any review for this movie"})}function l(){var e=(0,a.useState)(null),n=(0,r.Z)(e,2),t=n[0],i=n[1],s=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.tx)(s).then((function(e){i(e.data.results)}))}),[s]),(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsx)(h,{reviews:t})," "]})}},4635:function(e,n,t){t.d(n,{Hg:function(){return p},TP:function(){return v},V0:function(){return h},tx:function(){return d},zv:function(){return w}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),s="c20f2af9e3efd6f7ff4fb5feff25f58d",o="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(n,"&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=814.9f863082.chunk.js.map