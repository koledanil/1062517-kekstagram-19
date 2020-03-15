'use strict';
(function () {
  window.load = function (onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var resultResponse = xhr.response;
      var readyState = xhr.readyState;
      onSuccess(resultResponse, readyState);
    });

    xhr.open('GET', 'https://js.dump.academy/kekstagram/data');
    xhr.send();
  };
})();
