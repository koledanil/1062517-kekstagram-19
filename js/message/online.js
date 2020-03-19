'use strict';
// Проверяет наличие или отсуствие интернта и выводит соотв. сообщение вверху экрана.
(function () {
  var timer; // храинт таймер.
  // О.1 Хэндлер для отображения статуса офлайн
  var checkOfflineHandler = function () {
    window.selector.nonModalwoBtn.remove();
    document.querySelector('main').appendChild(window.selector.nonModalwoBtn);
    window.selector.nonModalwoBtn.querySelector('.banner-err__text').textContent = window.constant.ADD_PHOTO_RULES.MSG.ERR_NETWORK;
    window.selector.nonModalwoBtn.querySelector('.banner-err').classList.add('banner--offline');
    window.selector.nonModalwoBtn.querySelector('.banner-err').classList.remove('banner--online');
    document.title = '[Нет интернета] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    clearTimeout(timer); // если интернет стал ОК а потом опять мнговенно пропал, то обнуляет таймер
  };

  // О.2 Хэндлер для отображения статуса онлайн
  var checkOnlineHandler = function () {
    window.selector.nonModalwoBtn.remove();
    document.querySelector('main').appendChild(window.selector.nonModalwoBtn);
    window.selector.nonModalwoBtn.querySelector('.banner-err__text').textContent = window.constant.ADD_PHOTO_RULES.MSG.OK_NETWORK;
    window.selector.nonModalwoBtn.querySelector('.banner-err').classList.add('banner--online');
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;

    // О.3 Хэндлер для скртыия статуса онлайн по таймеру
    var clearOnline = function () {
      window.selector.nonModalwoBtn.remove();
      document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
      // Это условие нужно чтобы при появлении интернтеа не перезагружался страница, ЕСЛИ открыт оверлей
      if (!window.selector.body.classList.contains('modal-open')) {
        document.location.reload(true);
      }
    };
    timer = setTimeout(clearOnline, 5000);
  };

  window.addEventListener('offline', checkOfflineHandler);
  window.addEventListener('online', checkOnlineHandler);

})();
