'use strict';
(function () {
  var timerId;
  var show = function () {
    window.selector.donePlace.appendChild(window.selector.doneMsg);
    window.selector.doneBtn.addEventListener('click', removeMsgHandler);
    window.addEventListener('keydown', removeMsgEscHandler);
    document.title = '[Загружено фото!] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    startTime();
  };

  var removeMsgHandler = function () {
    closeMsg();
  };

  var closeMsg = function () {
    window.selector.doneMsg.remove();
    removeEvtListener();
    clearTimeout(timerId);
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
  };

  var removeEvtListener = function () {
    window.selector.doneBtn.removeEventListener('click', removeMsgHandler);
    window.removeEventListener('keydown', removeMsgHandler);
  };

  var removeMsgEscHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeMsg();
    }
  };


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

  // OUTPUT
  window.done = {
    show: show
  };
})();

