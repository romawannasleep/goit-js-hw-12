import{a as L,S as v,i as a}from"./assets/vendor-C2ySes1p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/";async function u(t,r=1){return(await L.get(w,{params:{key:"55023028-a47613c23fe5e51542ebeaaa1",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".btn"),$=new v(".gallery a");function y(t){const r=t.map(o=>`
   
    <li>
     <a class="link" href="${o.largeImageURL}">
    <img src="${o.webformatURL}"
    alt="${o.tags}"
    class="pixabay-photo"
   />
   </a>
     <p class="likes">likes: ${o.likes}</p>
    <p class="views">views: ${o.views}</p>
       <p class="comments">comments: ${o.comments}</p>
       <p class="downloads">downloads: ${o.downloads}</p>
    </li>
    
  `);d.insertAdjacentHTML("beforeend",r.join("")),$.refresh()}function S(){d.innerHTML=""}function h(){f.classList.add("visible")}function p(){f.classList.remove("visible")}function q(){m.classList.add("visible")}function g(){m.classList.remove("visible")}const x=document.querySelector(".form"),E=document.querySelector(".btn");let b="",n=1,c=0;x.addEventListener("submit",async t=>{if(t.preventDefault(),t.target.elements["search-text"].value===""){a.error({title:"Error"});return}b=t.target.elements["search-text"].value.trim(),n=1,S(),h();try{const r=await u(t.target.elements["search-text"].value);c=r.totalHits,r.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(r.hits),n*15>=c?(g(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):q())}catch(r){a.error({title:"Error",message:`${r}`})}finally{p()}t.target.reset()});E.addEventListener("click",async()=>{n+=1,h();try{const t=await u(b,n);y(t.hits);const o=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),n*15>=c&&(g(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(t){a.error({title:"Error",message:`${t}`})}finally{p()}});
//# sourceMappingURL=index.js.map
