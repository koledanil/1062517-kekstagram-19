'use strict';
// Функция ввыодит изображения на главной странице
(function () {
// G.1 Записываем данные фотки в разметку для одной шутки
  var fragment = document.createDocumentFragment();
  var writeInfoPhoto = function (element, index) {
    var foundTemplate = window.util.getTemplate('#picture', '.picture');
    var infoContainer = foundTemplate.querySelector('.picture__info'); // контейнер для коментов и лайков
    var pathPicture = foundTemplate.querySelector('.picture__img');

    foundTemplate.setAttribute('data-id', index);
    infoContainer.querySelector('.picture__likes').textContent = element.like;
    infoContainer.querySelector('.picture__comments').textContent = element.comment.length;
    pathPicture.src = element.url;
    return foundTemplate;
  };
    // G.2 На основе G.1 формируем и крепим фотки
  var showPhotos = function () {
    for (var i = 0; i < window.infoGenerator.getPhoto.length; i++) {
      fragment.appendChild(writeInfoPhoto(window.infoGenerator.getPhoto[i], i));
    }
    window.selector.imgPlace.appendChild(fragment);
  };
  showPhotos(window.infoGenerator.getPhoto);
})();