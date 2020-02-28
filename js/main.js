// /* eslint-disable no-console */
// /* eslint-disable no-shadow */
'use strict';
// 0 Контстанты, к-ые управляют кекстой
var RULES = {
  PHOTO: {
    COUNT: 25,
    LIKE: {
      MIN: 15,
      MAX: 200
    }
  },

  NAME_AVATAR: {
    MIN: 1,
    MAX: 6
  },

  COMMENT: {
    MIN: 1,
    MAX: 5
  },
};

// 0.1 Объект с массивом, который будет заполнен данными для всех фоток.
var photo = {
  ready: []
};

// 0.2 Объект с наборами заготовок для коментов и описаний фоток
var placeholderData = {
  nameTemplate: ['Чебупели', 'Жмых', 'Шоколадный заяц', 'Жорж', 'Ося', 'Насос', 'Дизель', 'Апанасовна', 'Шпротик'],

  photoComment: ['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    'Я просто выгляжу как лось, а в душе я бабочка.',
    'Все это видели?! Ибо я отказываюсь это повторять!',
    'Меня вообще-то сложно удивить... О! Синяя машина!',
    'Я сидел тихо, мирно. Потом проголодался. Дальше, как в тумане.',
    'Странно, тут заперто... Как будто нас уже ждали.',
    'Не пытайся сложить слова в предложения — не твоё это.',
    'Оставь меня, старушка, я в печали…',
    'Я, пожалуй, пойду. Потому что, знаете... хочу быть подальше отсюда.',
    'Как тебя вообще занесло в Испанский монастырь?',
    'Соблюдай акт воздержания против звуков.',
    'Как задолбали эти тупые правила: не есть кота, не бить посуду, не есть кота.',
    'Надо будет Любе сказать, чтоб наркотики пересчитала!',
    'И ты, очевидно, не так меня понял, раз так быстро согласился.'
  ],

  photoDescription: ['Давно хочу написать вирус. С чего начать?',
    'Главное посередине не встретиться',
    'У меня такие зубы, что приходится говорить вместо я вылечил - я починил.',
    '- понимаешь, похоже на то, что я ей симпатичен. Ну а она мне... как это будет, наоборот...',
    'не могу избавиться от ощущения что наговнокодил',
    'Мой Т9 считает меня женщиной приличной, но прожорливой, поэтому, когда я пишу «садо-мазо», заботливо поправляет меня на «сало-мало».',
    'Даёшь сурдопереводчика в нижнем углу экрана! Пускай жестами текст передает.',
    'Порадуй меня. Или хотя бы не сильно расстрой.',
    'Общительный я... и пьющий.',
    'Реальный мир для тех, кто не может представить что-то получше.',
    'Давно хочу написать вирус. С чего начать?',
    'Ты поможешь мне, а я за это приму помощь от тебя!',
    'Как много интересного вы говорите! Как жаль, что это меня мало интересует.',
    'Не стоит горевать. Люди постоянно умирают. Как знать, может и ты завтра проснешься мертвым.',
    'Иногда я лежу в постели и думаю, что ничто не заставит меня встать. А потом чувствую, как подо мной становится мокро, и понимаю, что ошибался.',
    'За алкоголь! Причину и решение всех проблем.',
    'Психиатр нам не нужен. Мы и так знаем, что наш ребенок со сдвигом.',
    'Мардж, не хочу тебя пугать, но, кажется, я тебя люблю...',
    'Я сделаю для тебя все, что угодно... если это не слишком сложно.',
    'Если ты счастлив и осознаешь это, выругайся.',
    'В католицизме больше глупых правил, чем в видеопрокате.',
    'Радиация убивает только тех, кто ее боится.',
    'Я белый мужчина от 18 до 49. И все слушают меня, какую бы ахинею я ни нес.',
    'Попытка — первый шаг к провалу.',
    'Атомный реактор — как женщина. Нужно только прочитать инструкцию и вовремя нажать на правильную кнопку.',
    'Психиатр нам ни к чему. Мы и сами знаем, что ребенок у нас со сдвигом.',
    'Пение — это низшая форма общения.',
    'В спорте главное не победа. Главное — чтобы удалось напиться!',
    'Всю мою жизнь я мечтал об одном — достичь всех своих целей.',
    'Не может ведь бог успевать повсюду, правда?',
    'Не бывает невкусных пончиков.',
    'Можно работать на нескольких работах одновременно и все равно быть лентяем.',
    'Я не стану лукавить: быть отцом непросто. Не то что матерью.',
    'Всегда лучше наблюдать за процессом, чем делать что-то самому.',
    'В моем доме мы подчиняемся только законам термодинамики.',
    'Жизнь — это просто куча всякой фигни, которая происходит.',
    'Во Франции никто не зовет меня «жирным придурком». Здесь я гурман!',
    'Дети — те же обезьяны. Только шума от них больше.',
    'Я вижу улыбки своих детей. И понимаю, что они затеяли что-то недоброе.'
  ]
};

