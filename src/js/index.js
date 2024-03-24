"use strict";
import buttonBurger from "./modules/button-burger";
import order from "./modules/order";
import sliders from "./modules/slider";
import seeds from "./modules/seeds";
import navProd from "./modules/navProd";
import scrollToTop from "./modules/scrollToTop";
import login from "./modules/login";

document.addEventListener("DOMContentLoaded", () => {
    buttonBurger("dropdown-panel");
    order();
    sliders();
    seeds();
    navProd();
    scrollToTop();
    login();
});

