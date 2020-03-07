'use strict';
// Модуль необходим для изменения масштаба изображения
(function () {
  var newValaue;
  var scaleValue;
  window.selector.zoomInButton.disabled = true; // октлючаем кнопку зума при 100%

  var zoomStorage = document.querySelector('.scale__control--value');
  var zoomButtons = document.querySelector('.img-upload__scale');

  // SC.1 Изменяем масштаб изображения туда и сюда
  var scaleImageHandler = function (evt) {
    switch (true) {
      case evt.target.className === 'scale__control  scale__control--smaller':
        newValaue = parseInt(zoomStorage.value, 10) - window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        window.selector.imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          window.selector.zoomOutButton.disabled = true;
        }
        if (parseInt(zoomStorage.value, 10) < window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          window.selector.zoomInButton.disabled = false;
        }
        return;

      case evt.target.className === 'scale__control  scale__control--bigger':
        newValaue = parseInt(zoomStorage.value, 10) + window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        window.selector.imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          window.selector.zoomInButton.disabled = true;
        }
        if (parseInt(zoomStorage.value, 10) > window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          window.selector.zoomOutButton.disabled = false;
        }
        return;
    } // switch
  };
  // window.removeListener = function () {
  //   zoomButtons.removeEventListener('click', scaleImageHandler);
  //   alert('я удален');
  // };

  zoomButtons.addEventListener('click', scaleImageHandler);
})(); // end iife s1
