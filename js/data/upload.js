/* eslint-disable no-console */
'use strict';

(function () {
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = window.constant.ADD_PHOTO_RULES.XHR_TIMEOUT;

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
      switch (true) {
        case xhr.status === 200:
          window.done.show();
          return;
        case xhr.status === 400:
          window.errorFile.show();
          return;
      }
    });

    xhr.open('POST', 'https://js.dump.academy/kekstagram');
    window.setstate.disabledEffectPreview();
    window.setstate.disabledOtherControlls();
    window.setstate.disabledBtnSendXhr(window.selector.submitBtn);
    xhr.ontimeout = function () {
      window.timeerr.show();
    };
    xhr.send(data);
  };
})();
