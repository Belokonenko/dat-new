"use strict";
import buttonBurger from "./modules/button-burger";
import order from "./modules/order";
import sliders from "./modules/slider";
import seeds from "./modules/seeds";
import navProd from "./modules/navProd";
import scrollToTop from "./modules/scrollToTop";
import {test} from "./modules/registration";
// import validateName from "./modules/validateName";

document.addEventListener("DOMContentLoaded", () => {
    buttonBurger("dropdown-panel");
    order();
    sliders();
    seeds();
    navProd();
    scrollToTop();
    validateName();
});

