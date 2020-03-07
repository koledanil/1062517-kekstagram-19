'use strict';
// Функцция проверяет помечены ли тэги и/или комент как невалидные. Если так то форма не отправляется
// S.1 Функция проверяет состояние проверки двух полей, и разрешает / запрещает отправку формы
var checkRules = function (evt) {
  if (window.constant.ADD_PHOTO_RULES.special.validityTextArea === false || window.constant.ADD_PHOTO_RULES.special.validityTag === false) {
    evt.preventDefault();
  }
};
window.selector.submitButton.addEventListener('click', checkRules);
