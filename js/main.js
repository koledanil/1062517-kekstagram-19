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
