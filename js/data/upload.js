/* eslint-disable no-console */
'use strict';

(function () {
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', 'https://js.dump.academy/kekstagram');
    xhr.send(data);
  };
})();
