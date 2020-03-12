'use strict';
// Функцция проверяет помечены ли тэги и/или комент как невалидные. Если так то форма не отправляется
// S.1 Функция проверяет состояние проверки двух полей, и разрешает / запрещает отправку формы
(function () {
  var submitButton = document.querySelector('#upload-submit');
  var uplaodForm = document.querySelector('.img-upload__form');

  var checkRulesHandler = function (evt) {
    if (window.variable.validityTextArea === false || window.variable.validityTag === false) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      window.upload(new FormData(uplaodForm), function () {
        window.dialog.hideDialogBox();
        window.done.show();

      });
    }
  };

  // S.1 Добавляем листенер
  var addEvtListener = function () {
    submitButton.addEventListener('click', checkRulesHandler);
  };

  // S.2 Удаляем листенера
  var removeListener = function () {
    submitButton.removeEventListener('click', checkRulesHandler);
  };

  // OUTPUT
  window.submit = {
    addEvtListener: addEvtListener,
    removeListener: removeListener
  };
})();
