parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L/DU":[function(require,module,exports) {

},{}],"NTm4":[function(require,module,exports) {
function e(){document.body.scrollTop>500||document.documentElement.scrollTop>500?document.querySelector(".header__sticky").style.top="0":document.querySelector(".header__sticky").style.top="-8rem"}window.onscroll=function(){e()};
},{}],"phkL":[function(require,module,exports) {
function e(e){e.classList.toggle("hamburger__change")}document.querySelector(".hamburger").addEventListener("click",function(){e(this),document.querySelector(".hamburger-menu").classList.toggle("hamburger-menu-visible")});
},{}],"7AFj":[function(require,module,exports) {
$("#home").click(function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},0)}),$(".h").click(function(){$("html, body").animate({scrollTop:$("#nav-home").offset().top-100},800)}),$(".f").click(function(){$("html, body").animate({scrollTop:$("#nav-features").offset().top-95},800)}),$(".p").click(function(){$("html, body").animate({scrollTop:$("#nav-pricing").offset().top-95},800)}),$(".c").click(function(){$("html, body").animate({scrollTop:$("#nav-company").offset().top-135},800)}),$(".burger-h").click(function(){$("html, body").animate({scrollTop:$("#nav-home").offset().top-100},400)}),$(".burger-f").click(function(){$("html, body").animate({scrollTop:$("#nav-features").offset().top-15},400)}),$(".burger-p").click(function(){$("html, body").animate({scrollTop:$("#nav-pricing").offset().top-15},400)}),$(".burger-c").click(function(){$("html, body").animate({scrollTop:$("#nav-company").offset().top-15},400)});
},{}],"Xeuf":[function(require,module,exports) {
if($(window).width()>=1207){TweenMax.from(".hero__box",1,{x:-200,opacity:0,ease:Power1.easeOut}),TweenMax.from(".hero__img",1,{y:300,opacity:0,ease:Power1.easeOut}).delay(.5),TweenMax.from(".hero__scroll",1,{opacity:0,ease:Power1.easeOut}).delay(1);var s=TweenMax.from(".features__title",1,{opacity:0,x:-200,paused:!0,ease:Power2.easeOut}),e={start:100,stop:300},t=TweenMax.from(".features__description",1,{opacity:0,paused:!0,ease:Power2.easeOut}),r={start:300,stop:600},a=TweenMax.from(".features__box",1,{opacity:0,y:200,paused:!0,ease:Power2.easeOut}),o={start:400,stop:700},p=TweenMax.from(".pricing__title",1,{opacity:0,x:-200,paused:!0,ease:Power2.easeOut}),w={start:800,stop:1200},i=TweenMax.from(".pricing__box",1,{opacity:0,y:200,paused:!0,ease:Power2.easeOut}),g={start:1200,stop:1400},x=TweenMax.from(".company__img",1,{opacity:0,x:-200,paused:!0,ease:Power2.easeOut}),_={start:1400,stop:2300},u=TweenMax.from(".company__box",1,{opacity:0,paused:!0,ease:Power2.easeOut}),c={start:1400,stop:2300},n=TweenMax.from(".feedback__title",1,{opacity:0,x:-200,paused:!0,ease:Power2.easeOut}),y={start:2300,stop:2500},f=TweenMax.from(".feedback__box",1,{opacity:0,y:100,paused:!0,ease:Power2.easeOut}),m={start:2500,stop:2700};$(window).on("scroll",function(){var d=$(window).scrollTop(),T=d,M=(T-e.start)/(e.stop-e.start);T>e.start&&T<e.stop?s.progress(M):T<e.start?s.progress(0):T<e.stop&&s.progress(1);var O=d,P=(O-r.start)/(r.stop-r.start);O>r.start&&O<r.stop?t.progress(P):O<r.start?t.progress(0):O<r.stop&&t.progress(1);var l=d,b=(l-o.start)/(o.stop-o.start);l>o.start&&l<o.stop?a.progress(b):l<o.start?a.progress(0):O<o.stop&&a.progress(1);var v=d,h=(v-w.start)/(w.stop-w.start);v>w.start&&v<w.stop?p.progress(h):v<w.start?p.progress(0):v<w.stop&&p.progress(1);var k=d,j=(k-g.start)/(g.stop-g.start);k>g.start&&k<g.stop?i.progress(j):k<g.start?i.progress(0):k<g.stop&&i.progress(1);var q=d,z=(q-_.start)/(_.stop-_.start);q>_.start&&q<_.stop?x.progress(z):q<_.start?x.progress(0):q<_.stop&&x.progress(1);var A=d,B=(A-c.start)/(c.stop-c.start);A>c.start&&A<c.stop?u.progress(B):A<c.start?u.progress(0):A<c.stop&&u.progress(1);var C=d,D=(C-y.start)/(y.stop-y.start);C>y.start&&C<y.stop?n.progress(D):C<y.start?n.progress(0):C<y.stop&&n.progress(1);var E=d,F=(E-m.start)/(m.stop-m.start);E>m.start&&E<m.stop?f.progress(F):E<m.start?f.progress(0):E<m.stop&&f.progress(1)})}else TweenMax.from(".hero__box--title",1,{x:-200,opacity:0,ease:Power1.easeOut}),TweenMax.from(".hero__box--text",1,{x:200,opacity:0,ease:Power1.easeOut}),TweenMax.from(".hero__box--btn",1,{opacity:0,ease:Power1.easeOut}),TweenMax.from(".hero__img",1,{opacity:0,scale:.5,ease:Power1.easeOut}).delay(.5);
},{}],"5Wra":[function(require,module,exports) {
var e=document.querySelectorAll(".header__nav--item-btn"),r=document.querySelector(".hamburger__menu--nav-button"),n=document.querySelector(".login__close--img"),a=document.querySelector(".login-wrapper"),t=document.querySelector(".hamburger"),i=document.querySelector(".hamburger-menu");function o(){a.style.display="flex",a.classList.remove("login-wrapper-hidden"),a.classList.remove("login-wrapper-disabled"),t.classList.remove("hamburger__change"),i.classList.remove("hamburger-menu-visible"),TweenMax.from(".login-wrapper",.3,{y:-400,ease:Power1.easeOut})}function c(){a.classList.add("login-wrapper-hidden"),a.classList.add("login-wrapper-disabled")}e.forEach(function(e){e.addEventListener("click",function(){o()})}),r.addEventListener("click",o),n.addEventListener("click",c);
},{}],"rEqs":[function(require,module,exports) {
"use strict";require("../styles/main.scss");var r=require("./navbar"),e=require("./hamburger"),i=require("./smoothScroll"),s=require("./animations"),u=require("./login");
},{"../styles/main.scss":"L/DU","./navbar":"NTm4","./hamburger":"phkL","./smoothScroll":"7AFj","./animations":"Xeuf","./login":"5Wra"}]},{},["rEqs"], null)
//# sourceMappingURL=/javascript.3ec5f953.js.map