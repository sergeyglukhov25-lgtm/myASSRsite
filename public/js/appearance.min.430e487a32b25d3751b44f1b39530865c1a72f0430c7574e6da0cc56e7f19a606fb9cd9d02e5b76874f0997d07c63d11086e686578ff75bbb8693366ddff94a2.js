const sitePreference=document.documentElement.getAttribute("data-default-appearance"),userPreference=localStorage.getItem("appearance");(sitePreference==="dark"&&userPreference===null||userPreference==="dark")&&document.documentElement.classList.add("dark"),document.documentElement.getAttribute("data-auto-appearance")==="true"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&userPreference!=="light"&&document.documentElement.classList.add("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}));var updateMeta,updateLogo,getTargetAppearance,updateMermaidTheme=()=>{if(typeof mermaid!="undefined"){const e=document.documentElement.classList.contains("dark"),t=document.querySelectorAll("pre.mermaid");t.forEach(e=>{e.getAttribute("data-processed")?(e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-graph")):e.setAttribute("data-graph",e.textContent)}),e?(initMermaidDark(),mermaid.run()):(initMermaidLight(),mermaid.run())}};window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("appearance-switcher"),n=document.getElementById("appearance-switcher-mobile");updateMeta(),this.updateLogo?.(getTargetAppearance()),updateMermaidTheme(),t&&(t.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),updateMermaidTheme(),this.updateLogo?.(e)}),t.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")})),n&&(n.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),updateMermaidTheme(),this.updateLogo?.(e)}),n.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")}))}),updateMeta=()=>{var e=document.querySelector("body"),t=getComputedStyle(e);document.querySelector('meta[name="theme-color"]').setAttribute("content",t.backgroundColor)},updateLogo=e=>{var t=document.querySelectorAll("img.logo"),n=document.querySelectorAll("span.logo");targetLogoPath=e=="light"?"/logo-dark.svg":"/logo.svg";for(const e of t)e.setAttribute("src",targetLogoPath);targetContent=e=="light"?`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="479px" height="479px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 479 479"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <defs>
  <style type="text/css">
   <![CDATA[
    .fil4 {fill:none}
    .fil3 {fill:#EBECEC}
    .fil2 {fill:#35388A}
    .fil1 {fill:#D62718}
    .fil0 {fill:#EBECEC;fill-opacity:0.501961}
   ]]>
  </style>
 </defs>
 <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="fil0" d="M239 24c119,0 216,97 216,216 0,119 -97,216 -216,216 -119,0 -216,-97 -216,-216 0,-119 97,-216 216,-216z"/>
  <path class="fil1" d="M113 344c3,0 4,-4 5,-7 10,-17 14,-18 23,-31 2,-2 3,-3 5,-5 19,-20 23,-23 42,-40l21 -17c19,-15 69,-53 87,-63l-58 -99c-2,-4 -7,-10 -8,-14l-68 117c-11,20 -22,39 -34,59 -6,10 -31,52 -33,59 4,-2 5,-4 9,-8l33 -29c3,-2 5,-4 9,-7 15,-11 77,-53 93,-58 -27,17 -53,38 -77,59 -2,2 -3,2 -5,4l-15 14c-12,10 -65,63 -68,67l38 0z"/>
  <path class="fil2" d="M358 290c-8,-12 -36,-57 -41,-68 -4,-8 0,-11 4,-15l64 -65c-5,3 -9,6 -14,9l-41 30c-11,9 -29,22 -39,32l-12 11c-4,4 -8,7 -12,12 -14,16 -18,19 -32,38 -14,21 -24,46 -13,70l171 0 -33 -55z"/>
  <path class="fil3" d="M269 287c13,-15 31,-20 40,-12 9,8 6,26 -7,41 -13,15 -31,20 -40,12 -9,-8 -6,-26 7,-41z"/>
  <g id="_2533157962688">
   <path class="fil3" d="M305 362c3,-3 25,-32 34,-41 0,0 0,0 0,-1 0,0 0,0 0,0 2,-2 3,-3 4,-2 2,7 -7,23 -11,30 2,-5 5,-12 6,-18 -7,14 -20,21 -34,31z"/>
  </g>
  <path class="fil4" d="M305 362c12,-10 30,-25 35,-40 3,-10 2,9 -5,22 0,0 -2,5 -2,5"/>
 </g>
</svg>
`:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479 479" width="100%" height="100%">
  <defs>
    <style>
      .fil0 { fill: #FEFEFE }
      .fil1 { fill: #D62718 }
      .fil2 { fill: #35388A }
    </style>
  </defs>

  <!-- Белый круг-фон -->
  <circle cx="239.5" cy="239.5" r="216" fill="#FEFEFE"/>

  <!-- Красная фигура -->
  <path fill="#D62718" d="M113 344c3,0 4,-4 5,-7 10,-17 14,-18 23,-31 2,-2 3,-3 5,-5 19,-20 23,-23 42,-40l21 -17c19,-15 69,-53 87,-63l-58 -99c-2,-4 -7,-10 -8,-14l-68 117c-11,20 -22,39 -34,59 -6,10 -31,52 -33,59 4,-2 5,-4 9,-8l33 -29c3,-2 5,-4 9,-7 15,-11 77,-53 93,-58 -27,17 -53,38 -77,59 -2,2 -3,2 -5,4l-15 14c-12,10 -65,63 -68,67l38 0z"/>

  <!-- Синяя фигура -->
  <path fill="#35388A" d="M358 290c-8,-12 -36,-57 -41,-68 -4,-8 0,-11 4,-15l64 -65c-5,3 -9,6 -14,9l-41 30c-11,9 -29,22 -39,32l-12 11c-4,4 -8,7 -12,12 -14,16 -18,19 -32,38 -14,21 -24,46 -13,70l171 0 -33 -55z"/>

  <!-- Белые акценты -->
  <path fill="#FEFEFE" d="M269 287c13,-15 31,-20 40,-12 9,8 6,26 -7,41 -13,15 -31,20 -40,12 -9,-8 -6,-26 7,-41z"/>
  <path fill="#FEFEFE" d="M305 362c3,-3 25,-32 34,-41 2,-2 3,-3 4,-2 2,7 -7,23 -11,30 2,-5 5,-12 6,-18 -7,14 -20,21 -34,31z"/>
</svg>`;for(const e of n)e.innerHTML=targetContent},getTargetAppearance=()=>document.documentElement.classList.contains("dark")?"dark":"light",window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("top-scroller"),n=document.getElementById("site-footer");t&&n&&t.getBoundingClientRect().top>n.getBoundingClientRect().top&&(t.hidden=!0)})