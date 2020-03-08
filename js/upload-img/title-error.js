'use strict';
// Данная функция предназначена для отображения к-ва ошибок в поле теги и комент в ЗАГОЛОВКЕ СТРАНИЦЫ
(function () {
// TR.1 Выводит количество ошибок в заголовок окна
  var formUpldImg = document.querySelector('.img-upload__text');

  var showErrCounterTitleHandler = function () {
    if (window.variable.counterErrTagTitle > 0 || window.variable.counterErrAreaTitle > 0) { // если значение не нулевое (то есть есть ошибки), выполняется выввод в заголовк
      var sumErr = window.variable.counterErrTagTitle + window.variable.counterErrAreaTitle;
      var endWord = '';
      if (sumErr === 1) {
        endWord = 'а';
      } else if (sumErr >= 2 && sumErr <= 4) {
        endWord = 'ки';
      } else if (sumErr >= 5) {
        endWord = 'ок';
      }
      document.title = '[' + sumErr + ' ошиб' + endWord + ']' + ' ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;

    } else {
      document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE; // обнуляем заголовок если ошибок нет.
    }
  };

  formUpldImg.addEventListener('change', showErrCounterTitleHandler);

  // TR.2 Удаляем листенере
  var removeListener = function () {
    formUpldImg.removeEventListener('change', showErrCounterTitleHandler);
  };

  // / OUTPUT
  window.titleError = {
    removeListener: removeListener
  };
})();
