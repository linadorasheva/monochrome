'use strict'
var ESC_KEYCODE = 27;
var ENT_KEYCODE = 13;

var button = document.querySelector('.btn');
var nav = document.querySelector('.main-nav');

var overlay = document.querySelector('.overlay');
var closeOverlay = document.querySelector('.btn--overlay-close');
var bigPicture = document.querySelectorAll('.overlay__image');


var showElement = function () {
  nav.classList.toggle('main-nav--show');
  button.classList.toggle('btn--close');
};

button.addEventListener('click', function () {
  showElement();
});
