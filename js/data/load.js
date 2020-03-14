/* eslint-disable no-console */
'use strict';
(function () {
  window.load = function (onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var resultResponse = xhr.response;
      onSuccess(resultResponse);

      // switch (true) {
      //   case xhr.status === 106:
      //     return;
      //   case xhr.status === 400:
      //     window.errorFile.show();
      //     return;
      // }
    });

    xhr.open('GET', 'https://js.dump.academy/kekstagram/data');
    xhr.send();
  };

})();
