'use strict';
// Функцция проверяет помечены ли тэги и/или комент как невалидные. Если так то форма не отправляется
// S.1 Функция проверяет состояние проверки двух полей, и разрешает / запрещает отправку формы
(function () {
  var uplaodForm = document.querySelector('.img-upload__form');
  // S.1 Проверяем флаги для поля тэгов и поля коментов
  var checkRulesHandler = function (evt) {
    if (window.variable.validityTextArea === false || window.variable.validityTag === false) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      window.upload(new FormData(uplaodForm), function () {
        window.dialog.hide();
      });
    }
  };

  // S.2 Добавляем листенер
  var addEvtListener = function () {
    window.selector.submitBtn.addEventListener('click', checkRulesHandler);
  };

  // S.3 Удаляем листенера
  var removeListener = function () {
    window.selector.submitBtn.removeEventListener('click', checkRulesHandler);
  };

  // OUTPUT
  window.submit = {
    addEvtListener: addEvtListener,
    removeListener: removeListener
  };
})();
