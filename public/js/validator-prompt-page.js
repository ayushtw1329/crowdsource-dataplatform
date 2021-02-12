!function t(e,n,o){function i(r,l){if(!n[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+r+"'")}var d=n[r]={exports:{}};e[r][0].call(d.exports,function(t){var n=e[r][1][t];return i(n||t)},d,d.exports,t,e,n,o)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(t,e,n){"use strict";var o=t("./validator-instructions").showInstructions,i=t("./visualizer"),a=i.visualize,r=i.drawCanvasLine,l=t("./utils"),s=l.setPageContentHeight,d=l.toggleFooterPosition,u=function(){$("#validator-page-content").addClass("d-none"),d(),o()},c=function(){var t=document.getElementById("nav-username").innerText,e=localStorage.getItem("validatorDetails");if(!e)return localStorage.setItem("validatorDetails",JSON.stringify([t])),void u();var n=JSON.parse(e);n.includes(t)||(n.push(t),localStorage.setItem("validatorDetails",JSON.stringify(n)),u())},f=function(){var t=document.getElementById("my-audio"),e=$("#play"),n=$("#pause"),o=$("#replay"),i=$("#audioplayer-text");function a(t){t.children().removeAttr("opacity"),t.removeAttr("disabled")}function r(){var t=$("#like_button"),e=$("#dislike_button"),n=$("#skip_button");a(t),a(e),a(n)}t.addEventListener("ended",function(){r(),n.addClass("d-none"),o.removeClass("d-none"),i.text("Replay")}),e.on("click",function(){$("#default_line").addClass("d-none"),t.load(),e.addClass("d-none"),n.removeClass("d-none"),i.text("Pause"),t.play(),B()}),n.on("click",function(){n.addClass("d-none"),o.removeClass("d-none"),i.text("Replay"),r(),t.pause()}),o.on("click",function(){t.load(),o.addClass("d-none"),n.removeClass("d-none"),i.text("Pause"),t.play(),B()})},v=["लटक कर पैरों को मुक्त करने की एक नई कसरत बालकों के हाथ लग गई","जल्द ही पोलैंड में कोर्चार्क के रेडियो प्रोग्राम बहुत","उसने कहा क्योंकि उसमें दिल नहीं होगा जो सारे शरीर में खून भेजता"],m=0,g=0,h=function(t,e,n){t.addClass("animated ".concat(e)),t.on("animationend",function(){t.removeClass("animated ".concat(e)),t.off("animationend"),"function"==typeof n&&n()})};function y(t){var e=$("#sentenceLabel");e[0].innerText=v[t],h(e,"lightSpeedIn")}function p(){m<v.length-1&&(m++,x(),y(m))}var b,C,w=function(t,e){var n=t.children().children();n[0].setAttribute("fill",e[0]),n[1].setAttribute("fill",e[1]),n[2].setAttribute("fill",e[2])},F=function(){g++,document.getElementById("rect_".concat(g)).setAttribute("fill","#007BFF")};function k(t){t.children().attr("opacity","50%"),t.attr("disabled","disabled")}function x(){var t=$("#dislike_button"),e=$("#like_button"),n=$("#skip_button"),o=$("#audioplayer-text");w(t,["white","#007BFF","#343A40"]),w(e,["white","#007BFF","#343A40"]),n.removeAttr("style"),o.text("Play"),k(e),k(t),k(n),$("#replay").addClass("d-none"),$("#play").removeClass("d-none"),$("#default_line").removeClass("d-none")}var A=window.AudioContext||window.webkitAudioContext;function B(){var t=document.getElementById("myCanvas"),e=document.querySelector("audio");b=b||new A,C=C||b.createMediaElementSource(e);var n=b.createAnalyser();C.connect(n),n.connect(b.destination),a(t,n)}function S(){$("#instructions-link").on("click",function(){u()}),$("#validator-instructions-modal").on("hidden.bs.modal",function(){$("#validator-page-content").removeClass("d-none"),d()});var t=$("#like_button"),e=$("#dislike_button"),n=$("#skip_button");t.hover(function(){w(t,["#bfddf5","#007BFF","#007BFF"])},function(){w(t,["white","#007BFF","#343A40"])}),e.hover(function(){w(e,["#bfddf5","#007BFF","#007BFF"])},function(){w(e,["white","#007BFF","#343A40"])}),e.mousedown(function(){w(e,["#007BFF","white","white"])}),t.mousedown(function(){w(t,["#007BFF","white","white"])}),e.on("click",function(){F(),p()}),t.on("click",function(){F(),p()}),n.on("click",function(){F(),p()}),n.hover(function(){n.css("border-color","#bfddf5")},function(){n.removeAttr("style")}),n.mousedown(function(){n.css("background-color","#bfddf5")})}$(document).ready(function(){d(),s(),r(),x(),S(),c(),f(),y(m)}),e.exports={decideToShowPopUp:c,setSentenceLabel:y,setAudioPlayer:f,addListeners:S}},{"./utils":2,"./validator-instructions":3,"./visualizer":4}],2:[function(t,e,n){"use strict";e.exports={setPageContentHeight:function(){var t=$("footer"),e=$(".navbar"),n=100-(t.outerHeight()+e.outerHeight())*(100/document.documentElement.clientHeight);$("#content-wrapper").css("min-height",n+"vh")},toggleFooterPosition:function(){var t=$("footer");t.toggleClass("fixed-bottom"),t.toggleClass("bottom")}}},{}],3:[function(t,e,n){"use strict";e.exports={showInstructions:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("#validator-instructions-modal")).modal("show")}}},{}],4:[function(t,e,n){"use strict";e.exports={visualize:function(t,e){var n=t.getContext("2d"),o=t.width,i=t.height,a=e.frequencyBinCount,r=new Uint8Array(a);!function t(){requestAnimationFrame(t),e.getByteTimeDomainData(r),n.fillStyle="rgb(255, 255, 255, 0.8)",n.fillRect(0,0,o,i),n.lineWidth=2,n.strokeStyle="rgb(0,123,255)",n.beginPath();for(var l=1*o/a,s=0,d=0;d<a;d++){var u=r[d]/128*i/2;0===d?n.moveTo(s,u):n.lineTo(s,u),s+=l}n.lineTo(o,i/2),n.stroke()}()},drawCanvasLine:function(){var t=document.getElementById("myCanvas"),e=t.getContext("2d"),n=t.width,o=t.height;e.fillStyle="rgb(255, 255, 255, 0.8)",e.fillRect(0,0,n,o),e.lineWidth=2,e.strokeStyle="rgb(0,123,255)",e.moveTo(0,o/2),e.lineTo(n,o/2),e.stroke()}}},{}]},{},[1]);