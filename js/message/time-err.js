'use strict';
(function () {
  var show = function () {
    var uplaodForm = document.querySelector('.img-upload__form');
    window.selector.timeoutPlace.appendChild(window.selector.timeoutMsg);
    window.selector.timeoutMsg.querySelector('.banner-err__text').textContent = 'Не удалось загрузить изобаржение, так как сервер не отвечает.';
    window.setdisabled.activeBtnSendXhr(window.selector.submitBtn);
    window.addEventListener('click', function (evt) {
      var btnContainer = evt.target.closest('.banner-err');

      if (btnContainer) {

        document.title = '[Загрузка...] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
        evt.preventDefault();
        window.selector.timeoutMsg.remove();
        window.upload(new FormData(uplaodForm), function () {
        });
      }
    });
  };

  // OUTPUT
  window.timeerr = {
    show: show
  };
})();
