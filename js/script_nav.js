'use strict'

var button = document.querySelector('.btn');
var nav = document.querySelector('.main-nav');

var showElement = function () {
  nav.classList.toggle('main-nav--show');
  button.classList.toggle('btn--close');
};

button.addEventListener('click', function () {
  showElement();
});
