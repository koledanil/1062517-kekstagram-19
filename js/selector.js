'use strict';
(function () {
  window.selector = {
    imgPlace: document.querySelector('.pictures'), // 2 times
    imgPreview: document.querySelector('.img-upload__preview').querySelector('img'),
    counterPlace: document.querySelector('#symbol_counter'), // reset
    dialogBox: document.querySelector('.img-upload__overlay'),
    body: document.querySelector('body'),
    filerPicker: document.querySelector('.img-upload__input'),
    clickedElement: document.querySelector('#upload-select-image'),
    zoomOutButton: document.querySelector('.scale__control--smaller'), // уменьшаем масштаб
    zoomInButton: document.querySelector('.scale__control--bigger'), // увеличиваем масштаб
    textArea: document.querySelector('.text__description'),
    tagInput: document.querySelector('.text__hashtags'),
    tagErrPlaceUl: document.querySelector('#tag-error'), // находим тэг для ошибок заполнения поля тэг
    sliderTag: document.querySelector('.img-upload__effect-level'),
    uploadBtn: document.querySelector('#upload-select-image'),
    crossButton: document.querySelector('.cancel'),
    effectPreview: document.querySelectorAll('.effects__radio'),
    zoomStorage: document.querySelector('.scale__control--value'),
    zoomButtons: document.querySelector('.img-upload__scale'),
    pin: document.querySelector('.effect-level__pin'),
    depth: document.querySelector('.effect-level__depth'),
    lineEmpty: document.querySelector('.effect-level__line'),
    effectLevelForm: document.querySelector('.effect-level__value'),
    effectList: document.querySelector('.effects__list'),
    tagErrTemplate: document.querySelector('#error-item').content.querySelector('li'),
    submitButton: document.querySelector('#upload-submit'),
    formUpldImg: document.querySelector('.img-upload__text'),
  };
})();

