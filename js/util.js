
'use strict';
// содержит полезные функции, к-ые используются в разных местах кода

(function () {
  // U.1 Поиск темплейта и тэга внутри него
  var getTemplate = function (tagTemplate, tagInTemplate) {
    var template = document.querySelector(tagTemplate).content.querySelector(tagInTemplate);
    var result = template.cloneNode(true);
    return result;
  };

  // U.2 Выдача случ. числоа
  var getRandom = function (min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  };

  // U.3 Выбор окончания слова
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
  window.util = {
    getRandom: getRandom,
    getTemplate: getTemplate,
    chooseEndWord: chooseEndWord
  };
})();
