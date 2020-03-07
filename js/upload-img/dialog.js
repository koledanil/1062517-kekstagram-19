'use strict';

// DIALOG.JS
// D.1 Функция открывает диалоговое окно по изменению поля файл.
(function () {
  var showDialogBoxHandler = function () {
    window.selector.dialogBox.classList.remove('hidden');
    window.selector.body.classList.add('modal-open');
    window.selector.filerPicker.blur();
  };
  window.selector.clickedElement.addEventListener('change', showDialogBoxHandler);
})();

// D.2 Функция закрывает диалоговое окно по клику на керстик и ESC
(function () {
// D.2.1 Запускает закрытие окна
  var hideDialogBox = function () {
    window.selector.dialogBox.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    window.selector.uploadBtn.reset();
    window.resetUploadForm();
  };

  // D.2.2 Хэндлер для закртыия по ESC
  // также в нем пропис. функционал первый ESC потеря фокуса с поля тэги или комент, второе наж. закрыт. форму
  var closeEscHandler = function (evt) {
    switch (true) {
      case evt.key === 'Escape' && evt.target.type === 'radio':
        for (var i = 0; i < window.selector.effectPreview.length; i++) {
          if (window.selector.effectPreview[i].checked) {
            window.selector.effectPreview[i].blur();
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
        hideDialogBox();
        return;
    }
  };

  // D.2.3 Хэндлер для закртыия по rkbre
  var closeClickHandler = function () {
    hideDialogBox();
  };

  document.addEventListener('keydown', closeEscHandler);
  window.selector.crossButton.addEventListener('click', closeClickHandler);
})();
