'use strict';
// V.3 Поиск элементов разметки для кода
// SCALE_SELECTOR
// Находим тэги увеличения масштаба
var imgPreview = document.querySelector('.img-upload__preview').querySelector('img'); // изображение
var zoomButtons = document.querySelector('.img-upload__scale'); // родитель кнопок
var zoomStorage = document.querySelector('.scale__control--value'); // отображает значение масштаба
var zoomOutButton = document.querySelector('.scale__control--smaller'); // уменьшаем масштаб
var zoomInButton = document.querySelector('.scale__control--bigger'); // увеличиваем масштаб


// DIALOG_SELECTOR
// Находим тэги увеличения масштаба
var body = document.querySelector('body'); // поиск бади, нужен для блокировки скролла
var clickedElement = document.querySelector('#upload-select-image');
var dialogBox = document.querySelector('.img-upload__overlay');
var filePicker = document.querySelector('.img-upload__input');
var crossButton = document.querySelector('.cancel');
var uploadBtnIpload = document.querySelector('#upload-select-image');

// из закрытия окна
var counterPlace = document.querySelector('#symbol_counter'); // находим каунтер
var tagErrPlaceUl = document.querySelector('#tag-error');// находим тэг для ошибок заполнения поля тэг
var tagInput = document.querySelector('.text__hashtags');
var textArea = document.querySelector('.text__description');
var effectPreview = document.querySelectorAll('.effects__radio');

// SLIDER_SELECTOR
var sliderTag = document.querySelector('.img-upload__effect-level');
var lineEmpty = sliderTag.querySelector('.effect-level__line');
var depth = sliderTag.querySelector('.effect-level__depth');
var pin = sliderTag.querySelector('.effect-level__pin');
var effectLevelForm = document.querySelector('.effect-level__value');

// EFFECT_SELECTRO
var effectList = document.querySelector('.effects__list');

// TAG_SELECTOR
var tagErrTemplate = document.querySelector('#error-item').content.querySelector('li'); // детеныши ошибок

// TEXTAREA_SELECTOR
var submitButton = document.querySelector('#upload-submit');

// SUBMIT_SELECTOR
var formUpldImg = document.querySelector('.img-upload__text');

// PHOTO_PAGE
var imagePlace = document.querySelector('.pictures');

// PREVIEW_SELECTOR.JS
var imgСommentUl = document.querySelector('.social__comments');
var imgСommentLi = imgСommentUl.querySelector('.social__comment');
var bigPicture = document.querySelector('.big-picture');
var imgPicture = bigPicture.querySelector('img');
var imgLike = bigPicture.querySelector('.likes-count');
var imgComment = bigPicture.querySelector('.comments-count');
var imgDescription = bigPicture.querySelector('.social__caption');
var commentCounter = document.querySelector('.social__comment-count');
var commentsLoader = document.querySelector('.comments-loader');
var sectionPictures = document.querySelector('.pictures');
var crossBtnUserPic = document.querySelector('.big-picture__cancel');
var commentUserPhInput = document.querySelector('.social__footer-text');

// //////////////////////////////////////////////////////////////////

// C.1 генератор случайных чисел в зад. диапазане
var getRandomNumber = function (min, max) {
  var randomNumberLastName = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumberLastName);
};

// С.2 Функция нахождения темплейта и нужного тега в нем
var getTemplateFromMarkup = function (tagTemplate, tagInTemplate) {
  var foundTemplatePhoto = document.querySelector(tagTemplate).content.querySelector(tagInTemplate);
  var templatePhoto = foundTemplatePhoto.cloneNode(true);
  return templatePhoto;
};

