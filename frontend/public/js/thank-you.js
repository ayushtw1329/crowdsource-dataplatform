!function e(t,n,a){function o(i,s){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(r)return r(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n||e)},c,c.exports,e,t,n,a)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(e,t,n){"use strict";t.exports={DEFAULT_CON_LANGUAGE:"Hindi",AUDIO_DURATION:6,SIXTY:60,HOUR_IN_SECONDS:3600,ALL_LANGUAGES:[{value:"Assamese",id:"as",text:"অসমীয়া",hasLocaleText:!0,data:!0},{value:"Bengali",id:"bn",text:"বাংলা",hasLocaleText:!0,data:!0},{value:"English",id:"en",text:"English",hasLocaleText:!0,data:!0},{value:"Gujarati",id:"gu",text:"ગુજરાતી",hasLocaleText:!0,data:!0},{value:"Hindi",id:"hi",text:"हिंदी",hasLocaleText:!0,data:!0},{value:"Kannada",id:"kn",text:"ಕನ್ನಡ",hasLocaleText:!0,data:!0},{value:"Malayalam",id:"ml",text:"മലയാളം",hasLocaleText:!0,data:!0},{value:"Marathi",id:"mr",text:"मराठी",hasLocaleText:!0,data:!0},{value:"Odia",id:"or",text:"ଓଡିଆ",hasLocaleText:!0,data:!0},{value:"Punjabi",id:"pa",text:"ਪੰਜਾਬੀ",hasLocaleText:!0,data:!0},{value:"Tamil",id:"ta",text:"தமிழ்",hasLocaleText:!0,data:!0},{value:"Telugu",id:"te",text:"తెలుగు",hasLocaleText:!0,data:!0}],TOP_LANGUAGES_BY_HOURS:"topLanguagesByHours",TOP_LANGUAGES_BY_SPEAKERS:"topLanguagesBySpeakers",AGGREGATED_DATA_BY_LANGUAGE:"aggregateDataCountByLanguage",LOCALE_STRINGS:"localeString",CONTRIBUTION_LANGUAGE:"contributionLanguage",BADGES:{bronze:{imgLg:"../img/bronze_badge.svg",imgSm:"../img/bronze_contributor.jpeg"},silver:{imgLg:"../img/silver_badge.svg",imgSm:"../img/silver_contributor.jpeg"},gold:{imgLg:"../img/gold_badge.svg",imgSm:"../img/gold_contributor.jpeg"},platinum:{imgLg:"../img/platinum_badge.svg",imgSm:"../img/platinum_contributor.jpeg"},certificate:{imgLg:"../img/certificate.svg",imgSm:"../img/certificate.svg"}},SPEAKER_DETAILS_KEY:"speakerDetails"}},{}],2:[function(e,t,n){"use strict";t.exports={api_url:"http://localhost:8080"}},{}],3:[function(e,t,n){"use strict";var a=e("./fetch"),o=e("./constants"),r=o.SIXTY,i=o.HOUR_IN_SECONDS,s=o.LOCALE_STRINGS,l=o.BADGES,c=o.CONTRIBUTION_LANGUAGE,g=e("./utils"),d=g.setPageContentHeight,u=g.toggleFooterPosition,m=g.updateLocaleLanguagesDropdown,_=g.getLocaleString,h=g.performAPIRequest,b="currentIndex",f="speakerDetails",v="speakersData",p=5;function x(){var e=localStorage.getItem(c),t=localStorage.getItem("speakerDetails"),n="";t&&(n=JSON.parse(t).userName);var a=localStorage.getItem(s);a||_().then(function(){a=localStorage.getItem(s)});var o=JSON.parse(a);h("/rewards?language=".concat(e,"&category=speak&userName=").concat(n)).then(function(e){if(localStorage.setItem("badgeId",e.badgeId),localStorage.setItem("badges",JSON.stringify(e.badges)),localStorage.setItem("nextHourGoal",e.nextHourGoal),$("#user-contribution").text(e.contributionCount),$("#language-hour-goal").text(e.nextHourGoal),e.isNewBadge)$("#spree_text").removeClass("d-none"),$("#milestone_text").removeClass("d-none"),$("#current_badge_name").text(o[e.currentBadgeType]),$("#current_badge_name_1").text(o[e.currentBadgeType]),$("#current_badge_count").text(e.currentMilestone),$("#next_badge_count").text(e.nextMilestone),$("#next_badge_name_1").text(o[e.nextBadgeType.toLowerCase()]),$("#sentence_away_msg").addClass("d-none"),$("#user-contribution-msg").addClass("d-none"),$("#download_pdf").attr("data-badge",e.currentBadgeType.toLowerCase()),$("#reward-img").attr("src","../img/".concat(e.currentBadgeType.toLowerCase(),"_badge.svg"));else if(e.contributionCount<5)$("#champion_text").removeClass("d-none"),$("#contribution_text").removeClass("d-none"),$("#sentence_away_msg").removeClass("d-none"),$("#user-contribution-msg").removeClass("d-none"),$("#sentense_away_count").text(Number(e.nextMilestone)-Number(e.contributionCount)),$("#next_badge_name").text(o[e.nextBadgeType.toLowerCase()]);else if(Number(e.contributionCount)>=Number(e.currentMilestone)&&Number(e.contributionCount)<=Number(e.nextMilestone)){$("#spree_text").removeClass("d-none"),$("#before_badge_content").removeClass("d-none"),$("#sentence_away_msg").removeClass("d-none"),$("#user-contribution-msg").removeClass("d-none"),$("#sentense_away_count").text(Number(e.nextMilestone)-Number(e.contributionCount)),$("#next_badge_name").text(o[e.nextBadgeType.toLowerCase()]);var t=$("#bronze_badge_link img"),n=$("#silver_badge_link img"),a=$("#gold_badge_link img"),r=$("#platinum_badge_link img");"bronze"===e.currentBadgeType.toLowerCase()?(t.parent().attr("disabled",!1),$("#bronze_badge_link_img").addClass("enable"),$("#bronze_badge_link_img").removeClass("disable")):"silver"===e.currentBadgeType.toLowerCase()?(t.parent().attr("disabled",!1),n.parent().attr("disabled",!1),$("#bronze_badge_link_img").addClass("enable"),$("#bronze_badge_link_img").removeClass("disable"),$("#silver_badge_link_img").addClass("enable"),$("#silver_badge_link_img").removeClass("disable")):"gold"===e.currentBadgeType.toLowerCase()?(t.parent().attr("disabled",!1),n.parent().attr("disabled",!1),a.parent().attr("disabled",!1),$("#bronze_badge_link_img").addClass("enable"),$("#bronze_badge_link_img").removeClass("disable"),$("#silver_badge_link_img").addClass("enable"),$("#silver_badge_link_img").removeClass("disable"),$("#gold_badge_link_img").addClass("enable"),$("#gold_badge_link_img").removeClass("disable")):"platinum"===e.currentBadgeType.toLowerCase()&&(t.parent().attr("disabled",!1),n.parent().attr("disabled",!1),a.parent().attr("disabled",!1),r.parent().attr("disabled",!1),$("#bronze_badge_link_img").addClass("enable"),$("#bronze_badge_link_img").removeClass("disable"),$("#silver_badge_link_img").addClass("enable"),$("#silver_badge_link_img").removeClass("disable"),$("#gold_badge_link_img").addClass("enable"),$("#gold_badge_link_img").removeClass("disable"),$("#platinum_badge_link_img").addClass("enable"),$("#platinum_badge_link_img").removeClass("disable"))}})}var C=function(){var e,t,n,a=11;return innerWidth<576?(t=70.5-1.333*(e=576-innerWidth)/100,n=75.2-.4*e/100):innerWidth<1200?(t=70.5-.5*(e=1200-innerWidth)/100,n=75.75-.25*e/100):innerWidth<2e3?(t=71.5-.1*(e=2e3-innerWidth)/100,a=12-.1*e/100,n=innerWidth<1500?75.2:75.5-.003*e/100):(t=71.5+.1*(e=innerWidth-2e3)/100,a=12,n=75.8),{totalProgressBarWidth:t,totalProgressBarBulbWidth:a,totalProgressBarBulbLeft:n}};var w=function(e){var t=localStorage.getItem(c),n=JSON.parse(localStorage.getItem(f)).userName;h("/rewards?language=".concat(t,"&category=speak&userName=").concat(n)).then(function(t){localStorage.setItem("nextHourGoal",t.nextHourGoal),function(e,t){var n=$("#total-progress"),a=e*i,o=C(),r=t/a*100;r>=100?(n.next().css({width:o.totalProgressBarBulbWidth+"%",left:o.totalProgressBarBulbLeft+"%"}),n.width(100*o.totalProgressBarWidth/100+"%"),$("#total-progress").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){var e=0,t=setInterval(function(){e>=100&&clearInterval(t),n.next().css("background","linear-gradient(to right, #007bff 0%, #007bff ".concat(e,"%, transparent 0%)")),e+=5},30)})):n.width(r*o.totalProgressBarWidth/100+"%")}(t.nextHourGoal,e)})},S=function(e){try{var t=$("#hour-value"),n=Number(e.find(function(e){return 1===e.index}).duration),a=T(n),o=a.hours,r=a.minutes,i=a.seconds;t.text("".concat(o,"h ").concat(r,"m ").concat(i,"s")),w(n)}catch(e){console.log(e)}},T=function(e){var t=Math.floor(e/i),n=e%i;return{hours:t,minutes:Math.floor(n/r),seconds:Math.ceil(n%r)}},L=function(e,t){var n=JSON.parse(localStorage.getItem(s)),a="";a=0===t?n["social sharing text without rank"]:(a=(a=n["social sharing text with rank"]).replace("%language",e)).replace("%rank",t),$("#whatsapp_share").attr("href","https://api.whatsapp.com/send?text=".concat(a)),$("#twitter_share").attr("href","https://twitter.com/intent/tweet?text=".concat(a)),$("#linkedin_share").attr("href","https://www.linkedin.com/shareArticle?mini=true&url=https://boloindia.nplt.in&title=".concat(n["Bolo India: A crowdsourcing initiative for Indian languages"],"&summary=").concat(a))},N=function(){a("/stats/summary?aggregateDataByLanguage=true").then(function(e){return e.json()}).then(function(e){if(e.aggregate_data_by_language.length>0){$("#did_you_know_section").show();var t=e.aggregate_data_by_language.sort(function(e,t){return Number(e.total_contributions)>Number(t.total_contributions)?-1:1}),n=T(3600*Number(t[0].total_contributions)),a=n.hours,o=n.minutes,r=n.seconds;$("#highest_language_time").text("".concat(a,"hrs ").concat(o,"min ").concat(r,"sec"));var i=$("#highest_language_progress"),s=3600*Number(t[0].total_contributions)/36e4*100;i.css("width","".concat(s,"%"));var l=localStorage.getItem(c),g=t.findIndex(function(e){return e.language.toLowerCase()===l.toLowerCase()}),d=$("#contribute_language_time"),u=$("#contribute_language_progress");if(g>-1){var m=t[g].total_contributions,_=T(3600*Number(m)),h=_.hours,b=_.minutes,f=_.seconds;d.text("".concat(h,"hrs ").concat(b,"min ").concat(f,"sec"));var v=3600*Number(m)/36e4*100;u.css("width","".concat(v,"%"))}else d.text("0 hrs"),d.css("right",0),u.css("width","0%");$("#languageId").text(t[0].language),$("#languageChoiceId").text(l),L(l,g>-1?g+1:t.length+1)}else L("",0),$("#did_you_know_section").hide()})};function k(){var e=Number(localStorage.getItem(b)),t=JSON.parse(localStorage.getItem(f));t?e<p?location.href="/#start-record":($("#nav-user").removeClass("d-none"),$("#nav-login").addClass("d-none"),$("#nav-username").text(t.userName),d(),x(),function(e){var t=$("#hour-value");a("/getDetails/".concat(e.language)).then(function(e){if(e.ok)return e.json();throw Error(e.statusText||"HTTP error")}).then(function(e){localStorage.setItem(v,JSON.stringify(e)),S(e)}).catch(function(e){console.log(e)}).then(function(){t.next().addClass("d-none")})}(t)):location.href="/#start-record",u();var n=localStorage.getItem(c);n&&m(n),N()}function I(e){var t=new jsPDF,n=new Image;n.onload=function(){t.addImage(this,36,10,128,128),t.save("".concat(e,"-badge.pdf"))},n.crossOrigin="Anonymous",n.src=l[e].imgSm;var a=JSON.parse(localStorage.getItem("badges")).find(function(t){return t.grade&&t.grade.toLowerCase()===e.toLowerCase()});a&&t.text("Badge Id : ".concat(a.generated_badge_id),36,150)}$(document).ready(function(){$("#download_pdf").on("click",function(){I($(this).attr("data-badge"))}),$("#bronze_badge_link, #silver_badge_link, #gold_badge_link, #platinum_badge_link").on("click",function(){$(this).attr("disabled")||I($(this).attr("data-badge"))}),_().then(function(e){k()}).catch(function(e){k()})}),t.exports={setSentencesContributed:x}},{"./constants":1,"./fetch":4,"./utils":5}],4:[function(e,t,n){"use strict";var a,o=(a=e("node-fetch"))&&a.__esModule?a:{default:a};var r=e("./env-api").api_url;t.exports=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return e.startsWith("/")?o.default.apply(void 0,[r+e].concat(n)):o.default.apply(void 0,[e].concat(n))}},{"./env-api":2,"node-fetch":6}],5:[function(e,t,n){"use strict";var a=e("./constants"),o=a.HOUR_IN_SECONDS,r=a.SIXTY,i=a.ALL_LANGUAGES,s=e("./fetch");var l=function(e){return s(e,{credentials:"include",mode:"cors"}).then(function(e){if(e.ok)return Promise.resolve(e.json());throw Error(e.statusText||"HTTP error")})};t.exports={setPageContentHeight:function(){var e=$("footer"),t=$(".navbar"),n=100-(e.outerHeight()+t.outerHeight())*(100/document.documentElement.clientHeight);$("#content-wrapper").css("min-height",n+"vh")},toggleFooterPosition:function(){var e=$("footer");e.toggleClass("fixed-bottom"),e.toggleClass("bottom")},fetchLocationInfo:function(){var e=localStorage.getItem("state_region")||"NOT_PRESENT",t=localStorage.getItem("country")||"NOT_PRESENT";return"NOT_PRESENT"!==e&&"NOT_PRESENT"!==t&&e.length>0&&t.length>0?new Promise(function(n){n({regionName:e,country:t})}):s("https://www.cloudflare.com/cdn-cgi/trace").then(function(e){return e.text()}).then(function(e){var t=e.split("\n"),n="";for(var a in t)if(t[a].startsWith("ip=")){n=t[a].replace("ip=","");break}return 0!==n.length?s("/location-info?ip=".concat(n)):new Promise(function(e,t){t("Ip Address not available")})})},updateLocaleLanguagesDropdown:function(e){var t=$("#localisation_dropdown"),n=i.find(function(t){return t.value===e});"english"===e.toLowerCase()||!1===n.hasLocaleText?t.html('<a id="english" class="dropdown-item" href="#" locale="en">English</a>'):t.html('<a id="english" class="dropdown-item" href="#" locale="en">English</a>\n        <a id='.concat(n.value,' class="dropdown-item" href="#" locale="').concat(n.id,'">').concat(n.text,"</a>"))},calculateTime:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Math.floor(e/o),a=e%o,i=Math.floor(a/r),s=Math.round(a%r);return t?{hours:n,minutes:i,seconds:s}:{hours:n,minutes:i}},formatTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a="";return e>0&&(a+="".concat(e," hrs ")),t>0&&(a+="".concat(t," min ")),0===e&&0===t&&n>0&&(a+="".concat(n," sec ")),a.substr(0,a.length-1)},getLocaleString:function(){return new Promise(function(e,t){var n,a=null!==(n=localStorage.getItem("i18n"))&&void 0!==n?n:"en";l("/get-locale-strings/".concat(a)).then(function(t){localStorage.setItem("localeString",JSON.stringify(t)),e(t)}).catch(function(e){return t(e)})})},performAPIRequest:l,showElement:function(e){e.removeClass("d-none")},hideElement:function(e){e.addClass("d-none")},setFooterPosition:function(){var e=$("#page-content").outerHeight();$("body").outerHeight()<=e+$("nav").outerHeight()+$("footer").outerHeight()&&$("footer").removeClass("fixed-bottom").addClass("bottom")},reportSentenceOrRecording:function(e){return new Promise(function(t,n){try{s("/report",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){t(e)})}catch(e){n(e)}})},getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""},setCookie:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var o="expires="+a.toGMTString();document.cookie=e+"="+t+";"+o+";path=/"},getJson:function(e){return new Promise(function(t){$.getJSON(e,function(e){t(e)})})}}},{"./constants":1,"./fetch":4}],6:[function(e,t,n){"use strict";var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();t.exports=n=a.fetch,a.fetch&&(n.default=a.fetch.bind(a)),n.Headers=a.Headers,n.Request=a.Request,n.Response=a.Response},{}]},{},[3]);