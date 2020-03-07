'use strict';
// Данная функция предназначена для отображения к-ва ошибок в поле теги и комент в ЗАГОЛОВКЕ СТРАНИЦЫ
(function () {
// TR.1 Выводит количество ошибок в заголовок окна
  var errCounterTitle = function () {
    if (window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle > 0 || window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle > 0) { // если значение не нулевое (то есть есть ошибки), выполняется выввод в заголовк
      var sumErr = window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle + window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle;
      var endWord = '';
      if (sumErr === 1) {
        endWord = 'а';
      } else if (sumErr >= 2 && sumErr <= 4) {
        endWord = 'ки';
      } else if (sumErr >= 5) {
        endWord = 'ок';
      }
      document.title = '[' + sumErr + ' ошиб' + endWord + ']' + ' ' + window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE;

    } else {
      document.title = window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE; // обнуляем заголовок если ошибок нет.
    }
  };

  window.selector.formUpldImg.addEventListener('change', errCounterTitle);
})();
