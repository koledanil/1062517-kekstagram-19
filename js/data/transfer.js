'use strict';
(function () {
  // T.1 обращение для загрузки фоток
  var load = function (onSuccess) {
    var xhr = createRequest();

    xhr.addEventListener('load', function () {
      var resultResponse = xhr.response;
      var readyState = xhr.readyState;
      onSuccess(resultResponse, readyState);
    });
    xhr.open('GET', 'https://js.dump.academy/kekstagram/data');
    xhr.send();
  };

  // Т.2 обращение для выгрузки формы загрузки фотки
  var upload = function (data, onSuccess) {
    var xhr = createRequest();
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

  // Т.3 созадние запроса
  var createRequest = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    return xhr;
  };

  // OUTPUT
  window.transfer = {
    load: load,
    upload: upload
  };

})();

