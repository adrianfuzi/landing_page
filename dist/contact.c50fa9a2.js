parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QyVy":[function(require,module,exports) {

},{}],"OkGP":[function(require,module,exports) {
var e=document.querySelector(".header__nav--item-btn"),t=document.querySelector(".hamburger__menu--nav-button"),r=document.querySelector(".login__close--img"),n=document.querySelector(".login-wrapper"),o=document.querySelector(".hamburger"),c=document.querySelector(".hamburger-menu"),u=!1;function i(){!1===u&&(setTimeout(function(){n.style.opacity="1"},10),n.style.display="flex",o.classList.remove("hamburger__change"),c.classList.remove("hamburger-menu-visible"),TweenMax.from(".login-wrapper",.3,{y:-600,ease:Power1.easeOut}),u=!0)}function a(){n.style.opacity="0",setTimeout(function(){n.style.display="none"},1e3),u=!1}e.addEventListener("click",i),t.addEventListener("click",i),r.addEventListener("click",a);
},{}],"Ifip":[function(require,module,exports) {
function e(e){e.classList.toggle("hamburger__change")}document.querySelector(".hamburger").addEventListener("click",function(){e(this),document.querySelector(".hamburger-menu").classList.toggle("hamburger-menu-visible")});
},{}],"vy2F":[function(require,module,exports) {
$(window).width()>1062?(TweenMax.from(".contact-title",1,{x:-400,opacity:0,ease:Power1.easeOut}),TweenMax.from(".img__box",1,{y:300,opacity:0,ease:Power1.easeOut}).delay(.5),TweenMax.from(".contact",1,{opacity:0,ease:Power1.easeOut}).delay(1)):(TweenMax.from(".contact-title",1,{y:-50,opacity:0,ease:Power1.easeOut}),TweenMax.from(".contact",1,{y:-500,opacity:0,ease:Power1.easeOut}).delay(.5),TweenMax.from(".img__box",1,{y:-45,opacity:0,ease:Power1.easeOut}).delay(1));
},{}],"6VAr":[function(require,module,exports) {
"use strict";require("../../styles/contact/main.scss");var r=require("./login"),e=require("./hamburger"),i=require("./animations");
},{"../../styles/contact/main.scss":"QyVy","./login":"OkGP","./hamburger":"Ifip","./animations":"vy2F"}]},{},["6VAr"], null)
//# sourceMappingURL=/contact.c50fa9a2.js.map