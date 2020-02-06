/* eslint-disable no-shadow */
'use strict';
// 0.2 Данная переменная будет содержать финмальный массив из 25 фотографий. В него будут записаны все данные каждой фотографии
var readyPhoto;
var uniqueNumber;

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

// С.3 Функция нахождения темплейта и нужного тега в нем
var getTemplateFromMarkup = function (tagTemplate, tagInTemplate) {
  var foundTemplatePhoto = document.querySelector(tagTemplate).content.querySelector(tagInTemplate);
  var templatePhoto = foundTemplatePhoto.cloneNode(true);
  return templatePhoto;
};

// 1 Функция создания одного слота для фотки
var addPhotoFeature = function () {
  var photoFeature = {};
  photoFeature.name = '';
  photoFeature.avatar = '';
  photoFeature.description = '';
  photoFeature.comment = [];
  photoFeature.url = '';
  photoFeature.like = '';

  return photoFeature;
};

// 1.1 Функция создания массива из слотов из 1
var createPhotoElement = function (NUMBER_PEOPLE) {
  var photoStorage = [];
  for (var i = 0; i < RULES.PHOTO.COUNT; i++) {
    var photoElement = addPhotoFeature();
    photoStorage.push(photoElement);
  }
  return photoStorage;
};

// 1.2 Функция генерит имена и линки на аватарки. При этом используется одни рандомайзер, так как одни и тот же автор должен иметь одинаковую аватарку.
// то бишь Жорж везде должен иметь аватарку с номером 5. А не так что в одном месте аватарка у него номер 1 а в другом 5 а в третьем 7
var addOwnerName = function (NUMBER_PEOPLE) {
  for (var i = 0; i < RULES.PHOTO.COUNT; i++) {
    var randomNumberOwnerName = getRandomNumber(RULES.NAME_AVATAR.MIN, RULES.NAME_AVATAR.MAX);
    readyPhoto[i].name = placeholderData.nameTemplate[randomNumberOwnerName];

    var ownerAvatarLink = 'img/avatar-' + randomNumberOwnerName + '.svg';
    readyPhoto[i].avatar = ownerAvatarLink;
  }
};


// 1.4 Функция генерации массива чисел от 1 до количество фоток, которые не повторяются
var getUniqueNumber = function (NUMBER_PEOPLE) {
  var uniqueNumbers = [];

  for (var i = 1; i <= RULES.PHOTO.COUNT; i++) {
    uniqueNumbers.push(i);
    shuffleRandomNumber(uniqueNumbers);
  }
  return uniqueNumbers;
};

// 1.4.1 Функция выбора и записи подписи к фотке на базе данных из 1.4
var addPhotoDescription = function (NUMBER_PEOPLE, uniqueNumber) {
  for (var i = 0; i < uniqueNumber.length; i++) {
    var randomPhotoDescriptionNumber = uniqueNumber[i];

    var photoDescriptionText = placeholderData.photoDescription[randomPhotoDescriptionNumber];
    readyPhoto[i].description = photoDescriptionText;

  }
  return readyPhoto;
};


// 1.5 Функция генерации и записи лайков под каждой фоткой
var addPhotoLike = function (NUMBER_PEOPLE) {
  for (var i = 0; i < RULES.PHOTO.COUNT; i++) {
    var randomNumberLike = getRandomNumber(RULES.PHOTO.LIKE.MIN, RULES.PHOTO.LIKE.MAX);
    readyPhoto[i].like = randomNumberLike;
  }
};

// 1.6 Функция генерации и записи линков на фотки, которые не повторяются
var addPhotoLink = function (uniqueNumber) {
  for (var i = 0; i <= uniqueNumber.length - 1; i++) {
    var randomPhotoLink = uniqueNumber[i];
    var photoLink = 'photos/' + randomPhotoLink + '.jpg';
    readyPhoto[i].url = photoLink;
  }

  return readyPhoto;
};


// 1.7 Функция к-ая формирует массив с количеством фотографий к каждой фотки
var getCommentNumber = function (NUMBER_PEOPLE) {
  var commentNumbers = [];
  for (var i = 0; i < RULES.PHOTO.COUNT; i++) {

    var randomCommentNumber = getRandomNumber(RULES.COMMENT.MIN, RULES.COMMENT.MAX);
    commentNumbers.push(randomCommentNumber);
  }
  return commentNumbers;
};

// 1.7.1  Функция записыывает к каждой фотографии массив коментов на основании сгенер. количества из 1.7.
// Т е функция 1.7 говорит у фотки 1 будет 4 комента, а функция 1.7 формирует массив длинной 4 комента и наполняет их.
// Потом передает полученный массив в массив объекта
var addPhotoComment = function (NUMBER_PEOPLE, commentNumbers) {
  for (var i = 0; i < RULES.PHOTO.COUNT; i++) {
    var commentBuffer = [];
    for (var j = 0; j < commentNumbers[i]; j++) {
      var randomCommentNumber = getRandomNumber(1, placeholderData.photoComment.length);
      var comment = placeholderData.photoComment[randomCommentNumber];
      commentBuffer.push(comment);
    }
    readyPhoto[i].comment = commentBuffer;
  }
};

// 1.8 Функция записи количества лайков, коментов и ссылку к одной фотке
var writeLikeCommentSrcPhoto = function (readyPhoto) {
  var foundTemplate = getTemplateFromMarkup('#picture', '.picture');
  var pictureInfo = foundTemplate.querySelector('.picture__info');
  pictureInfo.querySelector('.picture__likes').textContent = readyPhoto.like;
  pictureInfo.querySelector('.picture__comments').textContent = readyPhoto.comment.length;

  var pictureSrc = foundTemplate.querySelector('.picture__img');
  pictureSrc.src = readyPhoto.url;

  return foundTemplate;
};

// 1.8.1 Функция генерирует готовые данные для фоток
var showAllPhoto = function (readyPhoto) {
  var connectBlock = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < readyPhoto.length; i++) {
    fragment.appendChild(writeLikeCommentSrcPhoto(readyPhoto[i]));
  }
  connectBlock.appendChild(fragment);
};
addPhotoFeature();
readyPhoto = createPhotoElement(RULES.PHOTO.COUNT);
addOwnerName(RULES.PHOTO.COUNT);
uniqueNumber = getUniqueNumber(RULES.PHOTO.COUNT);
addPhotoDescription(RULES.PHOTO.COUNT, uniqueNumber);
addPhotoLike(RULES.PHOTO.COUNT);
addPhotoLink(uniqueNumber);
addPhotoComment(RULES.PHOTO.COUNT, getCommentNumber(RULES.PHOTO.COUNT));
showAllPhoto(readyPhoto);
console.log(readyPhoto);