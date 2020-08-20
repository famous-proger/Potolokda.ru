"use strict";


let burger_menu = document.querySelector(".header__nav-menu__wrapper");
let dropdown_menu = document.querySelector(".dropdown-menu_background");




burger_menu.addEventListener('click', function(){
  dropdown_menu.classList.toggle("dropdown-menu_open");
});
