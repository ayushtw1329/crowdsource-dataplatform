const currentIndexKey="currentIndex",speakerDetailsKey="speakerDetails",totalSentence=10,currentIndexInStorage=Number(localStorage.getItem("currentIndex")),localSpeakerData=localStorage.getItem("speakerDetails"),localSpeakerDataParsed=JSON.parse(localSpeakerData),$footer=$("footer");if(localSpeakerDataParsed&&localSpeakerDataParsed.userName)if(currentIndexInStorage<10)location.href="/#start-record";else{const e=576,t=1200,r=2e3,n=36e6,o=$("#nav-user");o.find("#nav-username").text(localSpeakerDataParsed.userName),o.removeClass("d-none");const a=$("#total-progress"),s="count",i="skipCount",l=Number(localStorage.getItem(i)),c=Number(localStorage.getItem(s)),d=$("#graphbar"),g=$("#progress-percent-wrapper"),h=g.find("#progress-percent"),u=$("#user-contribution"),p=$("#hour-value"),m="speakersData";(e=>{const t=6*(c+e-l),r=Math.floor(t/60),n=t%60,o=(r>0?`${r} minute `:"")+(n>0?`${n} seconds `:r>0?"":"0 second");u.text(o)})(currentIndexInStorage),(e=>{const t=6*(c+e-l),r=t/1800*100;h.text(Number(r.toFixed(1)));const n=t/1800*42;d.height(n+"em"),r>=100&&(h.parent().find(".small").addClass("d-none"),g.addClass("mb-3"),$("#do-more").addClass("d-none"))})(currentIndexInStorage);const f=()=>{let n=0,o=0,a=11,s=0;return innerWidth<e?(o=70.5-1.333*(n=e-innerWidth)/100,s=75.2-.4*n/100):innerWidth<t?(o=70.5-.5*(n=t-innerWidth)/100,s=75.75-.25*n/100):innerWidth<r?(o=71.5-.1*(n=r-innerWidth)/100,a=12-.1*n/100,s=innerWidth<1500?75.2:75.5-.003*n/100):(o=71.5+.1*(n=innerWidth-r)/100,a=12,s=75.8),{totalProgressBarWidth:o,totalProgressBarBulbWidth:a,totalProgressBarBulbLeft:s}},b=e=>{const t=f(),r=e/n*100;r>=100?(a.next().css({width:t.totalProgressBarBulbWidth+"%",left:t.totalProgressBarBulbLeft+"%"}),a.width(100*t.totalProgressBarWidth/100+"%"),$("#total-progress").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",()=>{let e=0,t=setInterval(()=>{e>=100&&clearInterval(t),a.next().css("background",`linear-gradient(to right, #007bff 0%, #007bff ${e}%, transparent 0%)`),e+=5},30)})):a.width(r*t.totalProgressBarWidth/100+"%")},x=e=>{try{const t=6*Number(e.find(e=>1===e.index).count),r=Math.floor(t/3600),n=t%3600,o=Math.floor(n/60),a=n%60;p.text(`${r}h ${o}m ${a}s`),b(t)}catch(e){console.log(e)}};fetch(`/getDetails/${localSpeakerDataParsed.language}`).then(e=>{if(e.ok)return e.json();throw Error(e.statusText||"HTTP error")}).then(e=>{console.log(e),localStorage.setItem(m,JSON.stringify(e)),x(e)}).catch(e=>{console.log("error is here"),console.log(e)}).then(e=>{p.next().addClass("d-none")});const S=()=>{const e=$footer.outerHeight(),t=g.css("bottom");Number(t.substring(0,t.length-2))&&g.css("bottom",e+"px")},I=()=>{const e=(screen.orientation||{}).type||screen.mozOrientation||screen.msOrientation,t=innerWidth,r=innerHeight;if(("landscape-primary"===e||"landscape-secondary"===e)&&r<600&&r<t)return!0;if(void 0===e){const e=(screen.orientation||{}).angle;return 90===e||-90===e}return!1},k=()=>{const e=$("#progress-percent-wrapper"),t=e.prev(),r=$("#graphcontainer");if(I()||innerWidth<600){e.removeClass("position-fixed text-center").addClass("position-relative text-right").css({right:0,bottom:0}),r.removeClass("mx-auto").addClass("ml-auto mr-3");const n=getComputedStyle(document.documentElement).fontSize;r.find("#graphforeground").width();r.next().find("span").not("#progress-percent").css({marginRight:Number(n.substring(0,n.length-2))}),t.removeClass("mb-6")}else S()};try{screen.orientation&&screen.orientation.onchange&&(screen.orientation.onchange=k),k()}catch(e){console.log(e)}}else location.href="/#start-record";