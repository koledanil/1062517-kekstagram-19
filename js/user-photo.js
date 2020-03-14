/* eslint-disable no-console */
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

  var getCommentImg = function (item) {

    var cloneComment = imgСommentLi.cloneNode(true);
    var avatar = cloneComment.querySelector('img');
    var comment = cloneComment.querySelector('.social__text');
    avatar.src = item.avatar;
    avatar.alt = item.name;
    comment.textContent = item.message;
    return cloneComment;
  };

  var showBigPhoto = function (item) {
    var fragmenBigPhoto = document.createDocumentFragment();
    bigPicture.classList.remove('hidden');
    commentCounter.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    imgPicture.src = item.url;
    imgLike.textContent = item.likes;
    imgComment.textContent = item.comments.length;
    imgDescription.textContent = item.description;

    for (var i = 0; i < item.comments.length; i++) {
      fragmenBigPhoto.appendChild(getCommentImg(item.comments[i]));
    } // набиваем детенышами фрагмент

    imgСommentUl.innerHTML = ''; // очищаем от шаблона
    imgСommentUl.appendChild(fragmenBigPhoto); // вешаем их на место
  };

  var openClickHandler = function (evt) {
    window.load(function (resultResponse) {
      var pictureContainer = evt.target.closest('.picture');
      console.log(pictureContainer);
      if (pictureContainer) {
        var pictureId = pictureContainer.getAttribute('data-id');
        showBigPhoto(resultResponse[pictureId]);
      }
    });
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

  document.addEventListener('click', openClickHandler);
  crossBtnUserPic.addEventListener('click', closeClickPhotoHandler);
  document.addEventListener('keydown', closeEscPhotoHandler);
})();
