"use strict";


// -------------> ВСПЛЫВАЮЩЕЕ ОКНО "ОБРАТНЫЙ ЗВОНОК" <----------------------



// ПОЛУЧИЛИ ВСПЛЫВАЮЩЕЕ ОКНО
let popup_window_1 = document.querySelector(".popup-window-1");


// ПОЛУЧИЛИ ВСЕ КНОПКИ НА СТРАНИЦЕ, ВЫЗЫВАЮЩИЕ ЭТО ОКНО
let all_buttons_1 = document.querySelectorAll(".call-popup-1");


// ДОБАВЛЯЕМ ВСЕМ КНОПКАМ СОБЫТИЕ ВЫВОДА ОКНА
for (let button_1 of all_buttons_1) {
  button_1.addEventListener('click', function(){
    popup_window_1.classList.remove("delete-element");
  });
}


// ПОЛУЧИЛИ КРЕСТИК ДЛЯ ЗАКРЫТИЯ ОКНА
let cross_1 = document.querySelector(".popup-window-1__form__cross");


// ДОБАВИЛИ СОБЫТИЕ ЗАКРЫТИЯ ОКНА ПРИ НАЖАТИИ НА КРЕСТИК
cross_1.addEventListener('click', function(){
  popup_window_1.classList.add("delete-element");
});


// ДОБАВИЛИ СОБЫТИЕ ЗАКРЫТИЯ ОКНА ПРИ НАЖАТИИ НА ESC
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    popup_window_1.classList.add("delete-element");
  }
});



// -------------> ВСПЛЫВАЮЩЕЕ ОКНО "ЗАКАЖИ БЕСПЛАТНЫЙ ЗАМЕР" <----------------------


// ПОЛУЧИЛИ ВСПЛЫВАЮЩЕЕ ОКНО
let popup_window_2 = document.querySelector(".popup-window-2");


// ПОЛУЧИЛИ ВСЕ КНОПКИ НА СТРАНИЦЕ, ВЫЗЫВАЮЩИЕ ЭТО ОКНО
let all_buttons_2 = document.querySelectorAll(".call-popup-2");


// ДОБАВЛЯЕМ ВСЕМ КНОПКАМ СОБЫТИЕ ВЫВОДА ОКНА
for (let button_2 of all_buttons_2) {
  button_2.addEventListener('click', function(){
    popup_window_2.classList.remove("delete-element");
  });
}


// ПОЛУЧИЛИ КРЕСТИК ДЛЯ ЗАКРЫТИЯ ОКНА
let cross_2 = document.querySelector(".popup-window-2__form__cross");


// ДОБАВИЛИ СОБЫТИЕ ЗАКРЫТИЯ ОКНА ПРИ НАЖАТИИ НА КРЕСТИК
cross_2.addEventListener('click', function(){
  popup_window_2.classList.add("delete-element");
});


// ДОБАВИЛИ СОБЫТИЕ ЗАКРЫТИЯ ОКНА ПРИ НАЖАТИИ НА ESC
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    popup_window_2.classList.add("delete-element");
  }
});
