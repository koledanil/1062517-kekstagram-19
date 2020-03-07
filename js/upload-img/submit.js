'use strict';
// Функцция проверяет помечены ли тэги и/или комент как невалидные. Если так то форма не отправляется
// S.1 Функция проверяет состояние проверки двух полей, и разрешает / запрещает отправку формы
(function () {
  var submitButton = document.querySelector('#upload-submit');
  var checkRules = function (evt) {
    if (window.constant.ADD_PHOTO_RULES.special.validityTextArea === false || window.constant.ADD_PHOTO_RULES.special.validityTag === false) {
      evt.preventDefault();
    }
  };
  submitButton.addEventListener('click', checkRules);

  // S.2 Удаляем листенера
  var removeListener = function () {
    submitButton.removeEventListener('click', checkRules);
  };

  // OUTPUT
  window.submit = {
    removeListener: removeListener
  };
})();
