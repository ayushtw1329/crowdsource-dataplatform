!function e(t,a,r){function o(n,i){if(!a[n]){if(!t[n]){var l="function"==typeof require&&require;if(!i&&l)return l(n,!0);if(s)return s(n,!0);throw new Error("Cannot find module '"+n+"'")}var d=a[n]={exports:{}};t[n][0].call(d.exports,function(e){var a=t[n][1][e];return o(a||e)},d,d.exports,e,t,a,r)}return a[n].exports}for(var s="function"==typeof require&&require,n=0;n<r.length;n++)o(r[n]);return o}({1:[function(e,t,a){"use strict";t.exports={DEFAULT_CON_LANGUAGE:"Hindi",AUDIO_DURATION:6,SIXTY:60,HOUR_IN_SECONDS:3600}},{}],2:[function(e,t,a){"use strict";var r=e("./home-page-charts"),o=r.drawMap,s=r.getStatistics,n=r.showByHoursChart,i=r.showBySpeakersChart,l=e("./utils"),d=l.toggleFooterPosition,c=l.updateLocaleLanguagesDropdown,u=e("./speakerDetails"),m=u.validateUserName,h=u.testUserName,g=u.setSpeakerDetails,v=u.resetSpeakerDetails,p=u.setUserNameTooltip,f=u.setStartRecordBtnToolTipContent,_=e("./constants").DEFAULT_CON_LANGUAGE,b="aggregateDataCountByLanguage",x=[{value:"Assamese",id:"as",text:"অসমীয়া",hasLocaleText:!0},{value:"Bengali",id:"bn",text:"বাংলা",hasLocaleText:!0},{value:"English",id:"en",text:"English",hasLocaleText:!0},{value:"Gujarati",id:"gu",text:"ગુજરાતી",hasLocaleText:!0},{value:"Hindi",id:"hi",text:"हिंदी",hasLocaleText:!0},{value:"Kannada",id:"kn",text:"ಕನ್ನಡ",hasLocaleText:!0},{value:"Malayalam",id:"ml",text:"മലയാളം",hasLocaleText:!0},{value:"Marathi",id:"mr",text:"मराठी",hasLocaleText:!0},{value:"Odia",id:"or",text:"ଓଡିଆ",hasLocaleText:!0},{value:"Punjabi",id:"pa",text:"ਪੰਜਾਬੀ",hasLocaleText:!0},{value:"Tamil",id:"ta",text:"தமிழ்",hasLocaleText:!1},{value:"Telugu",id:"te",text:"తెలుగు",hasLocaleText:!1}],k=function(e){return fetch(e).then(function(e){if(e.ok)return Promise.resolve(e.json());throw Error(e.statusText||"HTTP error")})},C=function(e,t,a){var r=$("#say-p-3"),o=$("#listen-p-3"),s=JSON.parse(localStorage.getItem("localeString")),n=s["hrs recorded in"];n=(n=n.replace("%hours",e)).replace("%language",a),r.text(n);var i=s["hrs validated in"];i=(i=i.replace("%hours",t)).replace("%language",a),o.text(i)};function y(e){var t=$("#say-loader"),a=$("#listen-loader");t.removeClass("d-none"),a.removeClass("d-none");var r=JSON.parse(localStorage.getItem(b)),o=r&&r.find(function(t){return t.language===e});o?C(o.total_contributions,o.total_validations,e):C(0,0,e),t.addClass("d-none"),a.addClass("d-none"),c(e)}var I=function(e,t,a){var r=0,o=a.children();return o.each(function(e,t){t.getAttribute("value")===_&&(r=e)}),o.each(function(a,o){o.getAttribute(e)===t&&(r=a)}),o[r]},N=function(e,t,a){var r=a.children(),o=-1;r.each(function(e,a){a.getAttribute("value")===t&&(o=e)}),a.find(".active").removeClass("active");var s=document.getElementById("6th_option"),n=x.find(function(e){return e.value===t});s.innerText=n.text,o<0?(s.classList.remove("d-none"),s.classList.add("active"),s.setAttribute("value",t)):(r[o].classList.add("active"),s.classList.remove("active"),s.classList.add("d-none"))},L=function(){var e=localStorage.getItem("contributionLanguage"),t=$("#say-listen-language"),a=$("#language-nav-bar");if(!e){var r=document.getElementById("home-page").getAttribute("default-lang"),o=I("id",r,t),s=o.getAttribute("value");return localStorage.setItem("contributionLanguage",s),y(s),void N(0,s,a)}I("value",e,t);y(e),N(0,e,a)},S=function(){k("/stats/summary").then(function(e){var t,a;o({data:e.aggregate_data_by_state}),localStorage.setItem("topLanguagesByHours",JSON.stringify(e.top_languages_by_hours)),n(),localStorage.setItem("topLanguagesBySpeakers",JSON.stringify(e.top_languages_by_speakers)),localStorage.setItem(b,JSON.stringify(e.aggregate_data_by_language)),t=$("#language-nav-bar"),a=$("#nav-bar-loader"),[{value:"Hindi",id:"hi",text:"हिंदी"},{value:"Marathi",id:"mr",text:"मराठी"},{value:"Bengali",id:"bn",text:"বাংলা"},{value:"Tamil",id:"ta",text:"தமிழ்"},{value:"Telugu",id:"te",text:"తెలుగు"}].forEach(function(e,a){t.append('<li class="nav-item px-lg-4 px-md-4 px-2 options" value='.concat(e.value,">").concat(e.text,"</li>"))}),a.addClass("d-none"),t.removeClass("d-none"),L(),s(e.aggregate_data_count[0])})};$(document).ready(function(){localStorage.removeItem("topLanguagesByHours"),localStorage.removeItem("topLanguagesBySpeakers"),localStorage.removeItem(b),localStorage.removeItem("localeString"),k("/get-locale-strings").then(function(e){localStorage.setItem("localeString",JSON.stringify(e))});var e=$("#proceed-box"),t=e.parent(),a=document.querySelectorAll('input[name = "gender"]'),r=document.getElementById("age"),o=document.getElementById("mother-tongue"),s=$("#username"),l=s.next(),c=$("#tnc"),u=_;c.prop("checked",!1),d(),t.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto"});var x=localStorage.getItem("contributionLanguage"),C=$("#language-nav-bar");$("#say-listen-language").on("click",function(e){var t=e.target,a=t.getAttribute("value");x!==a&&(x=a,localStorage.setItem("contributionLanguage",a),document.cookie="i18n=en",window.location.href="/",N(0,a,C),y(a))}),C.on("click",function(e){var t=e.target,a=t.getAttribute("value");if(x!==a){localStorage.setItem("contributionLanguage",a),x=a;var r=$("#6th_option");(C.find(".active")||r).removeClass("active"),r.addClass("d-none"),t.classList.add("active"),y(a),document.cookie="i18n=en",window.location.href="/"}}),$("#start_recording").on("click",function(){u=x}),$('[name="topLanguageChart"]').on("change",function(e){"hours"===e.target.value?n():i()}),g("speakerDetails",r,o,s),a.forEach(function(e){e.addEventListener("click",function(e){e.target.previous&&(e.target.checked=!1),e.target.previous=e.target.checked})}),f(s.val().trim(),t),c.change(function(){var a=s.val().trim();this.checked&&!h(a)?(e.removeAttr("disabled").removeClass("point-none"),t.tooltip("disable")):(f(a,t),e.prop("disabled","true").addClass("point-none"),t.tooltip("enable"))}),s.on("input focus",function(){m(s,l,c),p(s)}),e.on("click",function(){if(c.prop("checked")){var e=Array.from(a).filter(function(e){return e.checked}),t=e.length?e[0].value:"",n=s.val().trim().substring(0,12);if("English"===u&&(u=_),h(n))return;var i={gender:t,age:r.value,motherTongue:o.value,userName:n,language:u};localStorage.setItem("speakerDetails",JSON.stringify(i)),location.href="/record"}}),$("#userModal").on("shown.bs.modal",function(){$("#resetBtn").on("click",v),s.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto",trigger:"focus"}),p(s)});var I=$("#say"),L=$("#listen"),T=$("#listen-p-2"),A=$("#say-p-2"),w=$("#say_container"),E=$("#listen_container");I.hover(function(){I.removeClass("col-lg-5"),L.removeClass("col-lg-5"),I.addClass("col-lg-6"),L.addClass("col-lg-4"),I.removeClass("col-md-5"),L.removeClass("col-md-5"),I.addClass("col-md-6"),L.addClass("col-md-4"),A.removeClass("d-none"),w.addClass("say-active")},function(){I.removeClass("col-lg-6"),L.removeClass("col-lg-4"),I.addClass("col-lg-5"),L.addClass("col-lg-5"),I.removeClass("col-md-6"),L.removeClass("col-md-4"),I.addClass("col-md-5"),L.addClass("col-md-5"),A.addClass("d-none"),w.removeClass("say-active")}),L.hover(function(){I.removeClass("col-lg-5"),L.removeClass("col-lg-5"),L.addClass("col-lg-6"),I.addClass("col-lg-4"),T.removeClass("d-none"),E.addClass("listen-active")},function(){I.removeClass("col-lg-4"),L.removeClass("col-lg-6"),I.addClass("col-lg-5"),L.addClass("col-lg-5"),T.addClass("d-none"),E.removeClass("listen-active")}),S()}),t.exports={performAPIRequest:k,updateHrsForSayAndListen:y,getDefaultTargettedDiv:I}},{"./constants":1,"./home-page-charts":3,"./speakerDetails":4,"./utils":5}],3:[function(e,t,a){"use strict";function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var s="topLanguagesByHours",n="topLanguagesBySpeakers",i=e("./utils"),l=i.calculateTime,d=i.formatTime,c=[{id:"IN-TG",state:"Telangana",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AN",state:"Andaman and Nicobar Islands",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AP",state:"Andhra Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AR",state:"Arunanchal Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AS",state:"Assam",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-BR",state:"Bihar",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-CT",state:"Chhattisgarh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-GA",state:"Goa",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-GJ",state:"Gujarat",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-HR",state:"Haryana",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-HP",state:"Himachal Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-JK",state:"Jammu & Kashmir",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-JH",state:"Jharkhand",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-KA",state:"Karnataka",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-KL",state:"Kerala",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-LD",state:"Lakshadweep",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MP",state:"Madhya Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MH",state:"Maharashtra",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MN",state:"Manipur",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-CH",state:"Chandigarh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-PY",state:"Puducherry",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-PB",state:"Punjab",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-RJ",state:"Rajasthan",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-SK",state:"Sikkim",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-TN",state:"Tamil Nadu",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-TR",state:"Tripura",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-UP",state:"Uttar Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-UT",state:"Uttarakhand",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-WB",state:"West Bengal",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-OR",state:"Odisha",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-DNDD",state:"Dadra and Nagar Haveli and Daman and Diu",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-ML",state:"Meghalaya",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MZ",state:"Mizoram",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-NL",state:"Nagaland",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-DL",state:"National Capital Territory of Delhi",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-LK",state:"Ladakh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0}],u=void 0,m=function(e){var t,a=[].concat(c),r=$("#legendDiv"),o=Math.max.apply(Math,e.data.map(function(e){return Number(e.total_contributions)}));t=o>1?o/4:.25,a.forEach(function(t){var a=e.data.find(function(e){return t.state===e.state});if(a){var r=l(60*Number(a.total_contributions)*60,!0),o=r.hours,s=r.minutes,n=r.seconds,i=l(60*Number(a.total_validations)*60,!0),d=i.hours,c=i.minutes,u=i.seconds;t.contributed_time="".concat(o,"hrs ").concat(s,"mins ").concat(n,"sec"),t.validated_time="".concat(d,"hrs ").concat(c,"mins ").concat(u,"sec"),t.value=Number(a.total_contributions),t.total_speakers=a.total_speakers,t.id=t.id}else t.id=t.id,t.contributed_time="0 hrs",t.validated_time="0 hrs",t.value=0,t.total_speakers=0});var s=am4core.create("indiaMapChart",am4maps.MapChart),n=s.series.indexOf(u);n>-1&&s.series.removeIndex(n),s.geodataSource.url="https://cdn.amcharts.com/lib/4/geodata/json/india2020Low.json",s.projection=new am4maps.projections.Miller,u=new am4maps.MapPolygonSeries,s.seriesContainer.draggable=!1,s.seriesContainer.resizable=!1,s.chartContainer.wheelable=!1,s.maxZoomLevel=1,u.useGeodata=!0,u.data=a;var i=u.mapPolygons.template;i.tooltipHTML='<div><h6>{state}</h6> <div>{total_speakers} Speakers  <label style="margin-left: 32px">Contributed: <label style="margin-left: 8px">{contributed_time}</label></label></div> <div>Validated:  <label style="margin-left: 8px">{validated_time}</label></div></div>',i.nonScalingStroke=!0,i.strokeWidth=.5,i.fill=am4core.color("#fff"),i.states.create("hover").properties.fill=s.colors.getIndex(1).brighten(-.5),u.mapPolygons.template.adapter.add("fill",function(e,a){return a.dataItem?a.dataItem.value>=3*t?am4core.color("#4061BF"):a.dataItem.value>=2*t?am4core.color("#6B85CE"):a.dataItem.value>=t?am4core.color("#92A8E8"):a.dataItem.value>0?am4core.color("#CDD8F6"):am4core.color("#E9E9E9"):e}),s.series.push(u);var m=$("#quarter .legend-val"),h=$("#half .legend-val"),g=$("#threeQuarter .legend-val"),v=$("#full .legend-val"),p=l(60*t*60,!1),f=p.hours,_=p.minutes,b=l(2*t*60*60,!1),x=b.hours,k=b.minutes,C=l(3*t*60*60,!1),y=C.hours,I=C.minutes;m.text("0 - ".concat(d(f,_))),h.text("".concat(d(f,_)," - ").concat(d(x,k))),g.text("".concat(d(x,k)," - ").concat(d(y,I))),v.text("> ".concat(d(y,I))),r.removeClass("d-none").addClass("d-flex")};function h(e,t,a){var o=am4core.create("speakers_hours_chart",am4charts.XYChart);g.chart=o;var s=r(e);s="total_speakers"===t?s.sort(function(e,t){return Number(e.total_speakers)<Number(t.total_speakers)?-1:1}):s.sort(function(e,t){return Number(e.total_contributions)<Number(t.total_contributions)?-1:1}),"total_speakers"!==t&&s.forEach(function(e){var t=l(60*Number(e.total_contributions)*60,!0),a=t.hours,r=t.minutes,o=t.seconds;e.total_contributions_text=d(a,r,o)}),o.data=s;var n=o.yAxes.push(new am4charts.CategoryAxis);n.dataFields.category=a,n.renderer.grid.template.location=0,n.renderer.cellStartLocation=.2,n.renderer.cellEndLocation=.8,n.renderer.grid.template.strokeWidth=0;var i=o.xAxes.push(new am4charts.ValueAxis);i.renderer.grid.template.strokeWidth=0,i.renderer.labels.template.disabled=!0,n.renderer.minGridDistance=25;var c=o.series.push(new am4charts.ColumnSeries);c.dataFields.valueX=t,c.dataFields.categoryY=a;var u=c.bullets.push(new am4charts.LabelBullet);u.label.text="total_speakers"===t?"{total_speakers}":"{total_contributions_text}",u.label.fontSize=14,u.label.horizontalCenter="left",u.label.dx=10,u.label.truncate=!1,u.label.hideOversized=!1;o.events.on("datavalidated",function(e){var t=e.target,a=t.yAxes.getIndex(0),r=35*t.data.length-a.pixelHeight,o=t.pixelHeight+r;t.svgContainer.htmlElement.style.height=o+"px"})}var g={};t.exports={generateIndiaMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(function(e){return fetch(e).then(function(e){if(e.ok)return Promise.resolve(e.json());throw Error(e.statusText||"HTTP error")})})(""!==e?"/aggregate-data-count?byState=true&byLanguage=true":"/aggregate-data-count?byState=true").then(function(t){var a=""!==e?function(e,t){var a={data:[]};return e.data.forEach(function(e){e.language.toLowerCase()===t.toLowerCase()&&""!==e.state&&"anonymous"!==e.state.toLowerCase()&&a.data.push(e)}),a}(t,e):t;m(a)}).catch(function(e){console.log(e)})},showByHoursChart:function(){g.chart&&g.chart.dispose();var e=localStorage.getItem(s);h(JSON.parse(e),"total_contributions","language")},showBySpeakersChart:function(){g.chart&&g.chart.dispose();var e=localStorage.getItem(n);h(JSON.parse(e),"total_speakers","language")},getStatistics:function(e){var t=$("#speaker-data").find("#loader1, #loader2, #loader3"),a=$("#speakers-wrapper"),r=$("#speaker-value"),o=$("#hours-wrapper"),s=$("#hour-value"),n=$("#languages-wrapper"),i=$("#languages-value");t.removeClass("d-none"),o.addClass("d-none"),a.addClass("d-none"),n.addClass("d-none");var d=l(60*Number(e.total_contributions)*60),c=d.hours,u=d.minutes,m=d.seconds;s.text("".concat(c,"h ").concat(u,"m ").concat(m,"s")),r.text(e.total_speakers),i.text(e.total_languages),t.addClass("d-none"),o.removeClass("d-none"),a.removeClass("d-none"),n.removeClass("d-none")},drawMap:m}},{"./utils":5}],4:[function(e,t,a){"use strict";function r(e,t,a){var r=e.val().trim();o(r)?(e.addClass("is-invalid"),t.removeClass("d-none")):(e.removeClass("is-invalid"),t.addClass("d-none")),a.trigger("change")}var o=function(e){return/^[6-9]\d{9}$/.test(e)||/^\S+@\S+[\.][0-9a-z]+$/.test(e)};t.exports={testUserName:o,validateUserName:r,setSpeakerDetails:function(e,t,a,o){var s=localStorage.getItem(e);if(s){var n=JSON.parse(s),i=document.querySelector('input[name = "gender"][value="'+n.gender+'"]');i&&(i.checked=!0,i.previous=!0),t.value=n.age,a.value=n.motherTongue,o.val(n.userName?n.userName.trim().substring(0,12):""),r(o,o.next(),$("#tnc"))}},resetSpeakerDetails:function(){var e=document.getElementById("age"),t=document.getElementById("mother-tongue"),a=document.getElementById("username"),r=document.querySelector('input[name = "gender"]:checked');r&&(r.checked=!1),e.selectedIndex=0,t.selectedIndex=0,a.value=""},setUserNameTooltip:function(e){e.val().length>11?(e.tooltip("enable"),e.tooltip("show")):(e.tooltip("disable"),e.tooltip("hide"))},setStartRecordBtnToolTipContent:function(e,t){o(e)?t.attr("data-original-title","Please validate any error message before proceeding"):t.attr("data-original-title","Please agree to the Terms and Conditions before proceeding")}}},{}],5:[function(e,t,a){"use strict";var r=e("./constants"),o=r.HOUR_IN_SECONDS,s=r.SIXTY,n=[{value:"Assamese",id:"as",text:"অসমীয়া",hasLocaleText:!0},{value:"Bengali",id:"bn",text:"বাংলা",hasLocaleText:!0},{value:"English",id:"en",text:"English",hasLocaleText:!0},{value:"Gujarati",id:"gu",text:"ગુજરાતી",hasLocaleText:!0},{value:"Hindi",id:"hi",text:"हिंदी",hasLocaleText:!0},{value:"Kannada",id:"kn",text:"ಕನ್ನಡ",hasLocaleText:!0},{value:"Malayalam",id:"ml",text:"മലയാളം",hasLocaleText:!0},{value:"Marathi",id:"mr",text:"मराठी",hasLocaleText:!0},{value:"Odia",id:"or",text:"ଓଡିଆ",hasLocaleText:!0},{value:"Punjabi",id:"pa",text:"ਪੰਜਾਬੀ",hasLocaleText:!0},{value:"Tamil",id:"ta",text:"தமிழ்",hasLocaleText:!1},{value:"Telugu",id:"te",text:"తెలుగు",hasLocaleText:!1}];t.exports={setPageContentHeight:function(){var e=$("footer"),t=$(".navbar"),a=100-(e.outerHeight()+t.outerHeight())*(100/document.documentElement.clientHeight);$("#content-wrapper").css("min-height",a+"vh")},toggleFooterPosition:function(){var e=$("footer");e.toggleClass("fixed-bottom"),e.toggleClass("bottom")},fetchLocationInfo:function(){return fetch("https://www.cloudflare.com/cdn-cgi/trace").then(function(e){return e.text()}).then(function(e){var t=e.split("\n"),a="";for(var r in t)if(t[r].startsWith("ip=")){a=t[r].replace("ip=","");break}return 0!==a.length?fetch("/location-info?ip=".concat(a)):new Promise(function(e,t){t("Ip Address not available")})})},updateLocaleLanguagesDropdown:function(e){var t=$("#localisation_dropdown"),a=n.find(function(t){return t.value===e});"english"===e.toLowerCase()||!1===a.hasLocaleText?t.html('<a id="english" class="dropdown-item" href="/changeLocale/en">English</a>'):t.html('<a id="english" class="dropdown-item" href="/changeLocale/en">English</a>\n        <a id='.concat(a.value,' class="dropdown-item" href="/changeLocale/').concat(a.id,'">').concat(a.text,"</a>"))},calculateTime:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Math.floor(e/o),r=e%o,n=Math.floor(r/s),i=Math.round(r%s);return t?{hours:a,minutes:n,seconds:i}:{hours:a,minutes:n}},formatTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r="";return e>0&&(r+="".concat(e," hrs ")),t>0&&(r+="".concat(t," min ")),0===e&&0===t&&a>0&&(r+="".concat(a," sec ")),r.substr(0,r.length-1)}}},{"./constants":1}]},{},[2]);