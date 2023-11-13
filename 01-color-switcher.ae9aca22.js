const t=document.querySelector("body"),e=t.querySelector("[data-start]"),r=t.querySelector("[data-stop]");e.addEventListener("click",(()=>a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))),r.addEventListener("click",(()=>clearInterval(a)));let a=0;
//# sourceMappingURL=01-color-switcher.ae9aca22.js.map