// DATAGEN.JS
// Данные, которые используются для отображения фоток и так далее.
(function () {
  // D.1 Создает массив КОММЕНТАРИЕВ (аватар автора, текст и имя), который потом будет записан в D.2 строка 240
  var createComment = function () {
    var commentStorage = [];
    for (var i = 0; i < getRandomNumber(window.constant.PHOTO_RULES.COMMENT.MIN, window.constant.PHOTO_RULES.COMMENT.MAX); i++) {
      var randomAvatar = getRandomNumber(window.constant.PHOTO_RULES.NAME_AVATAR.MIN, window.constant.PHOTO_RULES.NAME_AVATAR.MAX);
      var randomText = getRandomNumber(0, window.constant.PHOTO_RULES.COMMENT.MAX_COMMENT_TEMPLATE);
      var randomName = getRandomNumber(0, window.constant.PHOTO_RULES.NAME_AVATAR.MAX_NAME_TEMPLATE);
      commentStorage [i] = {
        avatarComment: 'img/avatar-' + randomAvatar + '.svg',
        text: window.placeholderData.photoComment[randomText],
        name: window.placeholderData.nameTemplate[randomName]
      }; // end comments [i]
    } // end for
    return commentStorage;
  };

  // D.2 Создает финальный массив для фотки (урл, опис, лайки, коменты (вызывает функцию D.1))
  var getPhoto = function () {
    var photoStorage = [];
    for (var i = 0; i < window.constant.PHOTO_RULES.PHOTO.COUNT; i++) {
      var randomLike = getRandomNumber(window.constant.PHOTO_RULES.PHOTO.LIKE.MIN, window.constant.PHOTO_RULES.PHOTO.LIKE.MAX);
      var randomDescription = getRandomNumber(0, window.constant.PHOTO_RULES.PHOTO.DECRIPTION_AMOUNT);
      var randomAvatar = getRandomNumber(window.constant.PHOTO_RULES.NAME_AVATAR.MIN, window.constant.PHOTO_RULES.NAME_AVATAR.MAX);

      photoStorage [i] = {
        url: 'photos/' + (i + 1) + '.jpg',
        description: window.placeholderData.photoDescription[randomDescription],
        like: randomLike,
        avatarOwner: 'img/avatar-' + randomAvatar + '.svg',
        comment: createComment()
      };
    } // end for
    return photoStorage;
  };

  window.preparedPhoto = getPhoto();
})(); // end iife

// PHOTPAGE.JS
// P.1 Записываем данные фотки в разметку для одной шутки
var fragment = document.createDocumentFragment();

var writeInfoPhoto = function (element, index) {
  var foundTemplate = getTemplateFromMarkup('#picture', '.picture');
  var infoContainer = foundTemplate.querySelector('.picture__info'); // контейнер для коментов и лайков
  var pathPicture = foundTemplate.querySelector('.picture__img');

  foundTemplate.setAttribute('data-id', index);
  infoContainer.querySelector('.picture__likes').textContent = element.like;
  infoContainer.querySelector('.picture__comments').textContent = element.comment.length;
  pathPicture.src = element.url;
  return foundTemplate;
};
// P.2 На основе P.1 формируем и крепим фотки
var showPhotos = function () {
  for (var i = 0; i < window.preparedPhoto.length; i++) {
    fragment.appendChild(writeInfoPhoto(window.preparedPhoto[i], i));
  }
  imagePlace.appendChild(fragment);
};
showPhotos(window.preparedPhoto);

// UTIL.JS
// U.1 Делает элемент видимым
(function () {
  window.showElement = function (element) {
    element.classList.remove('hidden');
  };

  // U.2 Скрывает элемент
  window.hideElement = function (element) {
    element.classList.add('hidden');
  };

  // U.3 Блокировка действия по умолчанию
  window.preventActionHandler = function (evt) {
    evt.preventDefault();
  };
})();

// window.util.msgName('Жорж');

// DIALOG.JS
// D.1 Функция открывает диалоговое окно по изменению поля файл.
(function () {
  var showDialogBoxHandler = function () {
    window.showElement(dialogBox);
    body.classList.add('modal-open');
    filePicker.blur();
  };
  clickedElement.addEventListener('change', showDialogBoxHandler);
})();

