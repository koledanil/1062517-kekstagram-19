'use strict';

(function () {
  var dialogBox = document.querySelector('.img-upload__overlay'); // только диалог
  var crossButton = document.querySelector('.cancel');// диалог
  var effectPreview = document.querySelectorAll('.effects__radio') // диалог

  // D.1 Функция открывает диалоговое окно по изменению поля файл.
  var showDialogBoxHandler = function () {
    dialogBox.classList.remove('hidden');
    window.selector.body.classList.add('modal-open');
  };

// D.1.1 Запускает закрытие окна
  var hideDialogBox = function () {
    dialogBox.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    window.selector.uploadBtn.reset();
    window.resetUploadForm();
  };

  // D.1.2 Хэндлер для закртыия по ESC
  // также в нем пропис. функционал первый ESC потеря фокуса с поля тэги или комент, второе наж. закрыт. форму
  var closeEscHandler = function (evt) {
    switch (true) {
      case evt.key === 'Escape' && evt.target.type === 'radio':
        for (var i = 0; i < window.selector.effectPreview.length; i++) {
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
        hideDialogBox();
        return;
    }
  };

  // D.1.3 Хэндлер для закртыия по rkbre
  var closeClickHandler = function () {
    hideDialogBox();
  };

  window.selector.uploadBtn.addEventListener('change', showDialogBoxHandler);
  document.addEventListener('keydown', closeEscHandler);
  crossButton.addEventListener('click', closeClickHandler);
})();
