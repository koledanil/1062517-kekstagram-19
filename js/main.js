/* eslint-disable no-shadow */
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
    MAX: 6
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
  var connectBlock = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < readyPhoto.length; i++) {
    fragment.appendChild(writeLikeCommentSrcPhoto(readyPhoto[i]));
  }
  connectBlock.appendChild(fragment);
};

photo.ready = getReadyPhoto();
getFulllUrl(photo.ready);
showAllPhoto(photo.ready);


// UTIL.JS
// У.1 Делает элемент видимым
window.showElement = function (element) {
  element.classList.remove('hidden');
};

// У.2 Скрывает элемент
window.hideElement = function (element) {
  element.classList.add('hidden');
};

// U.3 Функция оживляет слайдер
// Так как у нас каждый эффект имеет свой слайдер и каждый эффект имеет свой
// диапазон входных значений (от 0 до 1 или 0 до 100), поэтому я создал функцию
// которая генерит типовой слайдер и через effectType позволяет выбрать формулу для
// выходного эффекта.
(function () {
  window.slider = function (sliderTag, minValue, maxtValue, effectType) {
    var lineEmpty = sliderTag.querySelector('.effect-level__line');
    var depth = sliderTag.querySelector('.effect-level__depth');
    var pin = sliderTag.querySelector('.effect-level__pin');
    var output = sliderTag.querySelector('.effect-level__line');
    var limitMovementX;
    var pinCoord;
    output.value = minValue;

    function movePin(evt) {
      limitMovementX = {
        min: 0, // эффект выключен
        max: lineEmpty.offsetLeft + lineEmpty.offsetWidth - pin.offsetWidth
      };
      pinCoord = pin.offsetLeft + evt.movementX;
      console.log(pinCoord + ' yhumb');
      if (pinCoord < limitMovementX.min) {
        pinCoord = limitMovementX.min;
      }
      if (pinCoord > limitMovementX.max) {
        pinCoord = limitMovementX.max;
      }

      // Далее идет переключение между расчетом выхода для разных эффектов
      switch (effectType) {
        case 'marvin':
          output.value = Math.round(pinCoord * (maxtValue - minValue) / limitMovementX.max);
          console.log(output.value);
          pin.style.left = pinCoord + 'px';
          depth.style.width = pinCoord + 'px';
          return;

        case 'sepia':
          output.value = pinCoord * (maxtValue - minValue) / limitMovementX.max;
          console.log(output.value);
          pin.style.left = pinCoord + 'px';
          depth.style.width = pinCoord + 'px';
          return;
      }
    }

    function onPinMouseUp() {
      document.removeEventListener('mousemove', movePin);
      document.removeEventListener('mouseup', onPinMouseUp);
    }
    pin.addEventListener('mousedown', function () {
      pin.addEventListener('dragstart', function (evt) {
        evt.preventDefault();
      });
      document.addEventListener('mousemove', movePin);
      document.addEventListener('mouseup', onPinMouseUp);
    });
  };
}());


// DIALOG.JS
// Д.1 Функция открывает диалоговое окно по изменению поля файл.
(function () {
  var body = document.querySelector('body');
  var clickedElement = document.querySelector('#upload-select-image');
  var dialogBox = document.querySelector('.img-upload__overlay');

  var showDialogBox = function () {
    // dialogBox.classList.remove('hidden');
    window.showElement(dialogBox);
    body.classList.add('modal-open');
  };

  clickedElement.addEventListener('change', showDialogBox);
})();

// Д.2 Функция закрывает диалоговое окно по клику на керстик
(function () {
  var body = document.querySelector('body');
  var clickedElement = document.querySelector('.img-upload__cancel');
  var uploadButton = document.querySelector('#upload-select-image');
  var dialogBox = document.querySelector('.img-upload__overlay');

  var hideDialogBox = function () {
    window.hideElement(dialogBox);
    body.classList.remove('modal-open');
    clickedElement.removeEventListener('click' && 'keydown', hideDialogBox);
    uploadButton.reset();
  };

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      hideDialogBox();
    }
  });

  clickedElement.addEventListener('click', hideDialogBox);
})();

