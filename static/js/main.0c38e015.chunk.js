(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=(a(27),a(28),a(4)),s=a.n(i),l=a(5),m=a(3),f=a(17),u=a.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),p="26fcfdb208dcb0d333b5fc7d0a80ce05",h={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetfilxOriginals:"/discover/tv?api_key=".concat(p,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaties:"/discover/movie?api_key=".concat(p,"&with_genres=99")},d=(a(46),a(18)),v=(a(21),{height:"390",width:"100%",playerVars:{autoplay:1}});var b=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(m.a)(o,2),f=i[0],p=i[1],h=Object(n.useState)(""),b=Object(m.a)(h,2),_=b[0];return b[1],Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(a);case 2:t=e.sent,p(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row__posters"},f&&f.map((function(e){return c.a.createElement("img",{key:e.id,className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),_&&c.a.createElement(d.a,{videoId:_,opts:v}))};a(62);var _=function(){var e,t,a=Object(n.useState)([]),r=Object(m.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(h.fetchNetfilxOriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/").concat(o.backdrop_path,")"),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",null,o.title||o.name||o.original_name),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My List")),c.a.createElement("p",{className:"banner_description"},o.overview&&(e=o.overview,t=500,e.length>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner__fadeBottom"}))};a(63);var g=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},c.a.createElement("img",{src:"https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21",className:"nav__logo",alt:"Netflix Logo"}),c.a.createElement("img",{src:"https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21",className:"nav__logo",alt:"Netflix Logo"}))};var E=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(g,null),c.a.createElement(_,null),c.a.createElement(b,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetfilxOriginals,isLargeRow:!0}),c.a.createElement(b,{title:"Trending Now",fetchUrl:h.fetchTrending}),c.a.createElement(b,{title:"Top Rated",fetchUrl:h.fetchTopRated}),c.a.createElement(b,{title:"Romantic Movies",fetchUrl:h.fetchRomanceMovies}),c.a.createElement(b,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),c.a.createElement(b,{title:"Documentaries",fetchUrl:h.fetchDocumentaties}),c.a.createElement(b,{title:"Action Movies",fetchUrl:h.fetchActionMovies}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0c38e015.chunk.js.map