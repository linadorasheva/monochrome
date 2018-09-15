'use strict'

var ESC_KEYCODE = 27;
var ENT_KEYCODE = 13;

var overlay = document.querySelector('.overlay');
var closeOverlay = overlay.querySelector('.btn--overlay-close');
var bigPicture = overlay.querySelector('.overlay__image');
var smallPicture = document.querySelector('.works__img');
var wrappPictures = document.querySelector('.works__wrapp');

var renderBigPicture = function (evt) {
  var target = evt.target;

  if(target != wrappPictures) {
    if (target.tagName == 'IMG') {
      overlay.classList.remove('hidden');
      bigPicture.src = evt.target.src;
    }
  }
  return;
};

var onOverlayEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    hiddenOverlay();
  }
};

var showOverlay = function (evt) {
  renderBigPicture(evt);
  document.addEventListener('keydown', onOverlayEscPress);
};

var hiddenOverlay = function () {
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onOverlayEscPress);
};

closeOverlay.addEventListener('click', function () {
  hiddenOverlay();
});

wrappPictures.addEventListener('click', function (evt) {
  showOverlay(evt);
});