// SCALE.JS
// S.1 Увеличивает размер изображения по нажатию на +
(function () {
  var photoPreview = document.querySelector('.img-upload__preview');
  var imgPreview = photoPreview.querySelector('img');
  var divHidden = photoPreview.querySelector('div');
  var zoomInButton = document.querySelector('.scale__control--bigger');
  var zoomStorage = document.querySelector('.scale__control--value');

  var zoomIn = function () {
    if (parseInt(zoomStorage.value, 10) < 400) {
      var newValaue = parseInt(zoomStorage.value, 10) + 25;
      zoomStorage.value = newValaue + '%';

      var scaleValue = newValaue / 100;
      imgPreview.style = 'transform: scale(' + scaleValue + ')';
      divHidden.style = 'overflow: auto';
      // divHidden.style добавлен, так как без него изображение при зуме
      // выскакивает из контейнера. Поэтому я добавил в html доп. div и
      // ему присваиваю стиль, который скрывает излишки изображения и
      // показывает скролл внутри
    } else {
      alert('Масштаб должен быть менее 400%');
    }
  };

  zoomInButton.addEventListener('click', zoomIn); // закртывается слушатешль

})(); // закрывают самовызов.

// S.2 Уменьшает размер изображения по нажатию на -
(function () {
  var photoPreview = document.querySelector('.img-upload__preview');
  var imgPreview = photoPreview.querySelector('img');
  var zoomInButton = document.querySelector('.scale__control--smaller');
  var zoomStorage = document.querySelector('.scale__control--value');

  var zoomOut = function () {
    if (parseInt(zoomStorage.value, 10) > 25) {
      var newValaue = parseInt(zoomStorage.value, 10) - 25;
      zoomStorage.value = newValaue + '%';

      var scaleValue = newValaue / 100;
      console.log(scaleValue);
      imgPreview.style = 'transform: scale(' + scaleValue + ')';

      console.log(imgPreview);
    } else {
      alert('Масштаб должен быть менее 25%');
    }
  };

  zoomInButton.addEventListener('click', zoomOut); // закртывается слушатешль
})(); // закрывают самовызов.


