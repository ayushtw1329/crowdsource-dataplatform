!function e(t,a,r){function o(s,i){if(!a[s]){if(!t[s]){var l="function"==typeof require&&require;if(!i&&l)return l(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var d=a[s]={exports:{}};t[s][0].call(d.exports,function(e){var a=t[s][1][e];return o(a||e)},d,d.exports,e,t,a,r)}return a[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,a){"use strict";t.exports={DEFAULT_CON_LANGUAGE:"Hindi",AUDIO_DURATION:6,SIXTY:60,HOUR_IN_SECONDS:3600,ALL_LANGUAGES:[{value:"Assamese",id:"as",text:"অসমীয়া",hasLocaleText:!0,data:!0},{value:"Bengali",id:"bn",text:"বাংলা",hasLocaleText:!0,data:!0},{value:"English",id:"en",text:"English",hasLocaleText:!0,data:!0},{value:"Gujarati",id:"gu",text:"ગુજરાતી",hasLocaleText:!0,data:!0},{value:"Hindi",id:"hi",text:"हिंदी",hasLocaleText:!0,data:!0},{value:"Kannada",id:"kn",text:"ಕನ್ನಡ",hasLocaleText:!0,data:!0},{value:"Malayalam",id:"ml",text:"മലയാളം",hasLocaleText:!0,data:!0},{value:"Marathi",id:"mr",text:"मराठी",hasLocaleText:!0,data:!0},{value:"Odia",id:"or",text:"ଓଡିଆ",hasLocaleText:!0,data:!0},{value:"Punjabi",id:"pa",text:"ਪੰਜਾਬੀ",hasLocaleText:!0,data:!0},{value:"Tamil",id:"ta",text:"தமிழ்",hasLocaleText:!0,data:!0},{value:"Telugu",id:"te",text:"తెలుగు",hasLocaleText:!0,data:!0},{value:"Dogri",id:"doi",text:"डोगरी",hasLocaleText:!0,data:!1},{value:"Maithili",id:"mai",text:"Maithili",hasLocaleText:!0,data:!1},{value:"Urdu",id:"ur",text:"اردو",hasLocaleText:!0,data:!1},{value:"Konkani Roman",id:"kr",text:"Konkani Roman",hasLocaleText:!0,data:!1},{value:"Konkani DV",id:"kd",text:"Konkani DV",hasLocaleText:!0,data:!1},{value:"Manipuri BN",id:"mnibn",text:"Manipuri BN",hasLocaleText:!1,data:!1},{value:"Manipuri MM",id:"mnimm",text:"Manipuri MM",hasLocaleText:!1,data:!1},{value:"Santali OL",id:"satol",text:"Santali OL",hasLocaleText:!1,data:!1},{value:"Santali DV",id:"satdv",text:"Santali DV",hasLocaleText:!1,data:!1},{value:"Sanskrit",id:"sa",text:"Sanskrit",hasLocaleText:!0,data:!1}],TOP_LANGUAGES_BY_HOURS:"topLanguagesByHours",TOP_LANGUAGES_BY_SPEAKERS:"topLanguagesBySpeakers",AGGREGATED_DATA_BY_LANGUAGE:"aggregateDataCountByLanguage",LOCALE_STRINGS:"localeString",CONTRIBUTION_LANGUAGE:"contributionLanguage"}},{}],2:[function(e,t,a){"use strict";var r=e("./home-page-charts"),o=r.drawMap,n=r.getStatistics,s=r.showByHoursChart,i=r.showBySpeakersChart,l=e("./utils"),d=l.toggleFooterPosition,c=l.updateLocaleLanguagesDropdown,u=l.getLocaleString,m=l.performAPIRequest,h=e("./speakerDetails"),g=h.setSpeakerDetails,v=h.setStartRecordBtnToolTipContent,p=h.setTNCOnChange,_=h.setUserModalOnShown,f=h.setUserNameOnInputFocus,b=h.setGenderRadioButtonOnClick,N=h.setStartRecordingBtnOnClick,C=e("./constants"),S=C.DEFAULT_CON_LANGUAGE,k=C.TOP_LANGUAGES_BY_HOURS,I=C.TOP_LANGUAGES_BY_SPEAKERS,L=C.AGGREGATED_DATA_BY_LANGUAGE,x=C.CONTRIBUTION_LANGUAGE,A=C.LOCALE_STRINGS,y=C.ALL_LANGUAGES,T=function(e,t,a){var r=$("#say-p-3"),o=$("#listen-p-3"),n=JSON.parse(localStorage.getItem(A)),s=n["hrs recorded in"];s=(s=s.replace("%hours",e)).replace("%language",a),r.text(s);var i=n["hrs validated in"];i=(i=i.replace("%hours",t)).replace("%language",a),o.text(i)};function E(e){var t=$("#say-loader"),a=$("#listen-loader");t.removeClass("d-none"),a.removeClass("d-none");var r=JSON.parse(localStorage.getItem(L)),o=r&&r.find(function(t){return t.language===e});o?T(o.total_contributions,o.total_validations,e):T(0,0,e),t.addClass("d-none"),a.addClass("d-none"),c(e)}var O=function(e,t,a){var r=0,o=a.children();return o.each(function(e,t){t.getAttribute("value")===S&&(r=e)}),o.each(function(a,o){o.getAttribute(e)===t&&(r=a)}),o[r]},G=function(e,t,a){var r=a.children(),o=-1;r.each(function(e,a){a.getAttribute("value")===t&&(o=e)}),a.find(".active").removeClass("active");var n=document.getElementById("6th_option"),s=y.find(function(e){return e.value===t});n.innerText=s.text,o<0?(n.classList.remove("d-none"),n.classList.add("active"),n.setAttribute("value",t)):(r[o].classList.add("active"),n.classList.remove("active"),n.classList.add("d-none"))},w=function(){m("/stats/summary").then(function(e){o({data:e.aggregate_data_by_state}),localStorage.setItem(k,JSON.stringify(e.top_languages_by_hours)),s(),localStorage.setItem(I,JSON.stringify(e.top_languages_by_speakers)),localStorage.setItem(L,JSON.stringify(e.aggregate_data_by_language)),function(){var e=localStorage.getItem(x),t=$("#say-listen-language"),a=$("#language-nav-bar");if($("#nav-bar-loader").addClass("d-none"),a.removeClass("d-none"),!e){var r=document.getElementById("home-page").getAttribute("default-lang"),o=O("id",r,t),n=o.getAttribute("value");return localStorage.setItem(x,n),E(n),void G(0,n,a)}O("value",e,t);E(e),G(0,e,a)}(),n(e.aggregate_data_count[0])})};$(document).ready(function(){localStorage.removeItem(k),localStorage.removeItem(I),localStorage.removeItem(L),localStorage.removeItem(A),u();var e=$("#proceed-box").parent(),t=document.getElementById("age"),a=document.getElementById("mother-tongue"),r=$("#username"),o=$("#tnc");o.prop("checked",!1),d(),e.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto"});var n=function(){var e=localStorage.getItem(x),t=$("#say-listen-language");if(!e){var a=document.getElementById("home-page").getAttribute("default-lang"),r=O("id",a,t).getAttribute("value");return localStorage.setItem(x,r),r}return e}(),l=$("#language-nav-bar");$("#say-listen-language").on("click",function(e){var t=e.target,a=t.getAttribute("value");n!==a&&(n=a,localStorage.setItem(x,a),document.cookie="i18n=en",window.location.href="/",G(0,a,l),E(a))}),l.on("click",function(e){var t=e.target,a=t.getAttribute("value");if(n!==a){localStorage.setItem(x,a),n=a;var r=$("#6th_option");(l.find(".active")||r).removeClass("active"),r.addClass("d-none"),t.classList.add("active"),E(a),document.cookie="i18n=en",window.location.href="/"}}),$("#start_recording").on("click",function(){n,localStorage.setItem(x,n)}),$('[name="topLanguageChart"]').on("change",function(e){"hours"===e.target.value?s():i()}),g("speakerDetails",t,a,r),b(),v(r.val().trim(),e),p(r,e),f(),N(),_(r);var c=$("#say"),m=$("#listen"),h=$("#listen-p-2"),C=$("#say-p-2"),S=$("#say_container"),y=$("#listen_container");c.hover(function(){c.removeClass("col-lg-5"),m.removeClass("col-lg-5"),c.addClass("col-lg-6"),m.addClass("col-lg-4"),c.removeClass("col-md-5"),m.removeClass("col-md-5"),c.addClass("col-md-6"),m.addClass("col-md-4"),C.removeClass("d-none"),S.addClass("say-active")},function(){c.removeClass("col-lg-6"),m.removeClass("col-lg-4"),c.addClass("col-lg-5"),m.addClass("col-lg-5"),c.removeClass("col-md-6"),m.removeClass("col-md-4"),c.addClass("col-md-5"),m.addClass("col-md-5"),C.addClass("d-none"),S.removeClass("say-active")}),m.hover(function(){c.removeClass("col-lg-5"),m.removeClass("col-lg-5"),m.addClass("col-lg-6"),c.addClass("col-lg-4"),h.removeClass("d-none"),y.addClass("listen-active")},function(){c.removeClass("col-lg-4"),m.removeClass("col-lg-6"),c.addClass("col-lg-5"),m.addClass("col-lg-5"),h.addClass("d-none"),y.removeClass("listen-active")}),w()}),t.exports={updateHrsForSayAndListen:E,getDefaultTargetedDiv:O,setLangNavBar:G}},{"./constants":1,"./home-page-charts":3,"./speakerDetails":4,"./utils":5}],3:[function(e,t,a){"use strict";function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var n="topLanguagesByHours",s="topLanguagesBySpeakers",i=e("./utils"),l=i.calculateTime,d=i.formatTime,c=i.performAPIRequest,u=[{id:"IN-TG",state:"Telangana",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AN",state:"Andaman and Nicobar Islands",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AP",state:"Andhra Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AR",state:"Arunanchal Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-AS",state:"Assam",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-BR",state:"Bihar",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-CT",state:"Chhattisgarh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-GA",state:"Goa",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-GJ",state:"Gujarat",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-HR",state:"Haryana",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-HP",state:"Himachal Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-JK",state:"Jammu & Kashmir",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-JH",state:"Jharkhand",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-KA",state:"Karnataka",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-KL",state:"Kerala",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-LD",state:"Lakshadweep",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MP",state:"Madhya Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MH",state:"Maharashtra",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MN",state:"Manipur",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-CH",state:"Chandigarh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-PY",state:"Puducherry",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-PB",state:"Punjab",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-RJ",state:"Rajasthan",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-SK",state:"Sikkim",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-TN",state:"Tamil Nadu",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-TR",state:"Tripura",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-UP",state:"Uttar Pradesh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-UT",state:"Uttarakhand",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-WB",state:"West Bengal",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-OR",state:"Odisha",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-DNDD",state:"Dadra and Nagar Haveli and Daman and Diu",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-ML",state:"Meghalaya",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-MZ",state:"Mizoram",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-NL",state:"Nagaland",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-DL",state:"National Capital Territory of Delhi",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0},{id:"IN-LK",state:"Ladakh",contributed_time:"0 hrs",validated_time:"0 hrs",total_speakers:0}],m=void 0,h=function(e){var t,a=[].concat(u),r=$("#legendDiv"),o=Math.max.apply(Math,e.data.map(function(e){return Number(e.total_contributions)}));t=o>1?o/4:.25,a.forEach(function(t){var a=e.data.find(function(e){return t.state===e.state});if(a){var r=l(60*Number(a.total_contributions)*60,!0),o=r.hours,n=r.minutes,s=r.seconds,i=l(60*Number(a.total_validations)*60,!0),d=i.hours,c=i.minutes,u=i.seconds;t.contributed_time="".concat(o,"hrs ").concat(n,"mins ").concat(s,"sec"),t.validated_time="".concat(d,"hrs ").concat(c,"mins ").concat(u,"sec"),t.value=Number(a.total_contributions),t.total_speakers=a.total_speakers,t.id=t.id}else t.id=t.id,t.contributed_time="0 hrs",t.validated_time="0 hrs",t.value=0,t.total_speakers=0});var n=am4core.create("indiaMapChart",am4maps.MapChart),s=n.series.indexOf(m);s>-1&&n.series.removeIndex(s),n.geodataSource.url="https://cdn.amcharts.com/lib/4/geodata/json/india2020Low.json",n.projection=new am4maps.projections.Miller,m=new am4maps.MapPolygonSeries,n.seriesContainer.draggable=!1,n.seriesContainer.resizable=!1,n.chartContainer.wheelable=!1,n.maxZoomLevel=1,m.useGeodata=!0,m.data=a;var i=m.mapPolygons.template;i.tooltipHTML='<div><h6>{state}</h6> <div>{total_speakers} Speakers  <label style="margin-left: 32px">Contributed: <label style="margin-left: 8px">{contributed_time}</label></label></div> <div>Validated:  <label style="margin-left: 8px">{validated_time}</label></div></div>',i.nonScalingStroke=!0,i.strokeWidth=.5,i.stroke=am4core.color("#929292"),i.fill=am4core.color("#fff"),i.states.create("hover").properties.fill=n.colors.getIndex(1).brighten(-.5),m.mapPolygons.template.adapter.add("fill",function(e,a){return a.dataItem?a.dataItem.value>=3*t?am4core.color("#4061BF"):a.dataItem.value>=2*t?am4core.color("#6B85CE"):a.dataItem.value>=t?am4core.color("#92A8E8"):a.dataItem.value>0?am4core.color("#CDD8F6"):am4core.color("#E9E9E9"):e}),n.series.push(m);var c=$("#quarter .legend-val"),h=$("#half .legend-val"),g=$("#threeQuarter .legend-val"),v=$("#full .legend-val"),p=l(60*t*60,!1),_=p.hours,f=p.minutes,b=l(2*t*60*60,!1),N=b.hours,C=b.minutes,S=l(3*t*60*60,!1),k=S.hours,I=S.minutes;c.text("0 - ".concat(d(_,f))),h.text("".concat(d(_,f)," - ").concat(d(N,C))),g.text("".concat(d(N,C)," - ").concat(d(k,I))),v.text("> ".concat(d(k,I))),r.removeClass("d-none").addClass("d-flex")};function g(e,t,a){var o=am4core.create("speakers_hours_chart",am4charts.XYChart);v.chart=o;var n=r(e);n="total_speakers"===t?n.sort(function(e,t){return Number(e.total_speakers)<Number(t.total_speakers)?-1:1}):n.sort(function(e,t){return Number(e.total_contributions)<Number(t.total_contributions)?-1:1}),"total_speakers"!==t&&n.forEach(function(e){var t=l(60*Number(e.total_contributions)*60,!0),a=t.hours,r=t.minutes,o=t.seconds;e.total_contributions_text=d(a,r,o)}),o.data=n;var s=o.yAxes.push(new am4charts.CategoryAxis);s.dataFields.category=a,s.renderer.grid.template.location=0,s.renderer.cellStartLocation=.2,s.renderer.cellEndLocation=.8,s.renderer.grid.template.strokeWidth=0;var i=o.xAxes.push(new am4charts.ValueAxis);i.renderer.grid.template.strokeWidth=0,i.renderer.labels.template.disabled=!0,s.renderer.minGridDistance=25;var c=o.series.push(new am4charts.ColumnSeries);c.dataFields.valueX=t,c.dataFields.categoryY=a;var u=c.bullets.push(new am4charts.LabelBullet);u.label.text="total_speakers"===t?"{total_speakers}":"{total_contributions_text}",u.label.fontSize=14,u.label.horizontalCenter="left",u.label.dx=10,u.label.truncate=!1,u.label.hideOversized=!1;o.events.on("datavalidated",function(e){var t=e.target,a=t.yAxes.getIndex(0),r=35*t.data.length-a.pixelHeight,o=t.pixelHeight+r;t.svgContainer.htmlElement.style.height=o+"px"})}var v={};t.exports={generateIndiaMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c(""!==e?"/aggregate-data-count?byState=true&byLanguage=true":"/aggregate-data-count?byState=true").then(function(t){var a=""!==e?function(e,t){var a={data:[]};return e.data.forEach(function(e){e.language.toLowerCase()===t.toLowerCase()&&""!==e.state&&"anonymous"!==e.state.toLowerCase()&&a.data.push(e)}),a}(t,e):t;h(a)}).catch(function(e){console.log(e)})},showByHoursChart:function(){v.chart&&v.chart.dispose();var e=localStorage.getItem(n);g(JSON.parse(e),"total_contributions","language")},showBySpeakersChart:function(){v.chart&&v.chart.dispose();var e=localStorage.getItem(s);g(JSON.parse(e),"total_speakers","language")},getStatistics:function(e){var t=$("#speaker-data").find("#loader1, #loader2, #loader3"),a=$("#speakers-wrapper"),r=$("#speaker-value"),o=$("#hours-wrapper"),n=$("#hour-value"),s=$("#languages-wrapper"),i=$("#languages-value");t.removeClass("d-none"),o.addClass("d-none"),a.addClass("d-none"),s.addClass("d-none");var d=l(60*Number(e.total_contributions)*60),c=d.hours,u=d.minutes,m=d.seconds;n.text("".concat(c,"h ").concat(u,"m ").concat(m,"s")),r.text(e.total_speakers),i.text(e.total_languages),t.addClass("d-none"),o.removeClass("d-none"),a.removeClass("d-none"),s.removeClass("d-none")},drawMap:h}},{"./utils":5}],4:[function(e,t,a){"use strict";var r=e("./constants"),o=r.DEFAULT_CON_LANGUAGE,n=r.CONTRIBUTION_LANGUAGE,s=r.ALL_LANGUAGES;function i(e,t,a){var r=e.val().trim();d(r)?(e.addClass("is-invalid"),t.removeClass("d-none")):(e.removeClass("is-invalid"),t.addClass("d-none")),a.trigger("change")}function l(){var e=document.getElementById("age"),t=document.getElementById("mother-tongue"),a=document.getElementById("username"),r=document.querySelector('input[name = "gender"]:checked');r&&(r.checked=!1),e.selectedIndex=0,t.selectedIndex=0,a.value=""}var d=function(e){return/^[6-9]\d{9}$/.test(e)||/^\S+@\S+[\.][0-9a-z]+$/.test(e)};function c(e){e.val().length>11?(e.tooltip("enable"),e.tooltip("show")):(e.tooltip("disable"),e.tooltip("hide"))}var u=function(e,t){d(e)?t.attr("data-original-title","Please validate any error message before proceeding"):t.attr("data-original-title","Please agree to the Terms and Conditions before proceeding")};t.exports={testUserName:d,validateUserName:i,setSpeakerDetails:function(e,t,a,r){var o=localStorage.getItem(e);if(o){var n=JSON.parse(o),s=document.querySelector('input[name = "gender"][value="'+n.gender+'"]');s&&(s.checked=!0,s.previous=!0),t.value=n.age,a.value=n.motherTongue,r.val(n.userName?n.userName.trim().substring(0,12):""),i(r,r.next(),$("#tnc"))}},resetSpeakerDetails:l,setUserNameTooltip:c,setStartRecordBtnToolTipContent:u,setTNCOnChange:function(e,t){var a=$("#tnc"),r=$("#proceed-box");a.change(function(){var a=e.val().trim();this.checked&&!d(a)?(r.removeAttr("disabled").removeClass("point-none"),t.tooltip("disable")):(u(a,t),r.prop("disabled","true").addClass("point-none"),t.tooltip("enable"))})},setUserModalOnShown:function(e){$("#userModal").on("shown.bs.modal",function(){$("#resetBtn").on("click",l),e.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto",trigger:"focus"}),c(e)})},setUserNameOnInputFocus:function(){var e=$("#username"),t=e.next(),a=$("#tnc");e.on("input focus",function(){i(e,t,a),c(e)})},setGenderRadioButtonOnClick:function(){document.querySelectorAll('input[name = "gender"]').forEach(function(e){e.addEventListener("click",function(e){e.target.previous&&(e.target.checked=!1),e.target.previous=e.target.checked})})},setStartRecordingBtnOnClick:function(){var e=$("#proceed-box"),t=$("#tnc"),a=document.querySelectorAll('input[name = "gender"]'),r=$("#username"),i=document.getElementById("age"),l=document.getElementById("mother-tongue");e.on("click",function(){if(t.prop("checked")){var e=Array.from(a).filter(function(e){return e.checked}),c=e.length?e[0].value:"",u=r.val().trim().substring(0,12),m=localStorage.getItem(n);if(s.find(function(e){return e.value===m}).data||(m=o),d(u))return;var h={gender:c,age:i.value,motherTongue:l.value,userName:u,language:m};localStorage.setItem("speakerDetails",JSON.stringify(h)),localStorage.setItem(n,m),location.href="/record"}})}}},{"./constants":1}],5:[function(e,t,a){"use strict";var r=e("./constants"),o=r.HOUR_IN_SECONDS,n=r.SIXTY,s=r.ALL_LANGUAGES;var i=function(e){return fetch(e).then(function(e){if(e.ok)return Promise.resolve(e.json());throw Error(e.statusText||"HTTP error")})};t.exports={setPageContentHeight:function(){var e=$("footer"),t=$(".navbar"),a=100-(e.outerHeight()+t.outerHeight())*(100/document.documentElement.clientHeight);$("#content-wrapper").css("min-height",a+"vh")},toggleFooterPosition:function(){var e=$("footer");e.toggleClass("fixed-bottom"),e.toggleClass("bottom")},fetchLocationInfo:function(){var e=localStorage.getItem("state_region")||"NOT_PRESENT",t=localStorage.getItem("country")||"NOT_PRESENT";return"NOT_PRESENT"!==e&&"NOT_PRESENT"!==t&&e.length>0&&t.length>0?new Promise(function(a){a({regionName:e,country:t})}):fetch("https://www.cloudflare.com/cdn-cgi/trace").then(function(e){return e.text()}).then(function(e){var t=e.split("\n"),a="";for(var r in t)if(t[r].startsWith("ip=")){a=t[r].replace("ip=","");break}return 0!==a.length?fetch("/location-info?ip=".concat(a)):new Promise(function(e,t){t("Ip Address not available")})})},updateLocaleLanguagesDropdown:function(e){var t=$("#localisation_dropdown"),a=s.find(function(t){return t.value===e});"english"===e.toLowerCase()||!1===a.hasLocaleText?t.html('<a id="english" class="dropdown-item" href="/changeLocale/en">English</a>'):t.html('<a id="english" class="dropdown-item" href="/changeLocale/en">English</a>\n        <a id='.concat(a.value,' class="dropdown-item" href="/changeLocale/').concat(a.id,'">').concat(a.text,"</a>"))},calculateTime:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Math.floor(e/o),r=e%o,s=Math.floor(r/n),i=Math.round(r%n);return t?{hours:a,minutes:s,seconds:i}:{hours:a,minutes:s}},formatTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r="";return e>0&&(r+="".concat(e," hrs ")),t>0&&(r+="".concat(t," min ")),0===e&&0===t&&a>0&&(r+="".concat(a," sec ")),r.substr(0,r.length-1)},getLocaleString:function(){i("/get-locale-strings").then(function(e){localStorage.setItem("localeString",JSON.stringify(e))})},performAPIRequest:i,showElement:function(e){e.removeClass("d-none")},hideElement:function(e){e.addClass("d-none")}}},{"./constants":1}]},{},[2]);