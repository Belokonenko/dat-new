!function(){"use strict";document.addEventListener("DOMContentLoaded",(()=>{!function(e){const t=document.querySelector(".button-burger");t&&t.addEventListener("click",(()=>{t.classList.toggle("button-burger_active");const o=document.querySelector(`.${e}`);o&&o.classList.toggle(`${e}_active`)}))}("dropdown-panel"),function(){const e=document.querySelectorAll(".order");e&&e.forEach((e=>{e.addEventListener("mouseover",(()=>{e.classList.add("order_active")})),e.addEventListener("mouseout",(()=>{e.classList.remove("order_active")})),e.querySelector(".order__btn").addEventListener("click",(()=>{console.log("click"),e.classList.toggle("order_active")}))}))}(),function(){const e=document.querySelector(".seeds");if(e){const t=e.querySelector(".seeds__btn"),o=e.querySelector(".seeds__text-hidden");t.addEventListener("click",(()=>{console.log("clic hidden text_faded "),o.classList.add("seeds__text_active"),t.style.display="none"}))}}(),function(){const e=document.querySelector(".nav-prod");if(e){const t=e.querySelector(".nav-prod__btn-menu"),o=e.querySelectorAll(".nav-prod__btn");t&&t.addEventListener("click",(()=>{e.classList.toggle("nav-prod_active")})),o&&o.forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("nav-prod_active")}))}))}}(),function(){const e=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",(function(){window.pageYOffset>500?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}()}))}();