// D.2 Функция закрывает диалоговое окно по клику на керстик и ESC
(function () {
  var resetForm = function () {
    // переменные imgPreview zoomOutButton zoomInButton --- scale_selector.js
    // переменные counterPlace tagErrPlaceUl tagInput textArea --- DIALOG_SELECTOR.JS
    imgPreview.removeAttribute('class');
    counterPlace.innerHTML = 'Введено 0 из 140 символов';
    counterPlace.classList.add('hidden');
    window.counterSymbol = 0;

    imgPreview.style = 'transform: 0'; // сбиваем масштаб фотки
    zoomOutButton.disabled = false; // сбиваем псевдо с увелич, чтоб кнопка стала активной
    zoomInButton.disabled = false;// сбиваем псевдо с уменьше, чтоб кнопка стала активной

    textArea.classList.remove('border-error'); // убираем обводку  текстового поля

    window.constant.ADD_PHOTO_RULES.special.validityTag = true; // обнуляем флаг для инпута тэгов, необходимо для S.1
    window.constant.ADD_PHOTO_RULES.special.validityTextArea = true; // обнуляем флаг для комента, необходимо для S.1
    document.title = window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE; // возвращаем исходное значение тайтла, использ в S.2
    tagInput.classList.remove('border-error');
    tagErrPlaceUl.innerHTML = ''; // затираем мамку ошибок (фн.H.3)

    zoomInButton.disabled = true; // лочим зум.

    sliderTag.classList.add('hidden'); // скрываем ползунок эффекта
  };

  window.hideDialogBox = function () {
    window.hideElement(dialogBox);
    body.classList.remove('modal-open');
    uploadBtnIpload.reset();
    resetForm();
  };

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
        tagInput.blur();
        return;

      case evt.key === 'Escape' && evt.target.type === 'textarea':
        textArea.blur();
        return;
      case evt.key === 'Escape':
        window.hideDialogBox();
        resetForm();
        return;
    }
  };

  document.addEventListener('keydown', closeEscHandler);
  crossButton.addEventListener('click', window.hideDialogBox);
})();


// SCALE.JS
// Изменение масштаба изобаржения
(function () {
  var newValaue;
  var scaleValue;
  zoomInButton.disabled = true; // октлючаем кнопку зума при 100%

  // SC.2 Изменяем масштаб изображения туда и сюда
  var scaleImage = function (evt) {
    switch (true) {
      case evt.target.className === 'scale__control  scale__control--smaller':
        newValaue = parseInt(zoomStorage.value, 10) - window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          zoomOutButton.disabled = true;
        }
        if (parseInt(zoomStorage.value, 10) < window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          zoomInButton.disabled = false;
        }
        return;

      case evt.target.className === 'scale__control  scale__control--bigger':
        newValaue = parseInt(zoomStorage.value, 10) + window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          zoomInButton.disabled = true;
        }
        if (parseInt(zoomStorage.value, 10) > window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          zoomOutButton.disabled = false;
        }
        return;
    } // switch
  };

  zoomButtons.addEventListener('click', scaleImage);
  // window.addEventListener('mousedown', preventDragImage); // отключает случайное выделение фотки
})(); // end iife s1

