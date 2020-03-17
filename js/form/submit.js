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
      window.backend.upload(new FormData(uplaodForm), window.constant.ADD_PHOTO_RULES.URL_UPLOAD, onSuccessHandler, onLoadHandler);
    }
  };

  // S.2 При успешном выполнении прячем окно
  var onSuccessHandler = function () {
    window.dialog.hide();
  };

  // S.3 Лочит интерфейс на время загрузки
  var onLoadHandler = function () {
    window.setstate.disabledEffectPreview();
    window.setstate.disabledOtherControlls();
    window.setstate.disabledBtnSendXhr(window.selector.submitBtn);
  };

  // S.2 Делаем кнопку ОТПРАВИТЬ неактивной, если нет интернета
  var checkOfflineHandler = function () {
    window.setstate.disabledOnlyBtnSendXhr(window.selector.submitBtn);
  };

  // S.3 Делаем кнопку ОТПРАВИТЬ активной, если есть интернет
  var checkOnlineHandler = function () {
    window.setstate.activatedOnlyBtnSendXhr(window.selector.submitBtn);
  };

  // S.4 Добавляем листенер
  var addEvtListener = function () {
    window.selector.submitBtn.addEventListener('click', checkRulesHandler);
    window.addEventListener('offline', checkOfflineHandler);
    window.addEventListener('online', checkOnlineHandler);
  };

  // S.5 Удаляем листенера
  var removeListener = function () {
    window.selector.submitBtn.removeEventListener('click', checkRulesHandler);
    window.removeEventListener('offline', checkOfflineHandler);
    window.removeEventListener('online', checkOnlineHandler);
  };

  // OUTPUT
  window.submit = {
    addEvtListener: addEvtListener,
    removeListener: removeListener
  };
})();
