parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yy8x":[function(require,module,exports) {

},{}],"Ri3E":[function(require,module,exports) {
var e=document.querySelector(".signup__login-link"),t=document.querySelector(".login-wrapper"),n=document.querySelector(".signup-wrapper"),i=document.querySelector(".login__signup-link");function o(){setTimeout(function(){t.style.opacity="1"},10),t.style.display="flex",setTimeout(function(){n.style.opacity="0"},10),n.style.display="none"}function l(){setTimeout(function(){t.style.opacity="0"},10),t.style.display="none",setTimeout(function(){n.style.opacity="1"},10),n.style.display="flex"}e.addEventListener("click",o),i.addEventListener("click",l);
},{}],"oLbD":[function(require,module,exports) {
"use strict";require("../../styles/signup/main.scss");var s=require("./login");
},{"../../styles/signup/main.scss":"yy8x","./login":"Ri3E"}]},{},["oLbD"], null)
//# sourceMappingURL=/signup.11bb0f83.js.map