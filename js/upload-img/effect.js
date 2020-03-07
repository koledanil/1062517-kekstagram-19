'use strict';
// переключение между эффектами фотки
(function () {
  var applyEffectsHandler = function (evt) {
    window.selector.imgPreview.removeAttribute('class');
    window.selector.imgPreview.style.filter = '';
    window.selector.pin.style.left = 453 + 'px';
    window.selector.depth.style.width = 453 + 'px';
    var eventTarget = evt.target;
    if (eventTarget.value !== 'none') {
      window.selector.imgPreview.classList.add('effects__preview--' + eventTarget.value);

      if (window.selector.sliderTag.classList.contains !== 'hidden') {
        window.selector.sliderTag.classList.remove('hidden');

        switch (true) {
          case (eventTarget.value === 'chrome'):
            window.selector.effectLevelForm.value = 1;
            return;

          case (eventTarget.value === 'sepia'):
            window.selector.effectLevelForm.value = 1;
            return;

          case (eventTarget.value === 'marvin'):
            window.selector.effectLevelForm.value = 100;
            return;

          case (eventTarget.value === 'phobos'):
            window.selector.effectLevelForm.value = 3;
            return;

          case (eventTarget.value === 'heat'):
            window.selector.effectLevelForm.value = 3;
            return;
        }
        // ^^^ свитч устанавливает значения для кейса когда ты эффект выбрал (сепия например) и сразу нажал отправить
        // в это случае на сервер уйдет название эффекта и макс значение. Если ползунок будет двигаться, то соотв.
        // что значение эффекта будет другим (см SL.1)
      }
    } else {
      window.selector.sliderTag.classList.add('hidden');
      window.selector.effectLevelForm.value = 0;
    }
  };
  window.selector.effectList.addEventListener('change', applyEffectsHandler);
})();
