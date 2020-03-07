'use strict';
// Данный модуль готовит массив для фотки, которая содержит все данные фотки.
(function () {
  // G.1 Создает массив КОММЕНТАРИЕВ (аватар автора, текст и имя), который потом будет записан в D.2 строка 240
  var createComment = function () {
    var commentStorage = [];
    for (var i = 0; i < window.util.getRandom(window.constant.PHOTO_RULES.COMMENT.MIN, window.constant.PHOTO_RULES.COMMENT.MAX); i++) {
      var randomAvatar = window.util.getRandom(window.constant.PHOTO_RULES.NAME_AVATAR.MIN, window.constant.PHOTO_RULES.NAME_AVATAR.MAX);
      var randomText = window.util.getRandom(0, window.constant.PHOTO_RULES.COMMENT.MAX_COMMENT_TEMPLATE);
      var randomName = window.util.getRandom(0, window.constant.PHOTO_RULES.NAME_AVATAR.MAX_NAME_TEMPLATE);
      commentStorage [i] = {
        avatarComment: 'img/avatar-' + randomAvatar + '.svg',
        text: window.placeholderData.photoComment[randomText],
        name: window.placeholderData.nameTemplate[randomName]
      }; // end comments [i]
    } // end for
    return commentStorage;
  };

  // G.2 Создает финальный массив для фотки (урл, опис, лайки, коменты (вызывает функцию D.1))
  var getPhoto = function () {
    var photoStorage = [];
    for (var i = 0; i < window.constant.PHOTO_RULES.PHOTO.COUNT; i++) {
      var randomLike = window.util.getRandom(window.constant.PHOTO_RULES.PHOTO.LIKE.MIN, window.constant.PHOTO_RULES.PHOTO.LIKE.MAX);
      var randomDescription = window.util.getRandom(0, window.constant.PHOTO_RULES.PHOTO.DECRIPTION_AMOUNT);
      var randomAvatar = window.util.getRandom(window.constant.PHOTO_RULES.NAME_AVATAR.MIN, window.constant.PHOTO_RULES.NAME_AVATAR.MAX);

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
  var result = getPhoto();

  // OUTPUT
  window.infoGenerator = {
    getPhoto: result,
  };
})(); // end iife