// SLIDER.JS
// Полузнок эффектов
// SL.1  Функция оживляет слайдер и в зависимости от значений min/max выдает число при движении
(function () {
  pin.removeAttribute('style');
  depth.removeAttribute('style');
  var limitMovementX;
  var pinCoord;
  var slideOutput;
  var effectType;

  var movePinHandler = function (evt) {
    limitMovementX = {
      min: 0,
      max: lineEmpty.offsetLeft + lineEmpty.offsetWidth - pin.offsetWidth
    };
    pinCoord = pin.offsetLeft + evt.movementX;
    if (pinCoord < limitMovementX.min) {
      pinCoord = limitMovementX.min;
    }
    if (pinCoord >= limitMovementX.max) {
      pinCoord = limitMovementX.max;
    }
    slideOutput = pinCoord * 100 / limitMovementX.max;
    if (slideOutput < 0) {
      slideOutput = 0;
    }
    pin.style.left = pinCoord + 'px'; // меняем положение ползунка
    depth.style.width = pinCoord + 'px'; // меняем положение акцента
    var effectValue;
    switch (effectType) {
      case 'effects__preview--none':
        imgPreview.style.filter = 'none';
        effectLevelForm.value = 0;
        return;

      case 'effects__preview--chrome':
        effectValue = slideOutput / 100;
        imgPreview.style.filter = 'grayscale(' + effectValue + ')';
        effectLevelForm.value = effectValue;

        return;

      case 'effects__preview--sepia':
        effectValue = slideOutput / 100;
        imgPreview.style.filter = 'sepia(' + effectValue + ')';
        effectLevelForm.value = effectValue;
        return;

      case 'effects__preview--marvin':
        imgPreview.style.filter = 'invert(' + slideOutput + '%)';
        effectLevelForm.value = slideOutput;
        return;

      case 'effects__preview--phobos':
        effectValue = (slideOutput / 10) / 3;
        imgPreview.style.filter = 'blur(' + effectValue + 'px)';
        effectLevelForm.value = effectValue;
        return;

      case 'effects__preview--heat':
        if (slideOutput < 1) { // условие ограничивает минимальное значение 1 (а не 0, как стандартно выдает ползунок). Эффект не прнимает 0
          effectValue = 1;
        }
        effectValue = (slideOutput / 100 * 2) + 1;
        imgPreview.style.filter = 'brightness(' + effectValue + ')';
        effectLevelForm.value = effectValue;
        return;
    }

  };
  var pinMouseUpHandler = function () {
    document.removeEventListener('mousemove', movePinHandler);
    document.removeEventListener('mouseup', pinMouseUpHandler);
  };

  pin.addEventListener('mousedown', function () {
    effectType = imgPreview.getAttribute('class');


    pin.addEventListener('dragstart', window.preventActionHandler);
    document.addEventListener('mousemove', movePinHandler);
    document.addEventListener('mouseup', pinMouseUpHandler);
  });
})();

// EFFECTS.JS
// E.1 Переключает эффекты и применяет их к фото
(function () {
  var applyEffectsHandler = function (evt) {
    imgPreview.removeAttribute('class');
    imgPreview.style.filter = '';
    pin.style.left = 453 + 'px';
    depth.style.width = 453 + 'px';
    var eventTarget = evt.target;
    if (eventTarget.value !== 'none') {
      imgPreview.classList.add('effects__preview--' + eventTarget.value);

      if (sliderTag.classList.contains !== 'hidden') {
        window.showElement(sliderTag);

        switch (true) {
          case (eventTarget.value === 'chrome'):
            effectLevelForm.value = 1;
            return;

          case (eventTarget.value === 'sepia'):
            effectLevelForm.value = 1;
            return;

          case (eventTarget.value === 'marvin'):
            effectLevelForm.value = 100;
            return;

          case (eventTarget.value === 'phobos'):
            effectLevelForm.value = 3;
            return;

          case (eventTarget.value === 'heat'):
            effectLevelForm.value = 3;
            return;
        }
        // ^^^ свитч устанавливает значения для кейса когда ты эффект выбрал (сепия например) и сразу нажал отправить
        // в это случае на сервер уйдет название эффекта и макс значение. Если ползунок будет двигаться, то соотв.
        // что значение эффекта будет другим (см SL.1)
      }
    } else {
      window.hideElement(sliderTag);
      effectLevelForm.value = 0;
    }
  };
  effectList.addEventListener('change', applyEffectsHandler);
})();

// var effectLevelForm = document.querySelector('.effect-level__value');

