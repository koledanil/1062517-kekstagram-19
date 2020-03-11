'use strict';
// Открытие одной фотки по клику на главной странице
(function () {
  var imgСommentUl = document.querySelector('.social__comments');
  var imgСommentLi = imgСommentUl.querySelector('.social__comment');
  var bigPicture = document.querySelector('.big-picture');
  var imgPicture = bigPicture.querySelector('img');
  var imgLike = bigPicture.querySelector('.likes-count');
  var imgComment = bigPicture.querySelector('.comments-count');
  var imgDescription = bigPicture.querySelector('.social__caption');
  var commentCounter = document.querySelector('.social__comment-count');
  var commentsLoader = document.querySelector('.comments-loader');
  var crossBtnUserPic = document.querySelector('.big-picture__cancel');
  var commentUserPhInput = document.querySelector('.social__footer-text');

  //  UP.1 Клонирование и наполннение одной фотки
  var getCommentImg = function (data) {
    var cloneComment = imgСommentLi.cloneNode(true);
    var avatar = cloneComment.querySelector('img');
    var comment = cloneComment.querySelector('.social__text');

    avatar.src = data.avatarComment;
    avatar.alt = data.name;
    comment.textContent = data.text;

    return cloneComment;
  };

  // UP.1.1 Отображение большой фотки со всем данными
  var showBigPhoto = function (item) {
    var fragmenBigPhoto = document.createDocumentFragment(); // сюда запис. детеныши-коментарии

    commentCounter.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    window.selector.body.classList.add('modal-open');

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

  // UP.1.2 Поиск фотки по массиву и вывод на экран (запускает функцию P.2.2)
  var openClickHandler = function (evt) {
    var pictureContainer = evt.target.closest('.picture');
    if (pictureContainer) { // picture__likes picture__info picture__info добавлены, чтобы клик на всплывашке с лайками также открывал фотку
      var pictureId = pictureContainer.getAttribute('data-id');
      showBigPhoto(window.infoGenerator.getPhoto[pictureId]);
    }
  }; // open handler

  // UP.1.3 Закрывает окно
  var closePhoto = function () {
    bigPicture.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    commentUserPhInput.value = ''; // очищает поле комента
  };

  // UP.1.3 Закрытие при клике
  var closeClickPhotoHandler = function () {
    closePhoto();
  };

  // UP.1.4 Функция при Esc закрывает (если фокус в коменте, то первый нажатие Esc === снятие фокуса)
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

  window.selector.imgPlace.addEventListener('click', openClickHandler);
  crossBtnUserPic.addEventListener('click', closeClickPhotoHandler);
  document.addEventListener('keydown', closeEscPhotoHandler);
})();
