'use strict';
// открыти и закрытие окна
(function () {
  var dialogBox = document.querySelector('.img-upload__overlay');
  var effectPreview = document.querySelectorAll('.effects__radio');

  // D.1 Функция открывает диалоговое окно по изменению поля файл.
  var showDialogBoxHandler = function () {
    showDialog();
  };

  var showDialog = function () {
    dialogBox.classList.remove('hidden');
    window.selector.body.classList.add('modal-open');
    startListener();

    // запускаем слушателей
    window.effect.addEvtListener();
    window.comment.addEvtListener();
    window.titleError.addEvtListener();
    window.hashtag.addEvtListener();
    window.scale.addEvtListener();
    window.slider.addEvtListener();
    window.submit.addEvtListener();
  };

  // D.1.1 Запускает закрытие окна
  var hide = function () {
    dialogBox.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    window.resetUploadForm();
    removeListener();
    window.setdisabled.activeBtnSendXhr(window.selector.submitBtn);
    window.setdisabled.setActiveEffectPreview();
    window.setdisabled.setAcitveOtherControls();
    window.selector.timeoutMsg.remove();
  };

  // D.1.2 Хэндлер для закртыия по ESC
  // также в нем пропис. функционал первый ESC потеря фокуса с поля тэги или комент, второе наж. закрыт. форму
  var closeEscHandler = function (evt) {
    switch (true) {
      case evt.key === 'Escape' && evt.target.type === 'radio':
        for (var i = 0; i < effectPreview.length; i++) {
          if (effectPreview[i].checked) {
            effectPreview[i].blur();
          }
        }
        return;

      case evt.key === 'Escape' && evt.target.type === 'text':
        window.selector.tagInput.blur();
        return;

      case evt.key === 'Escape' && evt.target.type === 'textarea':
        window.selector.textArea.blur();
        return;
      case evt.key === 'Escape':
        hide();
        return;
    }
  };

  // D.1.3 Хэндлер для закртыия по клику
  var closeClickHandler = function () {
    hide();
  };
  window.selector.uploadBtn.addEventListener('change', showDialogBoxHandler);

  var startListener = function () {
    document.addEventListener('keydown', closeEscHandler);
    window.selector.crossButtonUpld.addEventListener('click', closeClickHandler);
  };

  var removeListener = function () {
    document.removeEventListener('keydown', closeEscHandler);
    window.selector.crossButtonUpld.removeEventListener('click', closeClickHandler);
  };

  // OUTPUT
  window.dialog = {
    hide: hide
  };
})();
