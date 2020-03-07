'use strict';
// Модуль необходим для изменения масштаба изображения
(function () {
  var newValaue;
  var scaleValue;
  window.selector.zoomInButton.disabled = true; // октлючаем кнопку зума при 100%

  // SC.1 Изменяем масштаб изображения туда и сюда
  var scaleImageHandler = function (evt) {
    switch (true) {
      case evt.target.className === 'scale__control  scale__control--smaller':
        newValaue = parseInt(window.selector.zoomStorage.value, 10) - window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        window.selector.zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        window.selector.imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(window.selector.zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          window.selector.zoomOutButton.disabled = true;
        }
        if (parseInt(window.selector.zoomStorage.value, 10) < window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          window.selector.zoomInButton.disabled = false;
        }
        return;

      case evt.target.className === 'scale__control  scale__control--bigger':
        newValaue = parseInt(window.selector.zoomStorage.value, 10) + window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        window.selector.zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        window.selector.imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(window.selector.zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          window.selector.zoomInButton.disabled = true;
        }
        if (parseInt(window.selector.zoomStorage.value, 10) > window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          window.selector.zoomOutButton.disabled = false;
        }
        return;
    } // switch
  };

  window.selector.zoomButtons.addEventListener('click', scaleImageHandler);
})(); // end iife s1
