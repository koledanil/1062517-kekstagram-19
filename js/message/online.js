'use strict';
(function () {
  var checkOfflineHandler = function () {
    document.querySelector('main').appendChild(window.selector.timeoutMsg);
    window.selector.timeoutMsg.querySelector('.banner-err__text').textContent = 'Нет интернета. Проверьте подключение к сети';
  };
  window.addEventListener('offline', checkOfflineHandler);
})();