// C.1 генератор случайных чисел в зад. диапазане
var getRandomNumber = function (min, max) {
  var randomNumberLastName = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumberLastName);
};

// С.2 Функция сортирует в случайном порядке любой массив. Используется чтобы исключить повторения при генерации адрсов фоток
// и описаний к фоткам
function shuffleRandomNumber(array) {
  var currentIndex = array.length; var temporaryValue; var randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// С.3 Функция нахождения темплейта и нужного тега в нем
var getTemplateFromMarkup = function (tagTemplate, tagInTemplate) {
  var foundTemplatePhoto = document.querySelector(tagTemplate).content.querySelector(tagInTemplate);
  var templatePhoto = foundTemplatePhoto.cloneNode(true);
  return templatePhoto;
};

// C.4 Генерирует массив к-ом равным к-во фоток, и перемешеивает числа между собой посредством С.2
var getUniqueNumber = function () {
  var uniqueNumbers = [];

  for (var i = 1; i <= RULES.PHOTO.COUNT; i++) {
    uniqueNumbers.push(i);
    shuffleRandomNumber(uniqueNumbers);
  }
  return uniqueNumbers; // ограничитель количества выводов
};

// 1.2 Функция в случайном порядке присваивает количество коментов к каждой фотке,
// а потом на основании этого берет заготовки и формирует массив с коментами
var getCommentNumber = function () {
  var commentNumbers = [];
  for (var i = 0; i < RULES.PHOTO.COUNT; i++) {
    commentNumbers.push(getRandomNumber(RULES.COMMENT.MIN, RULES.COMMENT.MAX));
    var commentBuffer = [];
    for (var j = 0; j < commentNumbers[i]; j++) {
      var randomCommentNumber = getRandomNumber(1, placeholderData.photoComment.length);
      var comment = placeholderData.photoComment[randomCommentNumber];
      commentBuffer.push(comment);
    }
  }
  return commentBuffer;
};

// 1.3 Функция наполняет поля ОДНОЙ фотки (кроме адреса(1.3.2) и подписи(1.3.3))
var getPhotoFeature = function () {
  var readyPhoto = {};
  // Записывается для одной фотки имя и аватарка юзера
  var randomNumber = getRandomNumber(RULES.NAME_AVATAR.MIN, RULES.NAME_AVATAR.MAX);
  readyPhoto.name = placeholderData.nameTemplate[randomNumber];
  readyPhoto.avatar = 'img/avatar-' + randomNumber + '.svg';
  readyPhoto.like = getRandomNumber(RULES.PHOTO.LIKE.MIN, RULES.PHOTO.LIKE.MAX);
  readyPhoto.comment = getCommentNumber(RULES.PHOTO.COUNT); // выполняет функцию 1.2
  return readyPhoto;
};

// 1.3.1 Функция наполнения ВСЕХ фоток на базе 1.3
var getReadyPhoto = function () {
  var filledPhoto = [];
  for (var k = 0; k < RULES.PHOTO.COUNT; k++) {
    filledPhoto.push(getPhotoFeature(k));
  }
  return filledPhoto;
};


// 1.3.2 Функция записывает после 1.3.1 адрес фотки и подпись к фотке
var getFulllUrl = function (filledPhoto) {
  var sortedNumbers = getUniqueNumber(RULES.PHOTO.COUNT);
  for (var l = 0; l < RULES.PHOTO.COUNT; l++) {
    filledPhoto[l].url = 'photos/' + sortedNumbers[l] + '.jpg';
    filledPhoto[l].desceription = placeholderData.photoDescription[l];
  }
  return filledPhoto;
};

// 1.4 Функция записи в разметку количества лайков, коментов и ссылку к одной фотке
var writeLikeCommentSrcPhoto = function (readyPhoto) {
  var foundTemplate = getTemplateFromMarkup('#picture', '.picture');
  var pictureInfo = foundTemplate.querySelector('.picture__info');
  pictureInfo.querySelector('.picture__likes').textContent = readyPhoto.like;
  pictureInfo.querySelector('.picture__comments').textContent = readyPhoto.comment.length;

  var pictureSrc = foundTemplate.querySelector('.picture__img');
  pictureSrc.src = readyPhoto.url;

  return foundTemplate;
};

// 1.4.1 Функция генерирует готовые данные для фоток
var showAllPhoto = function (readyPhoto) {
  var connectimgDragged = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < readyPhoto.length; i++) {
    fragment.appendChild(writeLikeCommentSrcPhoto(readyPhoto[i]));
  }
  connectimgDragged.appendChild(fragment);
};