// HASHTAG.JS
// Валидацмя тегов
(function () {
  window.constant.ADD_PHOTO_RULES.special.validityTag = true;
  window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE = document.title;
  // ^^^сохраняем в объект название страницы, оно будет использовано когда пользователь исправит
  // все ошибки и нам надо будет вернуть старое название страницы. Для работы S.2

  // H.1 Поиск дубликатов внутри массива и возвращение False или true, знак
  var findDuplicate = function (arr) {
    var lowerCaseArr = [];
    arr.forEach(function (element) {
      lowerCaseArr.push(element.toLowerCase());
    });
    var temp = {};
    var isDuplicate;
    temp = arr.filter(function (item) {
      return temp[item] || !(temp[item] = !0);
    });
    if (temp.length > 0) {
      isDuplicate = true;
      return isDuplicate;

    } else {
      isDuplicate = false;
      return isDuplicate;
    }
  };

  // H.2 Функция проверяет каждый тег на ошибки характ. для 1 тэга. Проверка к-ва тэгов и дубликатов идет отдельно
  var checkTag = function (tagStorage) {
    var checkedTag = {};
    checkedTag.isSharp = tagStorage[0] === '#';
    checkedTag.maxLength = tagStorage.length < 20;
    checkedTag.onlySharp = tagStorage.length === 1 && tagStorage === '#';
    checkedTag.regExp = window.constant.ADD_PHOTO_RULES.UPLD_TAGS.REG_EXP.test(tagStorage);
    return checkedTag;
  };

  // H.3 Функция првоеряет каждый тэг на ошибки согласно H.2
  // ==== H.3.1 Функция обнуляет эффекты ошибок, затирает разметку и меняет флаг валидности
  var resetTags = function () {
    tagErrPlaceUl.innerHTML = '';
    window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = 0;
    tagInput.classList.remove('border-error');
    window.constant.ADD_PHOTO_RULES.special.validityTag = true;
  };

  var checkAllTags = function () {
    resetTags();
    var enteredTags = tagInput.value.toLowerCase().split(' ').filter(function (item) {
      return item !== '';

    });

    // var tagErrTemplate = document.querySelector('#error-item').content.querySelector('li'); // детеныши ошибок
    // var tagErrPlaceUl = document.querySelector('#tag-error'); // мамка ошибок
    var errArray = []; // массив с перечнем дошибок для каждого тэга

    if (findDuplicate(enteredTags)) { // проверяем на дубликаты и записываем значение в массив.
      // проверка идет первой, чтобы юзер сразу видел есть дубликаты.
      window.constant.ADD_PHOTO_RULES.special.validityTag = false;
      errArray.push(window.constant.ADD_PHOTO_RULES.msg.errDuplicate);
      window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle + 1;
    } else {
      window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle - 1;
      window.constant.ADD_PHOTO_RULES.special.validityTag = true;
    }

    // проверка идет второй, чтобы также сразу его обрадывать.
    if (enteredTags.length > 5) {
      errArray.push(window.constant.ADD_PHOTO_RULES.msg.errAmount);
    }
    for (var i = 0; i < enteredTags.length; i++) { // цикл запускает проверку тэгов массива

      var checkedTag = checkTag(enteredTags[i]); // вот и стартанула фукнция H.2
      if (enteredTags[i].trim().length > 0 && checkedTag.isSharp !== true || checkedTag.maxLength !== true
      //  В данном условии записана глобальная проверка:
      //  1. Она начинается если итый тыг больше нуля
      //  2. Через или описаны все варианты ошибок, которые могут встретиться (на основании H.2)
      // Если это все выполняется то пойдет наполнение тэга ошибок
                                        || checkedTag.onlySharp !== false
                                        || checkedTag.regExp !== true) {
        tagErrPlaceUl.innerHTML = ''; // затирает мамку ошибок
        window.constant.ADD_PHOTO_RULES.special.validityTag = false; // ставит флаг о том что невалид и форма не отправится

        if (checkedTag.isSharp !== true && checkedTag !== '') {
          (errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errSharp));
        } // если нет решетки записываем ошибку и имя тэга

        if (checkedTag.maxLength !== true) {
          errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errLength);
        } // если тэг длиннее нормы

        if (checkedTag.regExp !== true) {
          errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errRegExp);
        } // если регулярка пролетела

        if (checkedTag.onlySharp !== false) {
          errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errToShort);
        } // если только решетка и все

        // ^^^Даннаый фор предназначен для того, чтобы понятно отобразить юзеру:
        // 1. какие ошибки есть
        // 2. в каких тэгах они есть
        // То бишь чтобы избежать такой стиуации что по одной ошибки вывводится, и после исправления одной идет другая
        // и пользователь не может понять сколько ошибок всего.
        window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = errArray.length; // вносим длинну тэга в значение в объекте, чтобы отобр. в тайтле S.2
      }
    } // end for var i
    for (var m = 0; m < errArray.length; m++) {
      var clonedElement = tagErrTemplate.cloneNode(true);
      clonedElement.textContent = errArray[m];
      clonedElement.classList.add('error-list__item');
      tagErrPlaceUl.appendChild(clonedElement);
      tagInput.classList.add('border-error');
    }
    // }
  }; // end check all tags

  tagInput.addEventListener('change', checkAllTags);

})(); // finished IIFE

