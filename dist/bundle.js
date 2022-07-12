(()=>{"use strict";var e={459:(e,t,n)=>{var o=n(933),r=n.n(o),c=n(476);n.n(c)()(r()).push([e.id,":root{\n    /* Colors */\n    --bg-light: #FFF;\n    --bg-dark: #232323;\n    --main-text-color: #20303c;\n    --sec-text-color: #37444f;\n    --sec-rbg-text: 55, 68, 79;\n    --white-color: #FFF;\n    --blue-color: #7CACDA;\n    --blue-color-active: #37AAFF;\n    --bluergb-color-active: 55, 170, 255;\n    --btn-bef-bg: 23, 238 ,205;\n    --btn-aft-bg: 35, 255, 255;\n\n    /* sizes */\n    --container-width: 90%;\n    --block-content: 40%;\n\n    /* font-sizes */\n    --fs: 17px;\n    --fs-1: 2.5rem;   \n    --fs-2: 2rem; \n    --fs-3: 1.7rem;  \n    --fs-3-5: 1.5rem;  \n    --fs-4: 1.3rem;\n    --fs-5: 1rem;\n    --fs-6: .9rem;\n    --fs-num: 5rem;\n\n\n    /* is-transition gradient */\n\n    --transition-gradient-start: #00F4D8;\n    --transition-gradient-end: #0575E6;\n}\n\n@media screen and (max-width: 1440px) {\n    :root{\n        --block-content: 60%;\n    }\n}\n@media screen and (max-width: 1024px) {\n    :root{\n        --block-content: 90%;\n    }\n}\n@media screen and (max-width: 768px) {\n    :root{\n        --fs-1: 2rem;   \n        --fs-2: 1.5rem; \n        --fs-num: 3.5rem;\n    }\n}\n@media screen and (max-width: 662px) {\n    :root{\n        --fs-1: 2rem;   \n        --fs-2: 1.5rem; \n        --fs-3: 1.3rem;  \n        --fs-4: 1.1rem;\n    }\n}\n@media screen and (max-width: 495px) {\n    :root{\n        --fs-1: 1.7rem;   \n        --fs-2: 1.3rem; \n        --fs-3: 1.1rem;  \n        --fs-3-5: 1rem;  \n        --fs-4: 1rem;\n        --fs-num: 2.5rem;\n    }\n}\n@media screen and (max-width: 425px) {\n    :root{\n        --block-content: 100%;\n    }\n}",""])},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var m=[].concat(e[l]);o&&a[m[0]]||(void 0!==c&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=c),n&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=n):m[2]=n),r&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=r):m[4]="".concat(r)),t.push(m))}},t}},933:e=>{e.exports=function(e){return e[1]}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{n(459);const e=(e,t,n=!0)=>{const o="show-hide",r="d-none";return n?setTimeout((()=>{e.classList.add(r),t.classList.remove(o,r)}),500):(e.classList.add(r),t.classList.remove(o)),!0},t="is-transition--active",o=document.querySelector(".is-transition"),r=(e,n)=>{const r="d-none";o.classList.add(t),e&&e.classList.add(r),n&&n.classList.remove(r)},c=()=>{setTimeout((()=>o.classList.remove(t)),600)},a=e=>{"1234567890".includes(e.key)&&e.preventDefault()};let s=0;const i=(t,n,o)=>{r(),s+=1,e(t,n,!0),console.log("Func Transition Block "+s+" - count",t,n,o),o?.push({prev:t,next:n}),c()},l=(e,t,n)=>{e.classList.add(t),setTimeout((()=>{e.classList.remove(t)}),n)},m=(e,t,n,o,r)=>{const c=document.createElement(t);c.classList.add(n),c.textContent=o,e.append(c),setTimeout((()=>{e.removeChild(c)}),r)},u=(e,t)=>Math.floor(e+Math.random()*(t+1-e)),d=(e,t,n)=>{const{newNum_1:o,newNum_2:r,newOperator:c}=((e,t,n)=>{const o=n.length-1,r=n[u(0,o)];let c=u(e,t),a=u(e,t);function s(){const e=a;a=c,c=e}return"-"===r&&a>c&&s(),"/"===r&&(a>c&&s(),c%a!=0&&(c<=10?c*=a:(a=u(e,c/(c<=100?2:7)),c-=c%a))),{newNum_1:c,newNum_2:a,newOperator:r}})(e,t,n);return{num_1:o,num_2:r,operator:c}},g=(e,t)=>{const n=JSON.parse(localStorage.getItem(e));return n?!n.find((e=>e.name===t.name))&&(n.push(t),localStorage.setItem(e,JSON.stringify(n)),!0):(localStorage.setItem(e,JSON.stringify([t])),!0)},_=e=>JSON.parse(localStorage.getItem(e)),v=(e,t)=>{const n=_(e)?.map((e=>e.id==t.id?t:e));localStorage.setItem(e,JSON.stringify(n))},p=(e,t)=>{const n=JSON.parse(localStorage.getItem(e))?.map((e=>e.id==t.id?t:e));localStorage.setItem(e,JSON.stringify(n))},k=(e,t,n)=>"+"===n?e+t:"-"===n?e-t:"*"===n?e*t:"/"===n?e/t:void 0,b=(e,t)=>+e==+t,y=e=>{m(e,"span","game-block__score-sum--inc","+1",700)},S=e=>{m(e,"span","game-block__score-sum--dec","-1",700)},f=(e,t,n)=>{const o=document.createElement("li"),r=document.createElement("span"),c=document.createElement("span");if(o.classList.add("leaderboard__item"),o.dataset.userName=e.name,r.classList.add("leaderboard__name"),c.classList.add("leaderboard__score"),r.textContent=e.name,n==t.practice&&e.scores.practice>0)c.textContent=e.scores.practice;else{if(!(n==t.timeAttack&&e.scores.timeAttack>0))return!1;c.textContent=e.scores.timeAttack}return o.append(r,c),o},h=e=>{const t=document.querySelector(".main-menu"),n=document.querySelector("#leaderboard-select"),o=document.querySelector(".leaderboard__btn-prev"),r=document.querySelector(".leaderboard__list--practice"),c=document.querySelector(".leaderboard"),a=document.querySelector(".leaderboard__list--timeAttack"),s=r.children,l=a.children;i(e,c);const m={practice:"practice",timeAttack:"timeAttack"};n.addEventListener("change",(()=>{n.value==m.practice&&(r.classList.remove("d-none"),a.classList.add("d-none")),n.value==m.timeAttack&&(r.classList.add("d-none"),a.classList.remove("d-none"))}));const u=_("mathQuizUsers"),d=u.map((e=>e)),g=u.map((e=>e));function v(e,t,n,o){e?.forEach((e=>{if(t.length)Array.from(t).forEach((t=>{if(console.log(t),t.dataset.userName==e.name);else{const t=f(e,m,o);t&&n.append(t)}}));else{const t=f(e,m,o);t&&n.append(t)}}))}d?.sort(((e,t)=>e.scores.practice<t.scores.practice?1:-1)),g?.sort(((e,t)=>e.scores.timeAttack<t.scores.timeAttack?1:-1)),v(d,s,r,m.practice),v(g,l,a,m.timeAttack),o.addEventListener("click",(()=>{i(c,t)}))},q=(e,t,n,o)=>{const r=document.querySelector(".game-over__incorrect-score > span"),c=document.querySelector(".game-over__correct-score > span"),a=document.querySelector(".game-over__btn--leaderboard"),s=document.querySelector(".game-block__game-over"),l=document.querySelector(".game-over__score"),m=document.querySelector(".play-again"),u=document.querySelector(".game-block"),d=document.querySelector(".game-block__score"),g=document.querySelector(".main-menu"),k=_("mathQuizUsers").find((t=>t.id==e.id));l.textContent=t.total,c.textContent=t.correct,r.textContent=t.incorrect,d.textContent=0,s.classList.add("game-over--show"),"Practice"==o&&e.scores.practice<t.total&&(e.scores.practice=t.total,Object.assign(k.scores,e.scores),v("mathQuizUsers",e),p("mathQuizCurrentUser",k)),"Time Attack"==o&&e.scores.timeAttack<t.total&&(e.scores.timeAttack=t.total,Object.assign(k.scores,e.scores),v("mathQuizUsers",e),p("mathQuizCurrentUser",k)),m.addEventListener("click",(()=>{i(u,g),s.classList.remove("game-over--show"),x(e.id)})),a.addEventListener("click",(()=>{h(u),s.classList.remove("game-over--show")}))},L=(e,t)=>setInterval(e,t),w=()=>{const e=document.querySelector(".setings-block"),t=document.querySelector(".setings-block__close-btn"),n=document.querySelector(".setings-block__avatars"),o=document.querySelector(".setings-block__sign-out"),r=[{url:"./assets/images/ava/bob_ava.jpg",name:"Bob",price:100},{url:"./assets/images/ava/bart_ava.jpg",name:"Bart",price:100},{url:"./assets/images/ava/dazai_ava.jpg",name:"Dazai",price:150},{url:"./assets/images/ava/luffy_ava.jpg",name:"Dazai",price:150},{url:"./assets/images/ava/pepe_ava.jpg",name:"Pepe",price:0},{url:"./assets/images/ava/rik_ava.jpg",name:"Pepe",price:120},{url:"./assets/images/ava/saitama_ava.jpg",name:"Pepe",price:200}];r.sort(((e,t)=>e.price>t.price?1:-1)),n.children.length||r.forEach((e=>{const t=(e=>{const t=document.createElement("div"),n=document.createElement("img"),o=document.createElement("span");return t.classList.add("setings-block__ava-block"),o.classList.add("setings-block__ava-price"),n.src=e.url,o.textContent=e.price+"$",t.append(n,o),t})(e);n.append(t)})),e.classList.add("setings-block--active"),t.addEventListener("click",(()=>{e.classList.remove("setings-block--active")})),o.addEventListener("click",(()=>{localStorage.removeItem("mathQuizCurrentUser"),window.location.reload()}))},x=e=>{const t=document.querySelector(".main-menu"),n=document.querySelector(".game-block"),o=[],r=document.querySelector(".btn-prev-block"),c=document.querySelector(".main-menu__name"),a=document.querySelector(".main-menu__balance-val"),s=document.querySelector(".main-menu__ava-img"),m=document.querySelector(".main-menu__btn-start"),u=document.querySelector(".main-menu__leaderboard");c.addEventListener("click",w),s.addEventListener("click",w),r.classList.add("d-none");const g=_("mathQuizUsers").find((t=>t.id==e));c.textContent=g.name,a.textContent=g.balance,s.src=g.ava,m.addEventListener("click",(()=>{const e=document.querySelector(".main-menu__modes input:checked");if("game-mode-practcie"==e.id&&((e,t,n,o)=>{const r=document.querySelector(".game-block__field"),c=document.querySelector(".game-block__user-name"),a=document.querySelector(".game-block__mode"),s=document.querySelector(".game-block__answer"),m=document.querySelector(".game-block__num-1"),u=document.querySelector(".game-block__num-2"),g=document.querySelector(".game-block__operator"),_=document.querySelector(".game-block__score-sum"),v=document.querySelector(".game-block__score"),p=document.querySelector(".game-block__timer"),f=document.querySelector(".game-block__stop-btn");p.classList.add("d-none");const h=["/"],L="Practice",w={total:0,correct:0,incorrect:0};let x={num_1:0,num_2:0,operator:""};c.textContent=e.name,a.textContent=L,l(n,"game-block--stub",3e3),i(t,n,o);const E=()=>{const e=d(1,1,h);x=e,(e=>{m.textContent=e.num_1,u.textContent=e.num_2,g.textContent=e.operator})(x)};function C(e){(e=>{s.focus(),s.value.length>5&&e.preventDefault()})(e),"Enter"===e.key&&s.value.length&&"true"==r.dataset.showHide&&(()=>{const e=k(x.num_1,x.num_2,x.operator),t=+s.value;r.dataset.showHide=!1,r.classList.replace("game-block__field--show","game-block__field--lieve"),setTimeout((()=>{r.classList.remove("game-block__field--lieve")}),300),s.value="",E(),b(e,t)?(y(_),w.total+=1,w.correct+=1):(w.incorrect+=1,w.total>0&&(S(_),l(_,"game-block__score-sum--twitch",600),w.total-=1)),v.textContent=w.total,setTimeout((()=>r.classList.add("game-block__field--show")),330),setTimeout((()=>r.dataset.showHide="true"),630)})()}E(),window.addEventListener("keypress",C),f.addEventListener("click",(function(){window.removeEventListener("keypress",C),q(e,w,0,L)}))})(g,t,n,o),"game-mode-time-atack"==e.id){const e="00:30"==(r=document.querySelector(".setings-block__sel-time input:checked + label").textContent)?{min:0,sec:30}:"01:00"==r?{min:1,sec:0}:"01:30"==r?{min:1,sec:30}:"02:00"==r?{min:2,sec:0}:void 0;((e,t,n,o,r)=>{document.querySelector(".game-block__field");const c=document.querySelector(".game-block__user-name"),a=document.querySelector(".game-block__mode"),s=document.querySelector(".game-block__answer"),m=document.querySelector(".game-block__num-1"),u=document.querySelector(".game-block__num-2"),g=document.querySelector(".game-block__operator"),_=document.querySelector(".game-block__score-sum"),v=document.querySelector(".game-block__score"),p=document.querySelector(".game-block__timer"),f=document.querySelector(".game-block__time-progress"),h=document.querySelector(".game-block__stop-btn"),w=document.querySelector(".game-block__time-min"),x=document.querySelector(".game-block__time-sec"),E=["/","*","+","-"];let C;const A=60*r.min+r.sec;w.textContent=String(r.min).padStart(2,"0"),x.textContent=String(r.sec).padStart(2,"0");const z="Time Attack";p.classList.remove("d-none");const U={total:0,correct:0,incorrect:0};let T,Q={num_1:0,num_2:0,operator:""};c.textContent=e.name,a.textContent=z,l(n,"game-block--stub",3e3),i(t,n,o);const j=()=>{const e=d(1,20,E);Q=e,(e=>{m.textContent=e.num_1,u.textContent=e.num_2,g.textContent=e.operator})(Q)};j();const N=()=>{const e=k(Q.num_1,Q.num_2,Q.operator),t=+s.value;s.value="",j(),b(e,t)?(y(_),U.total+=1,U.correct+=1):(U.incorrect+=1,U.total>0&&(S(_),l(_,"game-block__score-sum--twitch",600),U.total-=1)),v.textContent=U.total};function O(e){(e=>{s.focus(),s.value.length>5&&e.preventDefault()})(e),"Enter"===e.key&&s.value.length&&(f.classList.remove("game-block__time-progress--active"),clearInterval(T),N(),setTimeout((()=>{f.classList.add("game-block__time-progress--active"),T=L(N,3e3)}),50))}function I(){clearInterval(T),clearInterval(C),window.removeEventListener("keypress",O),h.removeEventListener("click",I),f.classList.remove("game-block__time-progress--active"),q(e,U,0,z)}setTimeout((()=>{var e,t,n;f.classList.add("game-block__time-progress--active"),T=L(N,3e3),window.addEventListener("keypress",O),h.addEventListener("click",I),setTimeout(I,1e3*A),e=w,t=x,n=r,C=setInterval((()=>{let o=60*n.min+n.sec;o-=1,o>59?(n.min=Math.floor(o/60),n.sec=Math.floor(o-60*n.min)):(n.min=0,n.sec=o),e.textContent=String(n.min).padStart(2,"0"),t.textContent=String(n.sec).padStart(2,"0")}),1e3)}),3e3)})(g,t,n,o,e)}var r;"game-mode-competition"==e.id&&console.log(e.id)})),u.addEventListener("click",(()=>{h(t)})),(()=>{const e=document.querySelector(".main-menu__rules"),t=document.querySelector(".main-menu__rules-btn"),n=()=>{e.classList.remove("main-menu__rules--active"),window.removeEventListener("click",n),console.log("remove active class")};e.addEventListener("click",(e=>{e.stopPropagation()})),t.addEventListener("click",(()=>{e.classList.add("main-menu__rules--active"),window.addEventListener("click",n)}))})()};(()=>{const t=[],n=document.querySelectorAll(".login-block"),o=document.querySelector(".start-window__question-login"),s=document.querySelector(".start-window"),l=document.querySelector(".btn-prev-block");((e,t,n)=>{const o=document.querySelector(".btn-start"),r=document.querySelector(".start-window__btn-block"),c=document.querySelector(".main-menu"),a=document.querySelector(".start-window");o?.addEventListener("click",(o=>{const s=_("mathQuizCurrentUser");s?(x(s[0].id),i(a,c,t)):(i(r,e,t),setTimeout((()=>n.classList.remove("d-none")),500))}))})(o,t,l),((e,t,n)=>{const o=document.querySelectorAll(".sign-btn"),r="sign-quest",c="sign-in",s="sign-up";Array.from(o).forEach((o=>{o.addEventListener("click",(()=>{Array.from(e)?.forEach((e=>o.dataset.signMethod==r&&e.classList.contains(r)?(i(t,e,n),((e,t,n)=>{const o=document.querySelector(".sign-quest .sign-name"),r=document.querySelector(".sign-quest .login-block__btn"),c=document.querySelector(".main-menu");o?.addEventListener("keypress",a),r?.addEventListener("click",(e=>{if(e.preventDefault(),o.value.length>1&&o.value.length<25){const e={userBool:!0,name:o.value,userType:"quset",balance:0,ava:"./assets/images/ava/pepe_ava.jpg",id:o.value+Date.now(),scores:{practice:0,timeAttack:0}};if(g("mathQuizUsers",e))return i(t,c,n),g("mathQuizCurrentUser",e),x(e.id);console.log("this name is taken!!!")}else console.log("Name no valid")}))})(0,e,n)):o.dataset.signMethod==c&&e.classList.contains(c)?(i(t,e,n),((e,t,n)=>{const o=document.querySelector(".sign-in .sign-name"),r=document.querySelector(".sign-in .sign-codeword"),c=document.querySelector(".sign-in .login-block__btn"),s=document.querySelector(".main-menu");o?.addEventListener("keypress",a),c?.addEventListener("click",(e=>{if(e.preventDefault(),o.value.length>0&&r.value.length>0){const e=_("mathQuizUsers")?.find((e=>e.name===o.value&&e.codeword===r.value));if(e)return i(t,s,n),g("mathQuizCurrentUser",e),x(e.id);console.log("User Undefined")}}))})(0,e,n)):o.dataset.signMethod==s&&e.classList.contains(s)?(i(t,e,n),((e,t,n)=>{const o=document.querySelector(".sign-up .sign-name"),r=document.querySelector(".sign-up .sign-codeword"),c=document.querySelector(".sign-up .login-block__btn"),s=document.querySelector(".main-menu");o?.addEventListener("keypress",a),c?.addEventListener("click",(e=>{if(e.preventDefault(),o.value.length>0&&r.value.length>0&&o.value.length<25){const e={userBool:!0,name:o.value,codeword:r.value,userType:"user",balance:50,id:o.value+Date.now(),ava:"./assets/images/ava/pepe_ava.jpg",scores:{practice:0,timeAttack:0}};if(g("mathQuizUsers",e))return i(t,s,n),g("mathQuizCurrentUser",e),x(e.id);console.log("this name is taken!!!")}else console.log("Form no valid!!!")}))})(0,e,n)):void 0))}))}))})(n,s,t),((t,n,o=!0)=>{t?.addEventListener("click",(()=>{n.length<2&&o&&t.classList.add("d-none");const a=n.pop();r(),e(a.next,a.prev,!0),c()}))})(l,t)})()})()})();