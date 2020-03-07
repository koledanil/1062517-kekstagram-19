'use strict';
// V.3 Поиск элементов разметки для кода
// SCALE_SELECTOR

var lineEmpty = window.selector.sliderTag.querySelector('.effect-level__line');
var depth = window.selector.sliderTag.querySelector('.effect-level__depth');
var pin = window.selector.sliderTag.querySelector('.effect-level__pin');
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
        window.selector.imgPreview.style.filter = 'none';
        effectLevelForm.value = 0;
        return;

      case 'effects__preview--chrome':
        effectValue = slideOutput / 100;
        window.selector.imgPreview.style.filter = 'grayscale(' + effectValue + ')';
        effectLevelForm.value = effectValue;

        return;

      case 'effects__preview--sepia':
        effectValue = slideOutput / 100;
        window.selector.imgPreview.style.filter = 'sepia(' + effectValue + ')';
        effectLevelForm.value = effectValue;
        return;

      case 'effects__preview--marvin':
        window.selector.imgPreview.style.filter = 'invert(' + slideOutput + '%)';
        effectLevelForm.value = slideOutput;
        return;

      case 'effects__preview--phobos':
        effectValue = (slideOutput / 10) / 3;
        window.selector.imgPreview.style.filter = 'blur(' + effectValue + 'px)';
        effectLevelForm.value = effectValue;
        return;

      case 'effects__preview--heat':
        if (slideOutput < 1) { // условие ограничивает минимальное значение 1 (а не 0, как стандартно выдает ползунок). Эффект не прнимает 0
          effectValue = 1;
        }
        effectValue = (slideOutput / 100 * 2) + 1;
        window.selector.imgPreview.style.filter = 'brightness(' + effectValue + ')';
        effectLevelForm.value = effectValue;
        return;
    }

  };
  var pinMouseUpHandler = function () {
    document.removeEventListener('mousemove', movePinHandler);
    document.removeEventListener('mouseup', pinMouseUpHandler);
  };

  var preventActionHandler = function (evt) {
    evt.preventDefault();
  };

  pin.addEventListener('mousedown', function () {
    effectType = window.selector.imgPreview.getAttribute('class');


    pin.addEventListener('dragstart', preventActionHandler);
    document.addEventListener('mousemove', movePinHandler);
    document.addEventListener('mouseup', pinMouseUpHandler);
  });
})();

// EFFECTS.JS
// E.1 Переключает эффекты и применяет их к фото
(function () {
  var applyEffectsHandler = function (evt) {
    window.selector.imgPreview.removeAttribute('class');
    window.selector.imgPreview.style.filter = '';
    pin.style.left = 453 + 'px';
    depth.style.width = 453 + 'px';
    var eventTarget = evt.target;
    if (eventTarget.value !== 'none') {
      window.selector.imgPreview.classList.add('effects__preview--' + eventTarget.value);

      if (window.selector.sliderTag.classList.contains !== 'hidden') {
        window.selector.sliderTag.classList.remove('hidden');

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
      window.selector.sliderTag.classList.add('hidden');
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
    window.selector.tagErrPlaceUl.innerHTML = '';
    window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = 0;
    window.selector.tagInput.classList.remove('border-error');
    window.constant.ADD_PHOTO_RULES.special.validityTag = true;
  };

  var checkAllTags = function () {
    resetTags();
    var enteredTags = window.selector.tagInput.value.toLowerCase().split(' ').filter(function (item) {
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
        window.selector.tagErrPlaceUl.innerHTML = ''; // затирает мамку ошибок
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
      window.selector.tagErrPlaceUl.appendChild(clonedElement);
      window.selector.tagInput.classList.add('border-error');
    }
    // }
  }; // end check all tags

  window.selector.tagInput.addEventListener('change', checkAllTags);

})(); // finished IIFE

// TEXTAREA.JS
(function () {
  // T.1 Поле текста автоматически подстраивается под контент + ресайз только по высоте (чтобы не рвало при вытягивании по ширине)
  var inputHandler = function (evt) {
    evt.target.style.height = 'auto';
    evt.target.style.height = (evt.target.scrollHeight) + 'px';
  };

  window.selector.textArea.setAttribute('style', 'height:' + (window.selector.textArea.scrollHeight) + 'px;overflow-y:auto;' + 'resize: vertical');
  window.selector.textArea.addEventListener('input', inputHandler, false);
})();

(function () {
  // Т.2 Контроль длины поля ввода
  window.selector.counterPlace.classList.add('text__counter'); // присваивет стиль каунтера по умолчанию
  window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;

  window.counterSymbol = 0;
  // Т.2.1 Отображает каунтер
  var showCounterHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
  };
  // Т.2.2 Убирает каунтер
  var hideCounterHandler = function () {
    if (window.counterSymbol === undefined || window.counterSymbol === 0) {
      window.selector.counterPlace.classList.add('hidden');
    }
  };
  // Т.2.3 Считает символы в тексте
  var checkLengthTextAreaHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
    window.counterSymbol = window.selector.textArea.value.length;
    window.selector.counterPlace.classList.add('counter__default');
    window.selector.counterPlace.textContent = 'Введено ' + window.counterSymbol + ' из' + ' 140 символов';
    if (window.counterSymbol === 0) {
      window.selector.textArea.classList.remove('border-error');
    }

    if (window.counterSymbol >= window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH) {
      window.selector.counterPlace.classList.add('counter-error');
      window.selector.counterPlace.textContent = 'Достигли лимит в 140 символов 😶';
      window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle = 1; // используется для отображения количества ошибок в заголовке S.2
      window.selector.textArea.classList.add('border-error');
      window.constant.ADD_PHOTO_RULES.special.validityTextArea = false;

    } else {
      // counterPlace.removeAttribute('class');
      window.selector.counterPlace.classList.remove('counter-error');
      window.selector.textArea.classList.remove('border-error');
      window.constant.ADD_PHOTO_RULES.special.validityTextArea = true;
      window.constant.ADD_PHOTO_RULES.special.counterErrAreaTitle = 0; // затираем количество ощибок в заголовке
    }
  };
  window.selector.textArea.addEventListener('focus', showCounterHandler); // Показывает счетчик символов при фокусе
  window.selector.textArea.addEventListener('keyup', checkLengthTextAreaHandler); // Считает символы при вводе
  window.selector.textArea.addEventListener('blur', hideCounterHandler); // Прячет счетчик при потери фокуса


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
      window.selector.body.classList.add('modal-open');

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
      showBigPhoto(window.infoGenerator.getPhoto[pictureId]);
    }
  }; // open handler

  // P.2.6 Функция при клике закрывает окно
  var closeClickPicHandler = function () {
    bigPicture.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    commentUserPhInput.value = ''; // очищает поле комента
  };

  var closeEscPicHandler = function (evt) {
    // console.log(evt.target.);
    switch (true) {
      case evt.key === 'Escape' && evt.target.type === 'text':
        commentUserPhInput.blur();
        return;

      case evt.key === 'Escape':
        bigPicture.classList.add('hidden');
        window.selector.body.classList.remove('modal-open');
        commentUserPhInput.value = '';
        return;
    }
  };

  sectionPictures.addEventListener('click', openClickHandler);
  crossBtnUserPic.addEventListener('click', closeClickPicHandler);
  document.addEventListener('keydown', closeEscPicHandler);
})();
