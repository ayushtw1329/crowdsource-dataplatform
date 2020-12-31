function updateLanguageInButton(e){document.getElementById("start-record").innerText=`START RECORDING IN ${e.toUpperCase()}`}function updateLanguage(e){const t=$("#speaker-data"),a=t.find("#loader1,#loader2"),n=t.find("#speakers-wrapper"),r=t.find("#speaker-value"),o=t.find("#hours-wrapper"),s=t.find("#hour-value");fetch(`/getDetails/${e}`).then(e=>{if(e.ok)return e.json();throw Error(e.statusText||"HTTP error")}).then(t=>{try{a.addClass("d-none");const d=6*t.find(e=>1===e.index).count,i=Math.floor(d/3600),l=d%3600,c=Math.floor(l/60),u=l%60;document.getElementById("language_button").innerText=e,updateLanguageInButton(e),s.text(`${i}h ${c}m ${u}s`),r.text(t.find(e=>0===e.index).count),o.removeClass("d-none"),n.removeClass("d-none"),localStorage.setItem("speakersData",JSON.stringify(t))}catch(t){console.log(t)}}).catch(e=>{console.log(e)})}function enableRecording(){$("#start_recording").removeAttr("disabled")}function showUserDetailForm(){$("#userDetailForm").removeClass("d-none")}$(document).ready(function(){const e=$("#start-record"),t=e.parent(),a=document.querySelectorAll('input[name = "gender"]'),n=document.getElementById("age"),r=document.getElementById("language"),o=document.getElementById("mother-tongue"),s=$("#username"),d=s.next(),i=$("#tnc"),l=/^[6-9]\d{9}$/,c=/^\S+@\S+[\.][0-9a-z]+$/,u=$("#speaker-data"),g=u.find("#loader1,#loader2"),m=u.find("#speakers-wrapper"),p=u.find("#speaker-value"),h=u.find("#hours-wrapper"),f=u.find("#hour-value"),v=e=>l.test(e)||c.test(e),k=()=>{const e=s.val().trim();v(e)?(s.addClass("is-invalid"),d.removeClass("d-none")):(s.removeClass("is-invalid"),d.addClass("d-none")),i.trigger("change")};s.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto",trigger:"focus"}),i.prop("checked",!1),t.tooltip({container:"body",placement:screen.availWidth>500?"right":"auto"});const y=localStorage.getItem("speakerDetails");if(y){const e=JSON.parse(y),t=document.querySelector('input[name = "gender"][value="'+e.gender+'"]');t&&(t.checked=!0,t.previous=!0),n.value=e.age,o.value=e.motherTongue,s.val(e.userName?e.userName.trim().substring(0,12):""),k()}a.forEach(e=>{e.addEventListener("click",e=>{e.target.previous&&(e.target.checked=!1),e.target.previous=e.target.checked})});const C=e=>{v(e)?t.attr("data-original-title","Please validate any error message before proceeding"):t.attr("data-original-title","Please agree to the Terms and Conditions before proceeding")};C(s.val().trim()),i.change(function(){const t=s.val().trim();this.checked&&!v(t)?e.removeAttr("disabled").removeClass("point-none"):(C(t),e.prop("disabled","true").addClass("point-none"))}),s.on("input focus",k),e.on("click",e=>{if(i.prop("checked")){const e=Array.from(a).filter(e=>e.checked),t=e.length?e[0].value:"",d=s.val().trim().substring(0,12);if(v(d))return;const i={gender:t,age:n.value,motherTongue:o.value,userName:d,language:r.value};localStorage.setItem("speakerDetails",JSON.stringify(i)),location.href="/record"}}),updateLanguageInButton("Odia"),fetch("/getDetails/Odia").then(e=>{if(e.ok)return e.json();throw Error(e.statusText||"HTTP error")}).then(e=>{try{g.addClass("d-none");const t=6*e.find(e=>1===e.index).count,a=Math.floor(t/3600),n=t%3600,r=Math.floor(n/60),o=n%60;f.text(`${a}h ${r}m ${o}s`),p.text(e.find(e=>0===e.index).count),h.removeClass("d-none"),m.removeClass("d-none"),localStorage.setItem("speakersData",JSON.stringify(e))}catch(e){console.log(e)}}).catch(e=>{console.log(e)})});