photo.ready = getReadyPhoto();
getFulllUrl(photo.ready);
showAllPhoto(photo.ready);

// VAR.JS
// Содержит глобальные штуки
// V.1 Массив содержит правила для сайта window.ADD_PHOTO_RULES
window.ADD_PHOTO_RULES = {
  UPLD_COMMENTS: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 140
  },
  UPLD_TAGS: {
    DIVIDER_SYMBOL: '#',
    REG_EXP: /(^)(#[a-zA-Zа-яА-Я\d]*$)/ig,
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
    MAX_AMOUNT_TAG: 5
  },
  ZOOM: {
    MIN: 25,
    MAX: 400,
    STEP: 25
  },
  msg: {
    errSharp: 'должен начинаться с символа #',
    errRegExp: 'должен быть без специальных символов\n',
    errLength: 'должен содержать от 2 до 20 символов включая #\n',
    errAmount: 'должно быть не более 5 тэгов',
    errDuplicate: 'Встречаются одинаковые тэги',
    errToShort: 'тэг не может содержать только #'
  },
  SPECIAL: {
    ERR_TAGS_TITLE: 0,
    ERR_AREA_TITLE: 0,
    ORIGINAL_TITLE: ''
    // ^^^ Здесь содержится:
    // 1. каунтер ошибок в инпуте тэгов
    // 2. каунтер ошибок в textarea (она у нас там одна)
    // 3. Оригинальное название страницы. Его мы возвращаем по закрытию формы или исправлении всех ошибок
    // нужны для работы S.2
  }
};

// UTIL.JS
// U.1 Делает элемент видимым
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

// U.4 Функция оживляет слайдер
// Так как у нас каждый эффект имеет свой слайдер и каждый эффект имеет свой
// диапазон входных значений (от 0 до 1 или 0 до 100), поэтому я создал функцию
// которая генерит типовой слайдер и через effectType позволяет выбрать формулу для
// выходного эффекта.
(function () {
  window.slider = function (sliderTag, minValue, maxValue, effectType) {
    var lineEmpty = sliderTag.querySelector('.effect-level__line');
    var depth = sliderTag.querySelector('.effect-level__depth');
    var pin = sliderTag.querySelector('.effect-level__pin');
    var output = sliderTag.querySelector('.effect-level__line');
    var limitMovementX;
    var pinCoord;
    output.value = minValue;

    var movePinHandler = function (evt) {
      limitMovementX = {
        min: 0, // эффект выключен
        max: lineEmpty.offsetLeft + lineEmpty.offsetWidth - pin.offsetWidth
      };
      pinCoord = pin.offsetLeft + evt.movementX;
      if (pinCoord < limitMovementX.min) {
        pinCoord = limitMovementX.min;
      }
      if (pinCoord > limitMovementX.max) {
        pinCoord = limitMovementX.max;
      }

      // Далее идет переключение между расчетом выхода для разных эффектов
      switch (effectType) {
        case 'marvin':
          output.value = Math.round(pinCoord * (maxValue - minValue) / limitMovementX.max);
          pin.style.left = pinCoord + 'px';
          depth.style.width = pinCoord + 'px';
          return;

        case 'sepia':
          output.value = pinCoord * (maxValue - minValue) / limitMovementX.max;

          pin.style.left = pinCoord + 'px';
          depth.style.width = pinCoord + 'px';
          return;
      }
    };

    var pinMouseUpHandler = function () {
      document.removeEventListener('mousemove', movePinHandler);
      document.removeEventListener('mouseup', pinMouseUpHandler);
    };

    pin.addEventListener('mousedown', function () {
      pin.addEventListener('dragstart', window.preventActionHandler);
      document.addEventListener('mousemove', movePinHandler);
      document.addEventListener('mouseup', pinMouseUpHandler);
    });
  };
}());

// U.4 Запред дефолтного действия
window.preventActionHandler = function (evt) {
  evt.preventDefault();
};

