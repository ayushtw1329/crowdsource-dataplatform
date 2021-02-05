!function e(t,n,o){function i(r,s){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+r+"'")}var d=n[r]={exports:{}};t[r][0].call(d.exports,function(e){var n=t[r][1][e];return i(n||e)},d,d.exports,e,t,n,o)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,a=e("./validator-instructions").showInstructions,r=e("./visualizer").visualize;function s(){var e=$("footer"),t=$(".navbar"),n=e.outerHeight()+t.outerHeight(),o=100-n*(100/document.documentElement.clientHeight);$("#content-wrapper").css("min-height",o+"vh")}var l=function(){var e=localStorage.getItem("currentValidator"),t=localStorage.getItem("validatorDetails");if(!t)return localStorage.setItem("validatorDetails",JSON.stringify(o({},e,e))),$("#validator-page-content").addClass("d-none"),i.removeClass("bottom").addClass("fixed-bottom"),void a();var n=JSON.parse(t);n.hasOwnProperty(e)||(localStorage.setItem("validatorDetails",JSON.stringify(Object.assign(n,o({},e,e)))),$("#validator-page-content").addClass("d-none"),i.removeClass("bottom").addClass("fixed-bottom"),a())},d=function(){var e=document.getElementById("my-audio"),t=$("#play"),n=$("#pause"),o=$("#replay");function i(e){e.children().removeAttr("opacity"),e.removeAttr("disabled")}function a(){var e=$("#like_button"),t=$("#dislike_button"),n=$("#skip_button");i(e),i(t),i(n)}e.addEventListener("ended",function(){a(),n.addClass("d-none"),o.removeClass("d-none")}),t.on("click",function(){$("canvas").removeClass("d-none"),$("#default_line").addClass("d-none"),e.load(),t.addClass("d-none"),n.removeClass("d-none"),e.play(),k()}),n.on("click",function(){n.addClass("d-none"),o.removeClass("d-none"),a(),e.pause()}),o.on("click",function(){e.load(),o.addClass("d-none"),n.removeClass("d-none"),e.play(),k()})},c=["Sentence 1","Sentence 2","Sentence 3"],u=0,f=0,v=function(e,t,n){e.addClass("animated ".concat(t)),e.on("animationend",function(){e.removeClass("animated ".concat(t)),e.off("animationend"),"function"==typeof n&&n()})};function m(e){var t=$("#sentenceLabel");t[0].innerText=c[e],v(t,"lightSpeedIn")}function b(){var e,t,n;u<c.length-1&&(u++,e=$("#dislike_button"),t=$("#like_button"),n=$("#skip_button"),p(e,["white","#007BFF","#343A40"]),p(t,["white","#007BFF","#343A40"]),w(t),w(e),w(n),$("#replay").addClass("d-none"),$("#play").removeClass("d-none"),$("canvas").addClass("d-none"),$("#default_line").removeClass("d-none"),m(u))}var C,h,p=function(e,t){var n=e.children().children();n[0].setAttribute("fill",t[0]),n[1].setAttribute("fill",t[1]),n[2].setAttribute("fill",t[2])},g=function(){f++,document.getElementById("rect_".concat(f)).setAttribute("fill","#007BFF")},y=function(){var e=$("#nav-user"),t=e.find("#nav-username");e.removeClass("d-none");var n=localStorage.getItem("currentValidator");t.text(n)};function w(e){e.children().attr("opacity","50%"),e.attr("disabled","disabled")}function k(){var e=document.getElementById("myCanvas"),t=window.AudioContext||window.webkitAudioContext,n=document.querySelector("audio");C=C||new t,h=h||C.createMediaElementSource(n);var o=C.createAnalyser();h.connect(o),o.connect(C.destination),r(e,o)}function S(){$("#instructions-link").on("click",function(){$("#validator-page-content").addClass("d-none"),i.removeClass("bottom").addClass("fixed-bottom"),a()}),$("#validator-instructions-modal").on("hidden.bs.modal",function(){$("#validator-page-content").removeClass("d-none"),i.removeClass("fixed-bottom").addClass("bottom")});var e=$("#like_button"),t=$("#dislike_button");e.hover(function(){p(e,["#007BFF","white","white"])},function(){p(e,["white","#007BFF","#343A40"])}),t.hover(function(){p(t,["#007BFF","white","white"])},function(){p(t,["white","#007BFF","#343A40"])}),t.on("click",function(){g(),b()}),e.on("click",function(){g(),b()}),$("#skip_button").on("click",function(){g(),b()})}$(document).ready(function(){(i=$("footer")).addClass("bottom").removeClass("fixed-bottom"),s(),S(),y(),l(),d(),m(u)}),t.exports={decideToShowPopUp:l,setSentenceLabel:m,setAudioPlayer:d,setValidatorNameInHeader:y,addListeners:S,setUpVisualizer:k}},{"./validator-instructions":2,"./visualizer":3}],2:[function(e,t,n){"use strict";t.exports={showInstructions:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("#validator-instructions-modal")).modal("show")}}},{}],3:[function(e,t,n){"use strict";t.exports={visualize:function(e,t){var n=e.getContext("2d"),o=e.width,i=e.height,a=t.frequencyBinCount,r=new Uint8Array(a);!function e(){requestAnimationFrame(e),t.getByteTimeDomainData(r),n.fillStyle="rgb(255, 255, 255, 0.8)",n.fillRect(0,0,o,i),n.lineWidth=2,n.strokeStyle="rgb(0,123,255)",n.beginPath();for(var s=1*o/a,l=0,d=0;d<a;d++){var c=r[d]/128*i/2;0===d?n.moveTo(l,c):n.lineTo(l,c),l+=s}n.lineTo(o,i/2),n.stroke()}()}}},{}]},{},[1]);