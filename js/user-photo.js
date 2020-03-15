/* eslint-disable no-console */
'use strict';
// Открытие одной фотки по клику на главной странице
(function () {
  var imgСommentUl = document.querySelector('.social__comments');
  var imgСommentLi = imgСommentUl.querySelector('.social__comment');
  var imgPicture = window.selector.bigPicture.querySelector('img');
  var imgLike = window.selector.bigPicture.querySelector('.likes-count');
  var imgComment = window.selector.bigPicture.querySelector('.comments-count');
  var fewPhoto = document.querySelector('.few-photo');
  var manyPhoto = document.querySelector('.many-photo');
  var imgDescription = window.selector.bigPicture.querySelector('.social__caption');
  // var commentCounter = document.querySelector('.social__comment-count');
  // var commentsLoader = document.querySelector('.comments-loader');
  var crossBtnUserPic = document.querySelector('.big-picture__cancel');
  var commentUserPhInput = document.querySelector('.social__footer-text');

  // UP.1 Клонируем комент из шаблона и пишем как наполнять его
  var getCommentImg = function (item) {
    var cloneComment = imgСommentLi.cloneNode(true);
    var avatar = cloneComment.querySelector('img');
    var comment = cloneComment.querySelector('.social__text');
    avatar.src = item.avatar;
    avatar.alt = item.name;
    comment.textContent = item.message;
    return cloneComment;
  };


  // UP.2 Задаем параметры для одной фотки + вешкалка их на место
  var showBigPhoto = function (item) {
    var fragmenBigPhoto = document.createDocumentFragment();
    window.selector.bigPicture.classList.remove('hidden');
    // commentCounter.classList.add('hidden');
    // commentsLoader.classList.add('hidden');
    imgPicture.src = item.url;
    imgPicture.alt = item.description; // заменяем плейсхолдер АЛЬТА
    imgLike.textContent = item.likes;
    imgComment.textContent = item.comments.length;
    imgDescription.textContent = item.description;
    switch (true) {
      case item.comments.length <= window.constant.ADD_PHOTO_RULES.SHOW_AMOUNT_CMNT:
        fewPhoto.classList.remove('hidden');
        manyPhoto.classList.add('hidden');
        chooseWord(item.comments.length);
        window.selector.showMorePhoto.disabled = true;
        showPhoto(item.comments.length, item.comments, fragmenBigPhoto);
        return;

      case item.comments.length > window.constant.ADD_PHOTO_RULES.SHOW_AMOUNT_CMNT:
        var counter = window.constant.ADD_PHOTO_RULES.SHOW_AMOUNT_CMNT;
        fewPhoto.classList.add('hidden');
        manyPhoto.classList.remove('hidden');
        window.selector.showedAmountComments.textContent = counter;
        window.selector.showMorePhoto.disabled = false;
        showPhoto(counter, item.comments, fragmenBigPhoto);

        window.selector.showMorePhoto.onclick = function () {
          counter = counter + window.constant.ADD_PHOTO_RULES.PLUS_AMOUNT_CMNT;
          window.selector.showedAmountComments.textContent = counter;
          if (counter >= item.comments.length) {
            showPhoto(item.comments.length, item.comments, fragmenBigPhoto);
            window.selector.showedAmountComments.textContent = item.comments.length;
            window.selector.showMorePhoto.disabled = true;
          } else {
            showPhoto(counter, item.comments, fragmenBigPhoto);
          }
        };
        return;
    }
  };

  // Выбирает нужную формулировку окончаяния
  var chooseWord = function (item) {
    if (item === 1) {
      fewPhoto.textContent = 'Всего ' + item + ' комментарий';
    } else {
      fewPhoto.textContent = 'Всего ' + item + ' комментария';
    }
  };

  // показывает коменты с параметром количество коментов
  var showPhoto = function (howManyShow, itemComment, fragmenBigPhoto) {
    for (var m = 0; m < howManyShow; m++) {
      fragmenBigPhoto.appendChild(getCommentImg(itemComment[m]));
    } // набиваем детенышами фрагмент

    imgСommentUl.innerHTML = ''; // очищаем от шаблона
    imgСommentUl.appendChild(fragmenBigPhoto); // вешаем их на место
  };

  // UP.3 Задаем параметры для одной фотки + вешкалка их на место
  var openClickHandler = function (evt) {
    window.selector.body.classList.add('modal-open');
    window.load(function (resultResponse) {
      var pictureContainer = evt.target.closest('.picture');
      if (pictureContainer) {
        var pictureId = pictureContainer.getAttribute('data-id');
        showBigPhoto(resultResponse[pictureId]);
      }
    });
  }; // open handler


  // UP.4 Закрывает окно
  var closePhoto = function () {
    window.selector.body.classList.remove('modal-open');
    window.selector.bigPicture.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    window.selector.showMorePhoto.disabled = false;
    imgСommentUl.innerHTML = '';
    commentUserPhInput.value = ''; // очищает поле комента
  };

  // UP.4.1 Закрытие при клике
  var closeClickPhotoHandler = function () {
    closePhoto();
  };

  // UP.4.2 Функция при Esc закрывает (если фокус в коменте, то первый нажатие Esc === снятие фокуса)
  var closeEscPhotoHandler = function (evt) {
    // console.log(evt.target.);
    switch (true) {
      case evt.key === 'Escape' && evt.target.type === 'text':
        commentUserPhInput.blur();
        return;

      case evt.key === 'Escape':
        closePhoto();
        return;
    }
  };

  document.addEventListener('click', openClickHandler);
  crossBtnUserPic.addEventListener('click', closeClickPhotoHandler);
  document.addEventListener('keydown', closeEscPhotoHandler);
})();
