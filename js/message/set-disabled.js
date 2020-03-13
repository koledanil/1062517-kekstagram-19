'use strict';

(function () {
// U.4 Disable btm TRUE +++
  var disableBtnSendXhr = function (btn) {
    var button = btn;
    button.disabled = true;
    document.title = '[Загрузка...] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    window.selector.submitBtn.textContent = 'Загрузка...';
    // делаем контролы неактивными на время загрухки
    window.selector.zoomButtons.disabled = true;
    window.selector.tagInput.disabled = true;
    window.selector.textArea.disabled = true;
    window.selector.submitBtn.classList.add('pulse-btn');
  };

  // U.4.1 Делаем все првеьюшки эффектов неактив на время загрузки фото
  var setDisabledEffectPreview = function () {
    // отключаем хувер на превьшках эффектов
    for (var k = 0; k < window.selector.effectPrw.length; k++) {
      window.selector.effectPrw[k].classList.remove('effects__label--hover');
      window.selector.effectPrw[k].classList.add('effects--disabled');
    }
    // делаем неактивными все раидо эффектов
    for (var i = 0; i < window.selector.effectRadio.length; i++) {
      window.selector.effectRadio[i].disabled = true;
    }
  };

  // U.4.2 Делаем все прочие КОНТРОЛЫ ПАСИВ
  var setDisabledOtherControlls = function () {
    var containerEffects = document.querySelector('.img-upload__effects');
    containerEffects.classList.add('effects--disabled');
    window.selector.crossButtonUpld.disabled = true;
    window.selector.crossButtonUpld.classList.remove('cancel--active');
    window.selector.crossButtonUpld.classList.add('cancel--disabled');
    window.selector.body.classList.add('img-upload__overlay---mouse-loading');
    window.selector.imgContainer.classList.add('img-opacity');
    window.selector.scaleContainer.classList.add('img-upload__scale--opacity');
  };

  // U.5 Disable btn FALSE
  var activeBtnSendXhr = function (btn) {
    var button = btn;
    button.disabled = false;
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    window.selector.submitBtn.textContent = 'Опубликовать';
    window.selector.submitBtn.classList.remove('pulse-btn');
    window.selector.zoomButtons.disabled = false;
    window.selector.tagInput.disabled = false;
    window.selector.textArea.disabled = false;
  };

  // U.5.1 Делаем все првеьюшки эффектов АКТИВ
  var setActiveEffectPreview = function () {
    // отключаем хувер на превьшках эффектов
    for (var k = 0; k < window.selector.effectPrw.length; k++) {
      window.selector.effectPrw[k].classList.add('effects__label--hover');
      window.selector.effectPrw[k].classList.remove('effects--disabled');
    }
    // делаем неактивными все раидо эффектов
    for (var i = 0; i < window.selector.effectRadio.length; i++) {
      window.selector.effectRadio[i].disabled = false;
    }
  };

  // U.5.2 Делаем все прочие КОНТРОЛЫ АКТИВ
  var setAcitveOtherControls = function () {
    var containerEffects = document.querySelector('.img-upload__effects');
    containerEffects.classList.remove('effects--disabled');
    window.selector.crossButtonUpld.disabled = false;
    window.selector.crossButtonUpld.classList.add('cancel--active');
    window.selector.crossButtonUpld.classList.remove('cancel--disabled');
    window.selector.body.classList.remove('img-upload__overlay---mouse-loading');
    window.selector.imgContainer.classList.remove('img-opacity');
    window.selector.scaleContainer.classList.remove('img-upload__scale--opacity');
  };

  // OUTPUT
  window.setdisabled = {
    disableBtnSendXhr: disableBtnSendXhr,
    setDisabledEffectPreview: setDisabledEffectPreview,
    setDisabledOtherControlls: setDisabledOtherControlls,
    activeBtnSendXhr: activeBtnSendXhr,
    setActiveEffectPreview: setActiveEffectPreview,
    setAcitveOtherControls: setAcitveOtherControls
  };
})();
