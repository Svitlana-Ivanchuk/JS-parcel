!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("cZ2Ha",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c.default(e,t,r[t])}))}return e};var a,c=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){if(null==e)return{};var r,n,o=i.default(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o};var i=function(e){return e&&e.__esModule?e:{default:e}}(o("cZ2Ha"));var s=document.querySelector(".js-search-form"),f=s.firstElementChild,d=document.querySelector(".weather__wrapper"),p=function(e){var t=new Date(1e3*e);return"".concat("".concat(t.getHours()).padStart(2,0),":").concat("".concat(t.getMinutes()).padStart(2,0))};s.addEventListener("submit",(function(t){t.preventDefault();var r,n=f.value.trim();n&&(f.value="",(r=n,fetch("".concat("https://api.openweathermap.org/data/2.5/weather","?q=").concat(r,"&appid=").concat("9c6d356df795525b572ef209f6cb500f","&lang=ua&units=metric")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(t){var r=t.sys,n=r.sunset,o=r.sunrise,a=e(l)(t.sys,["sunset","sunrise"]),c=e(l)(t,["sys"]),i=e(u)({},c,{sys:e(u)({},a,{sunrise:p(o),sunset:p(n)})});d.innerHTML=weatherCardTemplate(i)})).catch(console.warn))}))}();
//# sourceMappingURL=weather.230b2a80.js.map
