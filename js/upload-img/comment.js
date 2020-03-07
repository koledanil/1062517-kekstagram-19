'use strict';

(function () {
  // T.1 Поле текста автоматически подстраивается под контент + ресайз только по высоте (чтобы не рвало при вытягивании по ширине)
  var inputHandler = function (evt) {
    evt.target.style.height = 'auto';
    evt.target.style.height = (evt.target.scrollHeight) + 'px';
  };

  window.selector.textArea.setAttribute('style', 'height:' + (window.selector.textArea.scrollHeight) + 'px;overflow-y:auto;' + 'resize: vertical');
  window.selector.textArea.addEventListener('input', inputHandler, false);
})();

(function () {
  // Т.2 Контроль длины поля ввода
  window.selector.counterPlace.classList.add('text__counter'); // присваивет стиль каунтера по умолчанию
  window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;

  window.counterSymbol = 0;
  // Т.2.1 Отображает каунтер
  var showCounterHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
  };
    // Т.2.2 Убирает каунтер
  var hideCounterHandler = function () {
    if (window.counterSymbol === undefined || window.counterSymbol === 0) {
      window.selector.counterPlace.classList.add('hidden');
    }
  };
    // Т.2.3 Считает символы в тексте
  var checkLengthTextAreaHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
    window.counterSymbol = window.selector.textArea.value.length;
    window.selector.counterPlace.classList.add('counter__default');
    window.selector.counterPlace.textContent = 'Введено ' + window.counterSymbol + ' из' + ' 140 символов';
    if (window.counterSymbol === 0) {
      window.selector.textArea.classList.remove('border-error');
    }

    if (window.counterSymbol >= window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH) {
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
