"use strict";



// ДОБАВЛЯЕМ ПЕРЕКЛЮЧЕНИЕ CHECKBOX'A В ШАПКЕ САЙТА

let header_checkbox_area = document.querySelector(".header__application-form > label:nth-child(6)");
let header_checkbox = document.querySelector("#header__check-box");

header_checkbox_area.addEventListener('click', function(){
  header_checkbox.classList.toggle("add-tick-to-checkbox");
});



// ДОБАВЛЯЕМ ПЕРЕКЛЮЧЕНИЕ CHECKBOX'A ВО ВСПЛЫВАЮЩЕМ ОКНЕ "ОБРАТНЫЙ ЗВОНОК"

let popup_checkbox_area_1 = document.querySelector(".popup-window-1__form__wrapper > label:nth-child(7)");
let popup_checkbox_1 = document.querySelector(".popup-window-1__form__tick");

popup_checkbox_area_1.addEventListener('click', function(){
  popup_checkbox_1.classList.toggle("add-tick-to-checkbox");
});




// ДОБАВЛЯЕМ ПЕРЕКЛЮЧЕНИЕ CHECKBOX'A ВО ВСПЛЫВАЮЩЕМ ОКНЕ "ЗАКАЖИ БЕСПЛАТНЫЙ ЗАМЕР"

let popup_checkbox_area_2 = document.querySelector(".popup-window-2__form__wrapper > label:nth-child(7)");
let popup_checkbox_2 = document.querySelector(".popup-window-2__form__tick");

popup_checkbox_area_2.addEventListener('click', function(){
  popup_checkbox_2.classList.toggle("add-tick-to-checkbox");
});




// ДОБАВЛЯЕМ ПЕРЕКЛЮЧЕНИЕ CHECKBOX'A В БЛОКЕ MAIN-APPLICATION-BLOCK

let main_application_checkbox_area = document.querySelector(".main__application-block__form > section:nth-child(4) > label:nth-child(1)");
let main_application_checkbox = document.querySelector(".main__application-block__checkbox");

main_application_checkbox_area.addEventListener('click', function(){
  main_application_checkbox.classList.toggle("add-tick-to-checkbox");
});
