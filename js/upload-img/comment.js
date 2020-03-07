'use strict';

(function () {
  // Т.2 Контроль длины поля ввода
  window.selector.counterPlace.classList.add('text__counter'); // присваивет стиль каунтера по умолчанию
  window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;

  window.constant.ADD_PHOTO_RULES.special.counterSymbol = 0;
  // Т.2.1 Отображает каунтер
  var showCounterHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
  };
    // Т.2.2 Убирает каунтер
  var hideCounterHandler = function () {
    if (window.constant.ADD_PHOTO_RULES.special.counterSymbol === undefined || window.constant.ADD_PHOTO_RULES.special.counterSymbol === 0) {
      window.selector.counterPlace.classList.add('hidden');
    }
  };
    // Т.2.3 Считает символы в тексте
  var checkLengthTextAreaHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
    window.constant.ADD_PHOTO_RULES.special.counterSymbol = window.selector.textArea.value.length;
    window.selector.counterPlace.classList.add('counter__default');
    window.selector.counterPlace.textContent = 'Введено ' + window.constant.ADD_PHOTO_RULES.special.counterSymbol + ' из' + ' 140 символов';
    if (window.constant.ADD_PHOTO_RULES.special.counterSymbol === 0) {
      window.selector.textArea.classList.remove('border-error');
    }

    if (window.constant.ADD_PHOTO_RULES.special.counterSymbol >= window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH) {
      window.selector.counterPlace.classList.add('counter-error');
      window.selector.counterPlace.textContent = 'Достигли лимит в 140 символов 😶';
      window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle = 1; // используется для отображения количества ошибок в заголовке S.2
      window.selector.textArea.classList.add('border-error');
      window.constant.ADD_PHOTO_RULES.special.validityTextArea = false;

    } else {
      // counterPlace.removeAttribute('class');
      window.selector.counterPlace.classList.remove('counter-error');
      window.selector.textArea.classList.remove('border-error');
      window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;
      window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle = 0; // затираем количество ощибок в заголовке
    }
  };
  window.selector.textArea.addEventListener('focus', showCounterHandler); // Показывает счетчик символов при фокусе
  window.selector.textArea.addEventListener('keyup', checkLengthTextAreaHandler); // Считает символы при вводе
  window.selector.textArea.addEventListener('blur', hideCounterHandler); // Прячет счетчик при потери фокуса
})();
