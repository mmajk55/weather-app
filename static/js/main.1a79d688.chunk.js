(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),i=n(1),u=n(3),l=n(5),s=n.n(l),m=n(7),f=n(6),p={colors:{blue:"#158ca1",white:"#fff",black:"#000",grey:"#f3f4f8"},containerWidth:"1300px",metrics:{metricXL:"90px",metricL:"60px",metricM:"45px",metricBase:"30px",metricS:"15px",metricXS:"5px"},shadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",breakPoints:{tablet:768,smallDesktop:1100}},d=u.c;function h(){var e=Object(i.a)(["\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 ",";\n  @media (min-width: ",") {\n    padding: 0 ",";\n  }\n  @media (min-width: ",") {\n    padding: 0 ",";\n  }\n"]);return h=function(){return e},e}var b=d.div(h(),(function(e){return e.theme.containerWidth}),(function(e){return e.theme.metrics.metricBase}),(function(e){return e.theme.breakPoints.tablet}),(function(e){return e.theme.metrics.metricL}),(function(e){return e.theme.breakPoints.smallDesktop}),(function(e){return e.theme.metrics.metricXL})),v=a.a.memo((function(e){var t=e.children;return a.a.createElement(b,null,t)})),O=n(11),E=n.n(O);function g(){var e=Object(i.a)(["\n  color: ",";\n  text-align: center;\n  margin-bottom: ",";\n"]);return g=function(){return e},e}function x(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n"]);return x=function(){return e},e}var w=u.c.div(x(),(function(e){return e.theme.metrics.metricS})),y=u.c.div(g(),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.metrics.metricXS})),j=(n(17),function(e){var t=e.time,n=e.mainInfo,c=e.icon,o=Object(r.useMemo)((function(){return Math.round(n.temp)}),[n.temp]);return a.a.createElement(w,null,a.a.createElement(y,null,a.a.createElement(E.a,{locale:"pl",format:"LT",date:t})),a.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(c,".png"),alt:"icon"}),a.a.createElement(y,null,o," \xbaC"),a.a.createElement(y,null,"Wilgotno\u015b\u0107: ",n.humidity,"%"))});function L(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]);return L=function(){return e},e}function C(){var e=Object(i.a)(["\n  display: flex;\n  max-width: 100%;\n  overflow-x: auto;\n"]);return C=function(){return e},e}function k(){var e=Object(i.a)(["\n  font-style: italic;\n  display: block;\n"]);return k=function(){return e},e}function R(){var e=Object(i.a)(["\n  position: relative;\n  border: 1px solid ",";\n  padding: 20px;\n  box-shadow: ",";\n  border-radius: 10px;\n  width: 100%;\n  margin-bottom: ",";\n"]);return R=function(){return e},e}var S=d.div(R(),(function(e){return e.theme.colors.grey}),(function(e){return e.theme.shadow}),(function(e){return e.theme.metrics.metricM})),T=d.span(k()),A=d.div(C()),_=d.div(L()),D=n(12),F=a.a.memo((function(e){var t=e.data,n=e.day,c=Object(r.useMemo)((function(){return e=t,{min:Math.round(Math.max.apply(Math,Object(D.a)(e.map((function(e){return e.main.temp}))))),max:Math.round(Math.min.apply(Math,Object(D.a)(e.map((function(e){return e.main.temp})))))};var e}),[t]),o=c.min,i=c.max,u=Object(r.useMemo)((function(){return e=t.map((function(e){return e.main.temp})),Math.round(e.reduce((function(e,t){return e+t}))/e.length);var e}),[t]);return a.a.createElement(S,null,a.a.createElement(_,null,a.a.createElement("h3",null,a.a.createElement(E.a,{locale:"pl",format:"dddd",date:n}),a.a.createElement(T,null,n)),a.a.createElement(y,null,"Min: ",o,"\xbaC"),a.a.createElement(y,null,"Max: ",i,"\xbaC"),a.a.createElement(y,null,"\u015ar: ",u,"\xbaC")),a.a.createElement(A,null,t.map((function(e,t){return a.a.createElement(j,{key:t,icon:e.weather[0].icon,mainInfo:e.main,time:e.dt_txt})}))))}));function P(){var e=Object(i.a)(["\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid ",";\n  outline: none;\n  padding: "," 0;\n"]);return P=function(){return e},e}function I(){var e=Object(i.a)(["\n  display: flex;\n  width: 300px;\n  margin-bottom: ",";\n"]);return I=function(){return e},e}var M=d.div(I(),(function(e){return e.theme.metrics.metricS})),N=d.input(P(),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.metrics.metricXS})),G=a.a.memo((function(e){var t=e.onChange,n=e.onKeyPress;return a.a.createElement(M,null,a.a.createElement(N,{onKeyDown:n,onChange:t,type:"text",placeholder:"Wpisz nazw\u0119 miasta"}))}));function z(){var e=Object(i.a)(["\n  border: 1px solid ",";\n  background-color: transparent;\n  padding: ",";\n  width: 300px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"]);return z=function(){return e},e}var W=d.button(z(),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.metrics.metricS}),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.white})),H=a.a.memo((function(e){var t=e.text,n=e.onClick;return a.a.createElement(W,{onClick:n},t)})),X=n(22),B=n.n(X);function U(){var e=Object(i.a)(["\n  color: ",";\n  text-align: center;\n  margin-bottom: ",";\n"]);return U=function(){return e},e}function K(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: ",";\n"]);return K=function(){return e},e}function J(){var e=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: "," 0;\n"]);return J=function(){return e},e}var q,$=u.c.div(J(),(function(e){return e.theme.metrics.metricXL})),Q=u.c.div(K(),(function(e){return e.theme.metrics.metricM})),V=u.c.h1(U(),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.metrics.metricL})),Y="404",Z=n(4);!function(e){e[e.FETCH_WEATHER_FORECAST=0]="FETCH_WEATHER_FORECAST"}(q||(q={}));var ee,te={weatherForecastList:void 0,statusCode:void 0,city:void 0},ne=function(e,t){var n,r=t.type,a=t.payload;switch(r){case q.FETCH_WEATHER_FORECAST:return Object(Z.a)(Object(Z.a)({},e),{},{weatherForecastList:a.list?(n=a.list,n.reduce((function(e,t){var n=t.dt_txt.split(" ")[0];return e[n]=[].concat(Object(D.a)(e[n]?e[n]:[]),[t]),e}),{})):e.weatherForecastList,city:a.city?a.city.name:e.city,statusCode:a.cod})}},re=a.a.createContext({}),ae=function(e){var t=Object(r.useReducer)(ne,te),n=Object(f.a)(t,2),c=n[0],o=n[1];return a.a.createElement(re.Provider,{value:{weatherForecastState:c,weatherForecastDispatch:o}},e.children)},ce=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.town,e.prev=1,e.next=4,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast/?q=").concat(n,"&units=metric&APPID=").concat("733442219eadeb4b4c4b9b393a3f83ba","&lang=pl"));case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userLocation,e.prev=1,e.next=4,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast/?lat=").concat(n.lat,"&lon=").concat(n.long,"&units=metric&APPID=").concat("733442219eadeb4b4c4b9b393a3f83ba","&lang=pl"));case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();!function(e){e[e.LOADING=0]="LOADING",e[e.STOP_LOADING=1]="STOP_LOADING",e[e.ERROR=2]="ERROR",e[e.GET_USER_LOCATION=3]="GET_USER_LOCATION"}(ee||(ee={}));var ie={error:void 0,isLoading:!1,userLocation:void 0},ue=function(e,t){switch(t.type){case ee.LOADING:return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!0});case ee.STOP_LOADING:return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1});case ee.GET_USER_LOCATION:return Object(Z.a)(Object(Z.a)({},e),{},{userLocation:t.cords?t.cords:e.userLocation});case ee.ERROR:return Object(Z.a)(Object(Z.a)({},e),{},{error:t.error})}},le=a.a.createContext({}),se=function(e){var t=Object(r.useReducer)(ue,ie),n=Object(f.a)(t,2),c=n[0],o=n[1];return a.a.createElement(le.Provider,{value:{appState:c,appDispatch:o}},e.children)},me=function(){var e=a.a.useState(void 0),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(r.useContext)(re),i=o.weatherForecastDispatch,u=o.weatherForecastState,l=Object(r.useContext)(le),p=l.appDispatch,d=l.appState,h=d.isLoading,b=d.userLocation;Object(r.useEffect)((function(){b&&O(null,b)}),[b]);var O=Object(r.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(t,r){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),!n&&!r){e.next=20;break}if(p({type:ee.LOADING}),e.prev=3,!n){e.next=10;break}return e.next=7,ce({town:n});case 7:a=e.sent,e.next=13;break;case 10:return e.next=12,oe({userLocation:r});case 12:a=e.sent;case 13:i({type:q.FETCH_WEATHER_FORECAST,payload:a}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),p({type:ee.ERROR,error:e.t0});case 19:p({type:ee.STOP_LOADING});case 20:return e.abrupt("return");case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t,n){return e.apply(this,arguments)}}(),[n]),E=Object(r.useCallback)((function(e){return c(e.target.value)}),[]);return a.a.createElement(v,null,a.a.createElement($,null,a.a.createElement(V,null,"Prognoza Pogody"),a.a.createElement(Q,null,a.a.createElement(G,{onChange:E,onKeyPress:function(e){return"Enter"===e.key&&O()}}),h?a.a.createElement(B.a,{type:"Oval",color:"#158ca1",height:50,width:50}):a.a.createElement(H,{text:"Szukaj",onClick:O})),u&&u.city&&a.a.createElement("h2",null,"Miasto: ",u.city),u&&u.weatherForecastList&&Object.keys(u.weatherForecastList).map((function(e,t){return a.a.createElement(F,{key:t,day:e,data:u.weatherForecastList[e]})})),u&&u.statusCode&&u.statusCode===Y&&a.a.createElement("p",null,"Nie znaleziono miasta.")))};function fe(){var e=Object(i.a)(["\nhtml {\n  font-size: 62.5%\n}\nbody {\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    font-size: 1.4rem;\n    overflow-x: hidden;\n}\nh1 {\n  font-size: 2.4rem;\n}\n"]);return fe=function(){return e},e}var pe=Object(u.b)(fe()),de=function(){var e=Object(r.useContext)(le).appDispatch;return Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){var n={lat:t.coords.latitude,long:t.coords.longitude};e({type:ee.GET_USER_LOCATION,cords:n})}),(function(t){e({type:ee.ERROR,error:t})}))}),[]),a.a.createElement(u.a,{theme:p},a.a.createElement(pe,null),a.a.createElement(ae,null,a.a.createElement(me,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(se,null,a.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.1a79d688.chunk.js.map