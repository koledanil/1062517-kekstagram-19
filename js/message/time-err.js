'use strict';
(function () {
  // TE 1. Функция выводит сообщение во время загрузки изображения
  var show = function () {
    var uplaodForm = document.querySelector('.img-upload__form');
    window.selector.timeoutPlace.appendChild(window.selector.nonModalwBtn);
    window.selector.nonModalwBtn.querySelector('.banner-err__text').textContent = 'Не удалось загрузить изобаржение, так как сервер не отвечает.';
    window.setstate.activedBtnSendXhr(window.selector.submitBtn);
    window.setstate.activedEffectPreview();
    window.setstate.acitvedOtherControls();
    document.title = '[Ошибка! Сервер не отвечает] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;

    window.addEventListener('click', function (evt) {
      var btnContainer = evt.target.closest('.banner-err');

      if (btnContainer) {
        document.title = '[Загрузка...] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
        evt.preventDefault();
        window.selector.nonModalwBtn.remove();
        window.upload(new FormData(uplaodForm), function () {
        });
      }
    });
  };

  // OUTPUT
  window.timeerr = {
    show: show,
  };
})();
