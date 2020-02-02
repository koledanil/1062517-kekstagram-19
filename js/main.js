/* eslint-disable no-shadow */
'use strict';
// 0 Объект с наборами значений для разных параметров
var placeholderData = {
  randomOwnerName: ['Чебупели', 'Жмых', 'Шоколадный заяц', 'Жорж', 'Ося', 'Насос', 'Дизель', 'Апанасовна', 'Шпротик'],
  randomOwnerNameNumberMin: 1,
  randomOwnerNameNumberMax: 6,

  randomPhotoNumberMin: 1,
  randomPhotoNumberMax: 25,

  randomCommentsNumberMin: 0,
  randomCommentsNumberMax: 10,
  randomPhotoComments: ['Всё отлично!',
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

  randomPhotoDescription: ['Давно хочу написать вирус. С чего начать?',
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
  ],


  randomPhotoLikeMin: 15,
  randomPhotoLikeMax: 200,

  randomAvatarNumberMin: 1,
  randomAvatarNumberMax: 6
};

// 0.1 Данная переменная будет содержать финмальный массив из 25 фотографий. В него будут записаны все данные каждой фотографии
var photoFeautreArray;
var exclNumberArrayForDescriptions;

var NUMBER_PEOPLE = 25;

// C.1 генератор случайных чисел с повторением имен
var getRandomNumber = function (min, max) {
  var randomNumberLastName = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumberLastName);
};

// С.2 Функция перемешивания массива чисел так, чтобы исключить повторения
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


// 1 Функция создания одного слота для фотки
var createPhotoElementObject = function () {
  // eslint-disable-next-line no-new-object
  var photoElementObject = new Object();
  photoElementObject.ownerName = '';
  photoElementObject.ownerAvatar = '';
  photoElementObject.photoDescription = '';
  photoElementObject.photoComments = [];
  photoElementObject.photoUrl = '';
  photoElementObject.photoLike = '';

  return photoElementObject;
};

// 1.1 Функция создания массива из слотов из 1
var createPhotoElementArray = function (NUMBER_PEOPLE) {
  var photoElementArray = [];
  for (var i = 0; i < NUMBER_PEOPLE; i++) {
    var photoElement = createPhotoElementObject();
    photoElementArray.push(photoElement);
  }
  return photoElementArray;
};

// 1.2 Функция генерит имена и линки на аватарки. При этом используется одни рандомайзер, так как одни и тот же автор должен иметь одинаковую аватарку.
// то бишь Жорж везде должен иметь аватарку с номером 5. А не так что в одном месте аватарка у него номер 1 а в другом 5 а в третьем 7
var addOwnerName = function (NUMBER_PEOPLE) {
  for (var i = 0; i < NUMBER_PEOPLE; i++) {
    var randomNumberOwnerName = getRandomNumber(placeholderData.randomOwnerNameNumberMin, placeholderData.randomOwnerNameNumberMax);
    photoFeautreArray[i].ownerName = placeholderData.randomOwnerName[randomNumberOwnerName];

    var ownerAvatarLink = 'img/avatar-' + randomNumberOwnerName + '.svg';
    photoFeautreArray[i].ownerAvatar = ownerAvatarLink;
  }
};


// 1.4 Функция генерации массива чисел от 1 до количество фоток, которые не повторяются
var generatePhotoDescriptionNumberArray = function (NUMBER_PEOPLE) {
  var photoDescriptionArray = [];

  for (var i = 1; i <= NUMBER_PEOPLE; i++) {
    photoDescriptionArray.push(i);
    shuffleRandomNumber(photoDescriptionArray);
  }
  return photoDescriptionArray;
};

// 1.4.1 Функция выбора и записи подписи к фотке на базе данных из 1.4
var addPhotoDescription = function (NUMBER_PEOPLE, exclNumberArrayForDescriptions) {
  for (var i = 0; i < exclNumberArrayForDescriptions.length; i++) {
    var randomPhotoDescriptionNumber = exclNumberArrayForDescriptions[i];

    var photoDescriptionText = placeholderData.randomPhotoDescription[randomPhotoDescriptionNumber];
    photoFeautreArray[i].photoDescription = photoDescriptionText;

  }
  return photoFeautreArray;
};


