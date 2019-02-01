'use strict'

var body = document.querySelector('body');
var navLink = body.querySelector('.main-nav');
var logo = body.querySelector('.logo');
var descriptBtn = body.querySelector('.descript__btn');
var copyright = body.querySelector('.copyright');
var elementsReverse = [body, navLink, logo, copyright];

var reverseColor = function (evt) {
  evt.preventDefault();
  for (var i = 0; i < elementsReverse.length; i++) {
    elementsReverse[i].classList.toggle('reverse');
  }
};

descriptBtn.addEventListener('click', function (evt) {
  reverseColor(evt);
})
