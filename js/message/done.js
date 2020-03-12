'use strict';
// Отображает сообзение об успешной загрузке фотографии
(function () {
  var timerId;
  // D.1 Отображает окно с сообщением про успех
  var show = function () {
    window.selector.donePlace.appendChild(window.selector.doneMsg);
    window.selector.doneBtn.addEventListener('click', removeMsgHandler);
    window.addEventListener('keydown', removeMsgEscHandler);
    document.title = '[Загружено фото!] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    startTime();
  };


  // D.3 Функция удаляет окно из разметки
  var closeMsg = function () {
    window.selector.doneMsg.remove();
    removeEvtListener();
    clearTimeout(timerId);
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
  };

  // D.4 Закрытие по таймеру
  var startTime = function () {
    var second = window.constant.ADD_PHOTO_RULES.TIME_CLOSE_MSG;
    window.selector.doneCounter.textContent = 'Окно закроется через ' + second + ' секунд' + chooseEndWord(second);

    var countSecond = function () {
      if (second === 0) {
        clearInterval(setID);
        closeMsg();
        return;
      }
      second--;

      window.selector.doneCounter.textContent = 'Окно закроется через ' + second + ' секунд' + chooseEndWord(second);
    };
    var setID = setInterval(countSecond, 1000);
  };

  // D.4.1 Концовка слова
  var chooseEndWord = function (time) {
    var endWord = '';
    if (time === 1) {
      endWord = 'у';
    } else if (time >= 2 && time <= 4) {
      endWord = 'ы';
    } else if (time >= 5 || time === 0) {
      endWord = '';
    }
    return endWord;
  };

  // D.5 Удалятор слушателея
  var removeMsgHandler = function () {
    closeMsg();
  };

  // D.5.1 Удалятор слушателея
  var removeEvtListener = function () {
    window.selector.doneBtn.removeEventListener('click', removeMsgHandler);
    window.removeEventListener('keydown', removeMsgHandler);
  };

  // D.5.2 Удалятор слушателея
  var removeMsgEscHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeMsg();
    }
  };

  // OUTPUT
  window.done = {
    show: show
  };
})();

