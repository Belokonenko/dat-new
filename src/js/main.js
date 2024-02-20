'use strict';

import BaseHelpers from './helpers/BaseHelpers';
import buttonBurger from '../blocks/moduels/burger/button-burger/button-burger';
import order from '../blocks/moduels/order/order';
import sliders from '../blocks/base.blocks/sliders/slider.js';
import seeds from '../blocks/sections/content/__seeds/seeds';
import navProd from '../blocks/sections/nav-prod/nav-prod';

document.addEventListener('DOMContentLoaded', () => {
    console.log('main.js status : work');
    
    BaseHelpers.checkWebpSupport();
    buttonBurger('dropdown-panel');
    order();
    sliders();
    seeds()
    navProd()
});
