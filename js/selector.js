'use strict';
// селекторы, к-ые встречаются в коде несколько раз
(function () {
  window.selector = {
    imgPlace: document.querySelector('.pictures'),
    imgPreview: document.querySelector('.img-upload__preview').querySelector('img'),
    counterPlace: document.querySelector('#symbol_counter'),
    body: document.querySelector('body'),

    zoomOutButton: document.querySelector('.scale__control--smaller'),
    zoomInButton: document.querySelector('.scale__control--bigger'),
    tagInput: document.querySelector('.text__hashtags'),
    tagErrPlaceUl: document.querySelector('#tag-error'),
    sliderTag: document.querySelector('.img-upload__effect-level'),
    uploadBtn: document.querySelector('#upload-select-image'),

    pin: document.querySelector('.effect-level__pin'),
    depth: document.querySelector('.effect-level__depth'),
    effectLevelForm: document.querySelector('.effect-level__value')
  };
})();

