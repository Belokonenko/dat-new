"use strict";
import buttonBurger from "./modules/button-burger";
import order from "./modules/order";
import seeds from "./modules/seeds";
import navProd from "./modules/navProd";
import scrollToTop from "./modules/scrollToTop";
import validateName from "./modules/validateName";
import validateNameUpper from "./modules/validateNameUpper";
import validateNoSpaces from "./modules/validateNoSpaces";

document.addEventListener("DOMContentLoaded", () => {
    buttonBurger("dropdown-panel");
    order();
    seeds();
    navProd();
    scrollToTop();
    validateName("name");
    validateNameUpper("name");
    // validateNoSpaces("name");
});