// 1.5 Функция генерации и записи лайков под каждой фоткой
var addPhotoLike = function (NUMBER_PEOPLE) {
  for (var i = 0; i < NUMBER_PEOPLE; i++) {
    var randomNumberLike = getRandomNumber(placeholderData.randomPhotoLikeMin, placeholderData.randomPhotoLikeMax);
    photoFeautreArray[i].photoLike = randomNumberLike;
  }
};

// 1.6 Функция генерации и записи линков на фотки, которые не повторяются
var addPhotoLink = function (exclNumberArrayForDescriptions) {
  for (var i = 0; i <= exclNumberArrayForDescriptions.length - 1; i++) {
    var randomPhotoLink = exclNumberArrayForDescriptions[i];
    var photoLink = 'photos/' + randomPhotoLink + '.jpg';
    photoFeautreArray[i].photoUrl = photoLink;
  }

  return photoFeautreArray;
};


// 1.7 Функция к-ая формирует массив с количеством фотографий к каждой фотки
var generatePhotoCommentNumber = function (NUMBER_PEOPLE) {
  var commentNumberArray = [];
  for (var i = 0; i < NUMBER_PEOPLE; i++) {
    var minCommentNumber = 1;
    var maxCommentNumber = 6;
    var randomCommentNumber = getRandomNumber(minCommentNumber, maxCommentNumber);
    commentNumberArray.push(randomCommentNumber);
  }
  return commentNumberArray;
};

// 1.7.1  Функция записыывает к каждой фотографии массив коментов на основании сгенер. количества из 1.7.
// Т е функция 1.7 говорит у фотки 1 будет 4 комента, а функция 1.7 формирует массив длинной 4 комента и наполняет их.
// Потом передает полученный массив в массив объекта
var addPhotoComment = function (NUMBER_PEOPLE, commentNumberArray) {
  for (var i = 0; i < NUMBER_PEOPLE; i++) {
    var commentBuffer = [];
    for (var j = 0; j < commentNumberArray[i]; j++) {
      var randomCommentNumber = getRandomNumber(1, placeholderData.randomPhotoComments.length);
      var comment = placeholderData.randomPhotoComments[randomCommentNumber];
      commentBuffer.push(comment);
    }
    photoFeautreArray[i].photoComments = commentBuffer;
  }
};

// С.3 Функция нахождения темплейта и нужного тега в нем
var getTemplateFromMarkup = function (tagTemplate, tagInTemplate) {
  var foundTemplatePhoto = document.querySelector(tagTemplate).content.querySelector(tagInTemplate);
  var templatePhoto = foundTemplatePhoto.cloneNode(true);
  return templatePhoto;
};

// 1.8 Функция записи количества лайков, коментов и ссылку к одной фотке
var writeLikeCommentSrcPhoto = function (photoFeautreArray) {
  var foundTemplate = getTemplateFromMarkup('#picture', '.picture');
  var pictureInfo = foundTemplate.querySelector('.picture__info');
  pictureInfo.querySelector('.picture__likes').textContent = photoFeautreArray.photoLike;
  pictureInfo.querySelector('.picture__comments').textContent = photoFeautreArray.photoComments.length;

  var pictureSrc = foundTemplate.querySelector('.picture__img');
  pictureSrc.src = photoFeautreArray.photoUrl;

  return foundTemplate;
};

// 1.8.1 Функция генерирует готовые данные для фоток
var showAllPhoto = function (photoFeautreArray) {
  var connectBlock = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < photoFeautreArray.length; i++) {
    fragment.appendChild(writeLikeCommentSrcPhoto(photoFeautreArray[i]));
  }
  connectBlock.appendChild(fragment);
};
createPhotoElementObject();
photoFeautreArray = createPhotoElementArray(NUMBER_PEOPLE);
addOwnerName(NUMBER_PEOPLE);
exclNumberArrayForDescriptions = generatePhotoDescriptionNumberArray(NUMBER_PEOPLE);
addPhotoDescription(25, exclNumberArrayForDescriptions);
addPhotoLike(NUMBER_PEOPLE);
addPhotoLink(exclNumberArrayForDescriptions);
addPhotoComment(NUMBER_PEOPLE, generatePhotoCommentNumber(NUMBER_PEOPLE));
showAllPhoto(photoFeautreArray);
