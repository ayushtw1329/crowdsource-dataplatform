!function e(t,a,n){function o(i,l){if(!a[i]){if(!t[i]){var u="function"==typeof require&&require;if(!l&&u)return u(i,!0);if(r)return r(i,!0);throw new Error("Cannot find module '"+i+"'")}var s=a[i]={exports:{}};t[i][0].call(s.exports,function(e){var a=t[i][1][e];return o(a||e)},s,s.exports,e,t,a,n)}return a[i].exports}for(var r="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,a){"use strict";t.exports={DEFAULT_CON_LANGUAGE:"Hindi",AUDIO_DURATION:6,SIXTY:60,HOUR_IN_SECONDS:3600,ALL_LANGUAGES:[{value:"Assamese",id:"as",text:"অসমীয়া",hasLocaleText:!0},{value:"Bengali",id:"bn",text:"বাংলা",hasLocaleText:!0},{value:"English",id:"en",text:"English",hasLocaleText:!0},{value:"Gujarati",id:"gu",text:"ગુજરાતી",hasLocaleText:!0},{value:"Hindi",id:"hi",text:"हिंदी",hasLocaleText:!0},{value:"Kannada",id:"kn",text:"ಕನ್ನಡ",hasLocaleText:!0},{value:"Malayalam",id:"ml",text:"മലയാളം",hasLocaleText:!0},{value:"Marathi",id:"mr",text:"मराठी",hasLocaleText:!0},{value:"Odia",id:"or",text:"ଓଡିଆ",hasLocaleText:!0},{value:"Punjabi",id:"pa",text:"ਪੰਜਾਬੀ",hasLocaleText:!0},{value:"Tamil",id:"ta",text:"தமிழ்",hasLocaleText:!0},{value:"Telugu",id:"te",text:"తెలుగు",hasLocaleText:!0}],TOP_LANGUAGES_BY_HOURS:"topLanguagesByHours",TOP_LANGUAGES_BY_SPEAKERS:"topLanguagesBySpeakers",AGGREGATED_DATA_BY_LANGUAGE:"aggregateDataCountByLanguage",LOCALE_STRINGS:"localeString",CONTRIBUTION_LANGUAGE:"contributionLanguage"}},{}],2:[function(e,t,a){"use strict";var n=e("./constants"),o=n.DEFAULT_CON_LANGUAGE,r=n.CONTRIBUTION_LANGUAGE;function i(e,t,a){var n=e.val().trim();u(n)?(e.addClass("is-invalid"),t.removeClass("d-none")):(e.removeClass("is-invalid"),t.addClass("d-none")),a.trigger("change")}function l(){var e=document.getElementById("age"),t=document.getElementById("mother-tongue"),a=document.getElementById("username"),n=document.querySelector('input[name = "gender"]:checked');n&&(n.checked=!1),e.selectedIndex=0,t.selectedIndex=0,a.value=""}var u=function(e){return/^[6-9]\d{9}$/.test(e)||/^\S+@\S+[\.][0-9a-z]+$/.test(e)};function s(e){e.val().length>11?(e.tooltip("enable"),e.tooltip("show")):(e.tooltip("disable"),e.tooltip("hide"))}var c=function(e,t){u(e)?t.attr("data-original-title","Please validate any error message before proceeding"):t.attr("data-original-title","Please agree to the Terms and Conditions before proceeding")};t.exports={testUserName:u,validateUserName:i,setSpeakerDetails:function(e,t,a,n){var o=localStorage.getItem(e);if(o){var r=JSON.parse(o),l=document.querySelector('input[name = "gender"][value="'+r.gender+'"]');l&&(l.checked=!0,l.previous=!0),t.value=r.age,a.value=r.motherTongue,n.val(r.userName?r.userName.trim().substring(0,12):""),i(n,n.next(),$("#tnc"))}},resetSpeakerDetails:l,setUserNameTooltip:s,setStartRecordBtnToolTipContent:c,setTNCOnChange:function(e,t){var a=$("#tnc"),n=$("#proceed-box");a.change(function(){var a=e.val().trim();this.checked&&!u(a)?(n.removeAttr("disabled").removeClass("point-none"),t.tooltip("disable")):(c(a,t),n.prop("disabled","true").addClass("point-none"),t.tooltip("enable"))})},setUserModalOnShown:function(e){$("#userModal").on("shown.bs.modal",function(){$("#resetBtn").on("click",l),e.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto",trigger:"focus"}),s(e)})},setUserNameOnInputFocus:function(){var e=$("#username"),t=e.next(),a=$("#tnc");e.on("input focus",function(){i(e,t,a),s(e)})},setGenderRadioButtonOnClick:function(){document.querySelectorAll('input[name = "gender"]').forEach(function(e){e.addEventListener("click",function(e){e.target.previous&&(e.target.checked=!1),e.target.previous=e.target.checked})})},setStartRecordingBtnOnClick:function(e){var t=$("#proceed-box"),a=$("#tnc"),n=document.querySelectorAll('input[name = "gender"]'),i=$("#username"),l=document.getElementById("age"),s=document.getElementById("mother-tongue");t.on("click",function(){if(a.prop("checked")){var t=Array.from(n).filter(function(e){return e.checked}),c=t.length?t[0].value:"",d=i.val().trim().substring(0,12);if("English"===e&&(e=o),u(d))return;var g={gender:c,age:l.value,motherTongue:s.value,userName:d,language:e||localStorage.getItem(r)};localStorage.setItem("speakerDetails",JSON.stringify(g)),location.href="/record"}})}}},{"./constants":1}]},{},[2]);