// DIALOG.JS
// D.1 Функция открывает диалоговое окно по изменению поля файл.
(function () {
  var body = document.querySelector('body');
  var clickedElement = document.querySelector('#upload-select-image');
  var dialogBox = document.querySelector('.img-upload__overlay');
  var filePicker = document.querySelector('.img-upload__input');

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
    var imgPreview = document.querySelector('.img-upload__preview')
                             .querySelector('img'); // находим картинку чтоб сбить масштаб

    var zoomInButton = document.querySelector('.scale__control--bigger'); // находим кнопку ув. масштаба
    var zoomOutButton = document.querySelector('.scale__control--smaller'); // находим кнопку ум. масштаба

    var restoreDefaultEffect = document.querySelector('.img-upload__preview').querySelector('img');
    restoreDefaultEffect.removeAttribute('class');

    var counterPlace = document.querySelector('#symbol_counter'); // находим каунтер

    var tagErrPlaceUl = document.querySelector('#tag-error');// находим тэг для ошибок заполнения поля тэг
    var tagInput = document.querySelector('.text__hashtags');
    var textArea = document.querySelector('.text__description');

    counterPlace.innerHTML = 'Введено 0 из 140 символов';
    counterPlace.classList.add('hidden');
    window.counterSymbol = 0;

    imgPreview.style = 'transform: 0'; // сбиваем масштаб фотки
    zoomInButton.disabled = false; // сбиваем псевдо с увелич, чтоб кнопка стала активной
    zoomOutButton.disabled = false;// сбиваем псевдо с уменьше, чтоб кнопка стала активной

    textArea.classList.remove('border-error'); // убираем обводку  текстового поля

    window.validityTag = true; // обнуляем флаг для инпута тэгов, необходимо для S.1
    window.validityTextArea = true; // обнуляем флаг для комента, необходимо для S.1
    document.title = window.ADD_PHOTO_RULES.SPECIAL.ORIGINAL_TITLE; // возвращаем исходное значение тайтла, использ в S.2
    tagInput.classList.remove('border-error');
    tagErrPlaceUl.innerHTML = ''; // затираем мамку ошибок (фн.H.3)
  };

  var body = document.querySelector('body');
  var crossButton = document.querySelector('.img-upload__cancel');
  var uploadButton = document.querySelector('#upload-select-image');
  var dialogBox = document.querySelector('.img-upload__overlay');

  window.hideDialogBox = function () {
    window.hideElement(dialogBox);
    body.classList.remove('modal-open');
    uploadButton.reset();
    resetForm();
  };

  var closeEscHandler = function (evt) {
    var tagInput = document.querySelector('.text__hashtags');
    var textArea = document.querySelector('.text__description');
    var effectPreview = document.querySelectorAll('.effects__radio');


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

      case evt.key === 'Escape' && evt.target.tagName === 'TEXTAREA':
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
// S.1 Перетягивание изображения во время зума в дополнение к скроллам
var dragImg = function (flag) {
  var imgContainer = document.querySelector('#imgContainer');
  var imgDragged = document.querySelector('#imgContainer-img');
  var leftCord = 0;
  var topCord = 0;
  var xCord = 0;
  var yCord = 0;

  switch (true) {
    case (flag === true):
      imgContainer.onmousedown = function (evt) {
        evt.preventDefault();
        xCord = evt.pageX;
        yCord = evt.pageY;

        var moveAt = function (evtY) {
          imgDragged.style.left = (leftCord + evtY.pageX - xCord) + 'px';
          imgDragged.style.top = (topCord + evtY.pageY - yCord) + 'px';
        };

        imgContainer.onmousemove = function (evtX) {
          moveAt(evtX);
        };

        imgContainer.onmouseleave = imgContainer.onmouseup = function () {
          leftCord = parseFloat(imgDragged.style.left);
          topCord = parseFloat(imgDragged.style.top);
          imgContainer.onmouseleave = null;
          imgContainer.onmousemove = null;
          imgContainer.onmouseup = null;
        };
      };
      return;

    case (flag === false):
      imgContainer.onmousedown = null;
      imgContainer.onmouseleave = null;
      imgContainer.onmousemove = null;
      imgContainer.onmouseup = null;
      return;
  }
};

// S.2 Увеличивает размер изображения по нажатию на +
(function () {
  var photoPreview = document.querySelector('.img-upload__preview');
  var imgPreview = photoPreview.querySelector('img');
  var divHidden = photoPreview.querySelector('div');
  var zoomOutButton = document.querySelector('.scale__control--bigger');
  var zoomInButton = document.querySelector('.scale__control--smaller');
  var zoomStorage = document.querySelector('.scale__control--value');
  var imgContainer = document.querySelector('#imgContainer');

  var zoomInHandler = function () {
    var newValaue = parseInt(zoomStorage.value, 10) + window.ADD_PHOTO_RULES.ZOOM.STEP;
    zoomStorage.value = newValaue + '%';

    var scaleValue = newValaue / 100;
    imgPreview.style = 'transform: scale(' + scaleValue + ')';
    divHidden.style = 'overflow: auto';
    // divHidden.style добавлен, так как без него изображение при зуме
    // выскакивает из контейнера. Поэтому я добавил в html доп. div и
    // ему присваиваю стиль, который скрывает излишки изображения и
    // показывает скролл внутри

    if (scaleValue > 1) { // если масштаб более 100 то передаем флаг и включаем таскание
      dragImg(true);
      imgContainer.classList.add('all-scroll'); // добавляем правильный стиль курсора
    }

    if (parseInt(zoomStorage.value, 10) === window.ADD_PHOTO_RULES.ZOOM.MAX) {
      zoomOutButton.disabled = true;
    }

    if (parseInt(zoomStorage.value, 10) > window.ADD_PHOTO_RULES.ZOOM.MIN) {
      zoomInButton.disabled = false;
    }
  };

  zoomOutButton.addEventListener('click', zoomInHandler); // закртывается слушатешль
})(); // закрывают самовызов.

// S.2 Уменьшает размер изображения по нажатию на -
(function () {
  var photoPreview = document.querySelector('.img-upload__preview');
  var imgPreview = photoPreview.querySelector('img');
  var zoomInButton = document.querySelector('.scale__control--smaller');
  var zoomOutButton = document.querySelector('.scale__control--bigger');
  var zoomStorage = document.querySelector('.scale__control--value');
  var imgContainer = document.querySelector('#imgContainer');

  var zoomOutHandler = function () {
    var newValaue = parseInt(zoomStorage.value, 10) - window.ADD_PHOTO_RULES.ZOOM.STEP;
    zoomStorage.value = newValaue + '%';

    var scaleValue = newValaue / 100;
    imgPreview.style = 'transform: scale(' + scaleValue + ')';

    imgContainer.addEventListener('mousedown', function (evt) {
      evt.preventDefault();
    }); // вытаски

    if (scaleValue === 1) { // если масштаб равен 100 то передаем флаг и ВЫКЛЮЧАЕМ таскание
      dragImg(false);
      imgContainer.classList.remove('all-scroll');
    }

    if (parseInt(zoomStorage.value, 10) === window.ADD_PHOTO_RULES.ZOOM.MIN) {
      zoomInButton.disabled = true;
    }
    if (parseInt(zoomStorage.value, 10) < window.ADD_PHOTO_RULES.ZOOM.MAX) {
      zoomOutButton.disabled = false;
    }
  };

  zoomInButton.addEventListener('click', zoomOutHandler); // закртывается слушатешль
})(); // закрывают самовызов.

// EFFECTS.JS
// E.1 Переключает эффекты и применяет их к фото
(function () {
  var photoPreview = document.querySelector('.img-upload__preview');
  var imgPreview = photoPreview.querySelector('img');
  var dialogBox = document.querySelector('.img-upload__overlay');
  var effectsVolume = dialogBox.querySelector('.img-upload__effect-level');
  var effectList = document.querySelector('.effects__list');
  var applyEffectsHandler = function (evt) {
    (function () {

      imgPreview.removeAttribute('class');
    })();

    var eventTarget = evt.target;

    if (eventTarget.value !== 'none') {
      imgPreview.classList.add('effects__preview--' + eventTarget.value);
      if (effectsVolume.classList.contains !== 'hidden') {
        window.showElement(effectsVolume);
      }
    } else {
      window.hideElement(effectsVolume);
    }
  };
  effectList.addEventListener('change', applyEffectsHandler);
})();

// E.2 Функция для оживляения ползунка
(function () {
  window.slider(document.querySelector('.img-upload__effect-level'), 0, 100, 'marvin');
})();


// HASHTAG.JS
// Валидацмя тегов
(function () {
  window.validityTag = true;
  var tagInput = document.querySelector('.text__hashtags');
  window.ADD_PHOTO_RULES.SPECIAL.ORIGINAL_TITLE = document.title;
  // ^^^сохраняем в объект название страницы, оно будет использовано когда пользователь исправит
  // все ошибки и нам надо будет вернуть старое название страницы. Для работы S.2

  // H.1 Поиск дубликатов внутри массива и возвращение False или true, знак
  var findDuplicate = function (arr) {
    var temp = {};
    var isDuplicate;
    temp = arr.filter(function (a) {
      return temp[a] || !(temp[a] = !0);
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
    checkedTag.maxLength = tagStorage.length > 2 && tagStorage.length < 20;
    checkedTag.onlySharp = tagStorage.length === 1 && tagStorage === '#';
    checkedTag.regExp = /[^a-zA-Z0-9]/.test(tagStorage.substring(1, (tagStorage.length)));
    return checkedTag;
  };

  // H.3 Функция првоеряет каждый тэг на ошибки согласно H.2
  var checkAllTags = function () {
    var enteredTags = tagInput.value.split(' ');

    var tagErrTemplate = document.querySelector('#error-item').content.querySelector('li'); // детеныши ошибок
    var tagErrPlaceUl = document.querySelector('#tag-error'); // мамка ошибок
    var errArray = []; // массив с перечнем дошибок для каждого тэга

    if (findDuplicate(enteredTags)) { // проверяем на дубликаты и записываем значение в массив.
      // проверка идет первой, чтобы юзер сразу видел есть дубликаты.

      errArray.push(window.ADD_PHOTO_RULES.msg.errDuplicate);
    }
    // проверка идет второй, чтобы также сразу его обрадывать.
    if (enteredTags.length > 5) {

      errArray.push(window.ADD_PHOTO_RULES.msg.errAmount);
    }
    for (var i = 0; i < enteredTags.length; i++) { // цикл запускает проверку тэгов массива
      var checkedTag = checkTag(enteredTags[i]); // вот и стартанула фукнция H.2
      if (enteredTags[i].length > 0 && checkedTag.isSharp !== true || checkedTag.maxLength !== true
      //  В данном условии записана глобальная проверка:
      //  1. Она начинается если итый тыг больше нуля
      //  2. Через или описаны все варианты ошибок, которые могут встретиться (на основании H.2)
      // Если это все выполняется то пойдет наполнение тэга ошибок
                                      || checkedTag.onlySharp !== false
                                      || checkedTag.regExp !== false) {
        tagErrPlaceUl.innerHTML = ''; // затирает мамку ошибок
        window.validityTag = false; // ставит флаг о том что невалид и форма не отправится
        if (checkedTag.isSharp !== true) {
          errArray.push(enteredTags[i] + ' ' + window.ADD_PHOTO_RULES.msg.errSharp);
        } // если нет решетки записываем ошибку и имя тэга

        if (checkedTag.maxLength !== true) {
          errArray.push(enteredTags[i] + ' ' + window.ADD_PHOTO_RULES.msg.errLength);
        } // если тэг длиннее нормы

        if (checkedTag.regExp !== false) {
          errArray.push(enteredTags[i] + ' ' + window.ADD_PHOTO_RULES.msg.errRegExp);
        } // если регулярка пролетела

        if (checkedTag.onlySharp !== false) {
          errArray.push(enteredTags[i] + ' ' + window.ADD_PHOTO_RULES.msg.errToShort);
        } // если только решетка и все

        for (var m = 0; m < errArray.length; m++) {
          var clonedElement = tagErrTemplate.cloneNode(true);
          clonedElement.textContent = errArray[m];
          clonedElement.classList.add('error-list__item');
          tagErrPlaceUl.appendChild(clonedElement);
          tagInput.classList.add('border-error');
        }
        // ^^^Даннаый фор предназначен для того, чтобы понятно отобразить юзеру:
        // 1. какие ошибки есть
        // 2. в каких тэгах они есть
        // То бишь чтобы избежать такой стиуации что по одной ошибки вывводится, и после исправления одной идет другая
        // и пользователь не может понять сколько ошибок всего.
        window.ADD_PHOTO_RULES.SPECIAL.ERR_TAGS_TITLE = errArray.length; // вносим длинну тэга в значение в объекте, чтобы отобр. в тайтле S.2

      } else { //  if (checkedTag.isSharp
        if (errArray.length === 0) {
          tagErrPlaceUl.innerHTML = '';
          window.ADD_PHOTO_RULES.SPECIAL.ERR_TAGS_TITLE = 0;
          tagInput.classList.remove('border-error');
          window.validityTag = true;
          // Этот иф проверяет массив ошибок на длинну. Если массив пустой значит ошибок нет значит можно детенышей затереть.
        }
      }
    } // end for var i
  }; // end check all tags

  tagInput.addEventListener('change', checkAllTags);

})(); // finished IIFE


// TEXTAREA.JS
(function () {
  // T.1 Поле текста автоматически подстраивается под контент + ресайз только по высоте (чтобы не рвало при вытягивании по ширине)

  var textArea = document.querySelector('.text__description');
  var inputHandler = function (evt) {
    evt.target.style.height = 'auto';
    evt.target.style.height = (evt.target.scrollHeight) + 'px';
  };

  textArea.setAttribute('style', 'height:' + (textArea.scrollHeight) + 'px;overflow-y:auto;' + 'resize: vertical');
  textArea.addEventListener('input', inputHandler, false);

})();

(function () {
  // Т.2 Контроль длины поля ввода
  var counterPlace = document.querySelector('p');
  var textArea = document.querySelector('.text__description');
  var submitButton = document.querySelector('#upload-submit');
  counterPlace.classList.add('text__counter'); // присваивет стиль каунтера по умолчанию
  window.validityTextArea = true;

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

    if (window.counterSymbol >= window.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH) {
      counterPlace.classList.add('counter-error');
      counterPlace.textContent = 'Достигнут лимит в 140 символов 😶';
      window.ADD_PHOTO_RULES.SPECIAL.ERR_AREA_TITLE = 1; // используется для отображения количества ошибок в заголовке S.2
      textArea.classList.add('border-error');
      window.validityTextArea = false;

    } else {
      // counterPlace.removeAttribute('class');
      counterPlace.classList.remove('counter-error');
      textArea.classList.remove('border-error');
      window.validityTextArea = true;
      window.ADD_PHOTO_RULES.SPECIAL.ERR_AREA_TITLE = 0; // затираем количество ощибок в заголовке
    }
  };
  textArea.addEventListener('focus', showCounterHandler); // Показывает счетчик символов при фокусе
  textArea.addEventListener('keyup', checkLengthTextAreaHandler); // Считает символы при вводе
  textArea.addEventListener('blur', hideCounterHandler); // Прячет счетчик при потери фокуса


  // SUBMIT.JS
  // S.1 Функция проверяет состояние проверки двух полей, и разрешает / запрещает отправку формы
  var checkRules = function (evt) {
    if (window.validityTextArea === false || window.validityTag === false) {
      evt.preventDefault();
    }
  };
  submitButton.addEventListener('click', checkRules);

  // S.2 Выводит количество ошибок в заголовок окна
  // Данная функция предназначена для отображения к-ва ошибок в поле теги и комент в ЗАГОЛОВКЕ СТРАНИЦЫ
  var formUpldImg = document.querySelector('.img-upload__text');
  var errCounterTitle = function () {

    if (window.ADD_PHOTO_RULES.SPECIAL.ERR_TAGS_TITLE > 0 || window.ADD_PHOTO_RULES.SPECIAL.ERR_AREA_TITLE > 0) { // если значение не нулевое (то есть есть ошибки), выполняется выввод в заголовк
      var sumErr = window.ADD_PHOTO_RULES.SPECIAL.ERR_TAGS_TITLE + window.ADD_PHOTO_RULES.SPECIAL.ERR_AREA_TITLE;
      var endWord = '';
      if (sumErr === 1) {
        endWord = 'а';
      } else if (sumErr >= 2 && sumErr <= 4) {
        endWord = 'ки';
      } else if (sumErr >= 5) {
        endWord = 'ок';
      }
      document.title = '[' + sumErr + ' ошиб' + endWord + ']' + ' ' + window.ADD_PHOTO_RULES.SPECIAL.ORIGINAL_TITLE;

    } else {
      document.title = window.ADD_PHOTO_RULES.SPECIAL.ORIGINAL_TITLE; // обнуляем заголовок если ошибок нет.
    }
  };

  formUpldImg.addEventListener('change', errCounterTitle);

})();


// ЧЕРНОВИК
// // Нужно использовать эту версию.
// var PHOTO_RULES = {
//   PHOTO: {
//     COUNT: 25,
//     DECRIPTION_AMOUNT: 10,

//     LIKE: {
//       MIN: 15,
//       MAX: 200
//     }
//   },

//   NAME_AVATAR: {
//     MIN: 1,
//     MAX: 6,
//     MAX_NAME_TEMPLATE: 6
//   },

//   COMMENT: {
//     MIN: 1,
//     MAX: 5,
//     MAX_COMMENT_TEMPLATE: 10,
//   },
// };

// //DATA.JS
// // Данные, которые используются для отображения фоток и так далее.
// (function () {
//   // D.1 Создает массив с коментами (аватар автора, текст и имя)
//   var createComment = function () {
//     var commentStorage = [];
//     for (var i = 0; i < getRandomNumber(PHOTO_RULES.COMMENT.MIN, PHOTO_RULES.COMMENT.MAX); i++) {
//       var randomAvatar = getRandomNumber(PHOTO_RULES.NAME_AVATAR.MIN, PHOTO_RULES.NAME_AVATAR.MAX);
//       var randomText = getRandomNumber(0, PHOTO_RULES.COMMENT.MAX_COMMENT_TEMPLATE);
//       var randomName = getRandomNumber(0, PHOTO_RULES.NAME_AVATAR.MAX_NAME_TEMPLATE);
//       commentStorage [i] = {
//         avatarComment: 'img/avatar-' + randomAvatar + '.svg',
//         text: placeholderData.photoComment[randomText],
//         name: placeholderData.nameTemplate[randomName]
//       }; // end comments [i]
//     } // end for
//     return commentStorage;
//   };

//   // D.2 Создает финальный массив для фотки (урл, опис, лайки, коменты (вызывает функцию D.1))
//   var getPhoto = function () {
//     var photoStorage = [];
//     for (var i = 0; i < PHOTO_RULES.PHOTO.COUNT; i++) {
//       var randomLike = getRandomNumber(PHOTO_RULES.PHOTO.LIKE.MIN, PHOTO_RULES.PHOTO.LIKE.MAX);
//       var randomDescription = getRandomNumber(0, PHOTO_RULES.PHOTO.DECRIPTION_AMOUNT);
//       var randomAvatar = getRandomNumber(PHOTO_RULES.NAME_AVATAR.MIN, PHOTO_RULES.NAME_AVATAR.MAX);

//       photoStorage [i] = {
//         url: 'photos/' + (i + 1) + '.jpg',
//         description: placeholderData.photoDescription[randomDescription],
//         like: randomLike,
//         avatarOwner: 'img/avatar-' + randomAvatar + '.svg',
//         comment: createComment()
//       };
//     } // end for
//     return photoStorage;
//   };

//   // Выводим результат D.2 в общую видимость
//   window.preparedPhoto = getPhoto();
// })(); // end iife

// // PREVIEW.JS
// // Функция наполнения одной большой фотки
// (function () {

//   console.log(window.preparedPhoto);
//   // P.2 Находим родителя и детеныша для клонирования
//   var imgСommentUl = document.querySelector('.social__comments');
//   var imgСommentLi = imgСommentUl.querySelector('.social__comment');

//   // P.2.1 Клонирование и наполннение одной фотки
//   var getCommentImg = function (data) {
//     var cloneComment = imgСommentLi.cloneNode(true);
//     var avatar = cloneComment.querySelector('img');
//     var comment = cloneComment.querySelector('.social__text');

//     avatar.src = data.avatarComment;
//     avatar.alt = data.name;
//     comment.textContent = data.text;

//     console.log(cloneComment);
//     return cloneComment;
//   };

//   // P.2.2 Отображение большой фотки со всем данными
//   var showBigPhoto = function (item) {
//     var bigPicture = document.querySelector('.big-picture');
//     var imgPicture = bigPicture.querySelector('img');
//     var imgLike = bigPicture.querySelector('.likes-count');
//     var imgComment = bigPicture.querySelector('.comments-count');
//     var imgDescription = bigPicture.querySelector('.social__caption');
//     var fragment = document.createDocumentFragment(); // сюда запис. детеныши-коментарии

//     (function () {
//       var commentCounter = document.querySelector('.social__comment-count');
//       var commentsLoader = document.querySelector('.comments-loader');
//       commentCounter.classList.add('hidden');
//       commentsLoader.classList.add('hidden');
//     })(); // функция скрывает кнопку ЕЩЕ КОМЕНТОВ и СЧЕТЧИК

//     window.showElement(bigPicture); // отображает окно с большой фоткой
//     imgPicture.src = item.url;
//     imgLike.textContent = item.like;
//     imgComment.textContent = item.comment.length;
//     imgDescription.textContent = item.description;

//     for (var i = 0; i < item.comment.length; i++) {
//       fragment.appendChild(getCommentImg(item.comment[i]));
//     } // набиваем детенышами фрагмент

//     imgСommentUl.innerHTML = ''; // очищаем от шаблона
//     imgСommentUl.appendChild(fragment); // вешаем их на место
//   };

//   showBigPhoto(window.preparedPhoto[0]);
// })();
