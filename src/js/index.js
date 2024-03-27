'use strict';
import buttonBurger from './modules/button-burger';
import order from './modules/order';
import sliders from './modules/slider';
import seeds from './modules/seeds';
import navProd from './modules/navProd';
import scrollToTop from './modules/scrollToTop';
import modal from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    buttonBurger('dropdown-panel');
    order();
    sliders();
    seeds();
    navProd();
    scrollToTop();
    modal('.modal-login', '.btn-open-modal', '.modal-login__btn-close');
    modal('.modal-basket', '.btn-modal-basket', '.modal-basket__btn-close');
});