// EFFECTS.JS
// E.1 Переключает эффекты и применяет их к фото
(function () {
  var photoPreview = document.querySelector('.img-upload__preview');
  var imgPreview = photoPreview.querySelector('img');
  var dialogBox = document.querySelector('.img-upload__overlay');
  var effectsVolume = dialogBox.querySelector('.img-upload__effect-level');
  var effectList = document.querySelector('.effects__list');

  // var removeFx = function () {
  //   console.log(imgPreview.removeAttribute);
  //   imgPreview.removeAttribute('class');
  // };

  var applyEffects = function (evt) {
    (function () {
      console.log(imgPreview.removeAttribute);
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
  effectList.addEventListener('change', applyEffects);
})();

// E.2 Функция для оживляения ползунка
(function () {
  window.slider(document.querySelector('.img-upload__effect-level'), 0, 100, 'marvin');
})();


// HASHTAG.JS
// Валидацмя тегов

(function () {
  var tagInput = document.querySelector('.text__hashtags');
  var submitButton = document.querySelector('#upload-submit');

  var checkCondOneTag = function (tagStorage) {
    var REG_EXP = /(^)(#[a-zA-Zа-яА-Я\d]*$)/ig;
    var checkedRegExp = REG_EXP.test(tagStorage);
    window.isTagOk = '';

    if (tagStorage.length > 0) {
      switch (true) {
        case checkedRegExp !== true:
          tagInput.setCustomValidity('Хэш-тег после решётки не должен содержать пробелы, специальные символы, символы пунктуации, эмодзи');
          tagInput.removeAttribute('style');
          window.isTagOk = 'false';
          return;

        case tagStorage[0] !== '#':
          tagInput.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
          tagInput.removeAttribute('style');
          window.isTagOk = 'false';
          return;

        case tagStorage.length === 1:
          tagInput.setCustomValidity('Хэш-тег не может состоять только из одной решётки');
          tagInput.removeAttribute('style');
          window.isTagOk = 'false';
          return;

        case tagStorage.length >= 20:
          tagInput.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решётку');
          tagInput.removeAttribute('style');
          window.isTagOk = 'false';
          return;

        case tagStorage.indexOf('#', 1) > 0:
          tagInput.setCustomValidity('Хэш-теги разделяются пробелами');
          tagInput.removeAttribute('style');
          window.isTagOk = 'false';
          return;

        default:
          tagInput.setCustomValidity('');
          window.isTagOk = 'true';
          return;
      }// finished switch
    } else {
      window.isTagOk = 'true';
    } // finished if tagstorage
  }; // заканчивается checkConOneTag


  var checkerHandler = function (evt) {
  
    var tagCollector = tagInput.value.toLowerCase().split(' '); // собрали все наши теги из инпута
    var areTagsOk = [];
    for (var i = 0; i < tagCollector.length; i++) {
      checkCondOneTag(tagCollector[i]);
      console.log(window.isTagOk1);
      if (window.isTagOk === 'false') {
        evt.preventDefault();
        console.log('23423');
      }
      areTagsOk.push(window.isTagOk);
      console.log(areTagsOk);
    }

    // var isThereFalse = areTagsOk.indexOf('false');
    // console.log(isThereFalse);

    // if (isThereFalse >= 0) {
    //   evt.preventDefault();
    //   console.log('sdfsd');
    // } else {
    //   tagInput.setCustomValidity('');
    // }
  };

  // submitButton.addEventListener('click', function (evt) {
  //   var tagCollector = tagInput.value.toLowerCase().split(' '); // собрали все наши теги из инпута
  //   evt.preventDefault();
  //   var areTagsOk = [];
  //   for (var i = 0; i < tagCollector.length; i++) {
  //     checkCondOneTag(tagCollector[i]);
  //     areTagsOk.push(window.isTagOk);
  //     console.log(areTagsOk);
  //   }
  // }); // finished submitlistener

  tagInput.addEventListener('blur', checkerHandler);
  submitButton.addEventListener('click', checkerHandler);

})(); // finished IIFE


// (function () {
//   var effectsList = document.getElementsByName('effect');
//   var effectContainer = document.querySelector('.effects__list');
//   var photoPreview = document.querySelector('.img-upload__preview');

//   window.presetsEffects = [
//     '',
//     'effects__preview--chrome',
//     'effects__preview--sepia',
//     'effects__preview--marvin',
//     'effects__preview--phobos',
//     'effects__preview--heat'
//   ];

//   var checkSelectedEffectHandler = function () {
//     for (var i = 0; i < effectsList.length; i++) {
//       if (effectsList[i].checked) {
//         console.log(effectsList[i]);
//         console.log('выбран^^^^^');
//         photoPreview.classList.add(window.presetsEffects[i]);
//       };

//       if (effectsList[i].unchecked) {
//         console.log(effectsList[i]);
//         console.log('выбран^^^^^');
//         photoPreview.classList.remove(window.presetsEffects[i]);
//       };

//     }
//   };

//   effectContainer.addEventListener('change', checkSelectedEffectHandler);

// })();


// (function () {
//   var photoPreview = document.querySelector('.img-upload__preview');
//   var effectContainer = document.querySelector('.effects__list');

//   var effectHandler = function (evt) {
//     var valueFx = evt.target.value;

//     var chooseEffect = function (valueFx) {
//       switch (valueFx) {
//         case 'chrome':
//           return 'effects__preview--chrome';
//         case 'sepia':
//           return 'effects__preview--sepia';
//         case 'marvin':
//           return 'effects__preview--marvin';
//         case 'phobos':
//           return 'effects__preview--phobos';
//         case 'heat':
//           return 'effects__preview--heat';
//         case 'none':
//           return '';
//       }
//     };

//     var add = chooseEffect(valueFx);
//     photoPreview.classList.add(add);
//     console.log(photoPreview);
//   };

//   effectContainer.addEventListener('change', effectHandler);
// })();


// (function () {
//   var photoPreview = document.querySelector('.img-upload__preview');
//   var effectContainer = document.querySelector('.effects__list');

//   var effectHandler = function (evt) {
//     var valueFx = evt.target.value;

//     var chooseEffect = function (valueFx) {
//       switch (valueFx) {
//         case 'chrome':
//           return 'effects__preview--chrome';
//         case 'sepia':
//           return 'effects__preview--sepia';
//         case 'marvin':
//           return 'effects__preview--marvin';
//         case 'phobos':
//           return 'effects__preview--phobos';
//         case 'heat':
//           return 'effects__preview--heat';
//         case 'none':
//           return '';
//       }
//     };

//     var add = chooseEffect(valueFx);
//     photoPreview.classList.add(add);
//     console.log(photoPreview);
//   };

//   effectContainer.addEventListener('change', effectHandler);
// }) ();