// TEXTAREA.JS
(function () {
  // T.1 Поле текста автоматически подстраивается под контент + ресайз только по высоте (чтобы не рвало при вытягивании по ширине)
  var inputHandler = function (evt) {
    evt.target.style.height = 'auto';
    evt.target.style.height = (evt.target.scrollHeight) + 'px';
  };

  textArea.setAttribute('style', 'height:' + (textArea.scrollHeight) + 'px;overflow-y:auto;' + 'resize: vertical');
  textArea.addEventListener('input', inputHandler, false);
})();

(function () {
  // Т.2 Контроль длины поля ввода
  counterPlace.classList.add('text__counter'); // присваивет стиль каунтера по умолчанию
  window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;

  window.counterSymbol = 0;
  // Т.2.1 Отображает каунтер
  var showCounterHandler = function () {
    window.showElement(counterPlace);
  };
  // Т.2.2 Убирает каунтер
  var hideCounterHandler = function () {
    if (window.counterSymbol === undefined || window.counterSymbol === 0) {
      window.hideElement(counterPlace);
    }
  };
  // Т.2.3 Считает символы в тексте
  var checkLengthTextAreaHandler = function () {
    window.showElement(counterPlace);
    window.counterSymbol = textArea.value.length;
    counterPlace.classList.add('counter__default');
    counterPlace.textContent = 'Введено ' + window.counterSymbol + ' из' + ' 140 символов';
    if (window.counterSymbol === 0) {
      textArea.classList.remove('border-error');
    }

    if (window.counterSymbol >= window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH) {
      counterPlace.classList.add('counter-error');
      counterPlace.textContent = 'Достигли лимит в 140 символов 😶';
      window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle = 1; // используется для отображения количества ошибок в заголовке S.2
      textArea.classList.add('border-error');
      window.constant.ADD_PHOTO_RULES.special.validityTextArea = false;

    } else {
      // counterPlace.removeAttribute('class');
      counterPlace.classList.remove('counter-error');
      textArea.classList.remove('border-error');
      window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;
      window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle = 0; // затираем количество ощибок в заголовке
    }
  };
  textArea.addEventListener('focus', showCounterHandler); // Показывает счетчик символов при фокусе
  textArea.addEventListener('keyup', checkLengthTextAreaHandler); // Считает символы при вводе
  textArea.addEventListener('blur', hideCounterHandler); // Прячет счетчик при потери фокуса


  // SUBMIT.JS
  // S.1 Функция проверяет состояние проверки двух полей, и разрешает / запрещает отправку формы
  var checkRules = function (evt) {
    if (window.constant.ADD_PHOTO_RULES.special.validityTextArea === false || window.constant.ADD_PHOTO_RULES.special.validityTag === false) {
      evt.preventDefault();
    }
  };
  submitButton.addEventListener('click', checkRules);

  // S.2 Выводит количество ошибок в заголовок окна
  // Данная функция предназначена для отображения к-ва ошибок в поле теги и комент в ЗАГОЛОВКЕ СТРАНИЦЫ
  var errCounterTitle = function () {

    if (window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle > 0 || window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle > 0) { // если значение не нулевое (то есть есть ошибки), выполняется выввод в заголовк
      var sumErr = window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle + window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle;
      var endWord = '';
      if (sumErr === 1) {
        endWord = 'а';
      } else if (sumErr >= 2 && sumErr <= 4) {
        endWord = 'ки';
      } else if (sumErr >= 5) {
        endWord = 'ок';
      }
      document.title = '[' + sumErr + ' ошиб' + endWord + ']' + ' ' + window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE;

    } else {
      document.title = window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE; // обнуляем заголовок если ошибок нет.
    }
  };

  formUpldImg.addEventListener('change', errCounterTitle);

})();

