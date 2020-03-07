'use strict';


window.selector = {
  imgPlace: document.querySelector('.pictures'),
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
  zoomButtons: document.querySelector('.img-upload__scale')
};