// PREVIEW.JS
// Функция наполнения одной большой фотки с превьюшки
(function () {
  //  P.2.1 Клонирование и наполннение одной фотки
  var getCommentImg = function (data) {
    var cloneComment = imgСommentLi.cloneNode(true);
    var avatar = cloneComment.querySelector('img');
    var comment = cloneComment.querySelector('.social__text');

    avatar.src = data.avatarComment;
    avatar.alt = data.name;
    comment.textContent = data.text;

    return cloneComment;
  };

  // P.2.2 Отображение большой фотки со всем данными
  var showBigPhoto = function (item) {
    var fragmenBigPhoto = document.createDocumentFragment(); // сюда запис. детеныши-коментарии

    (function () {
      commentCounter.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      body.classList.add('modal-open');

    })(); // функция скрывает кнопку ЕЩЕ КОМЕНТОВ и СЧЕТЧИК

    bigPicture.classList.remove('hidden'); // отображает окно с большой фоткой
    imgPicture.src = item.url;
    imgLike.textContent = item.like;
    imgComment.textContent = item.comment.length;
    imgDescription.textContent = item.description;

    for (var i = 0; i < item.comment.length; i++) {
      fragmenBigPhoto.appendChild(getCommentImg(item.comment[i]));
    } // набиваем детенышами фрагмент

    imgСommentUl.innerHTML = ''; // очищаем от шаблона
    imgСommentUl.appendChild(fragmenBigPhoto); // вешаем их на место
  };

  // P.2.3 Поиск фотки по массиву и вывод на экран (запускает функцию P.2.2)
  var openClickHandler = function (evt) {
    var pictureContainer = evt.target.closest('.picture');
    if (pictureContainer) { // picture__likes picture__info picture__info добавлены, чтобы клик на всплывашке с лайками также открывал фотку
      var pictureId = pictureContainer.getAttribute('data-id');
      showBigPhoto(window.preparedPhoto[pictureId]);
    }
  }; // open handler

  // P.2.6 Функция при клике закрывает окно
  var closeClickPicHandler = function () {
    window.hideElement(bigPicture);
    body.classList.remove('modal-open');
    commentUserPhInput.value = ''; // очищает поле комента
  };

  var closeEscPicHandler = function (evt) {
    // console.log(evt.target.);
    switch (true) {
      case evt.key === 'Escape' && evt.target.type === 'text':
        commentUserPhInput.blur();
        return;

      case evt.key === 'Escape':
        window.hideElement(bigPicture);
        body.classList.remove('modal-open');
        commentUserPhInput.value = '';
        return;
    }
  };

  sectionPictures.addEventListener('click', openClickHandler);
  crossBtnUserPic.addEventListener('click', closeClickPicHandler);
  document.addEventListener('keydown', closeEscPicHandler);
})();
