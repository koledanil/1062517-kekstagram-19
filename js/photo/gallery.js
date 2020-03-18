'use strict';
// Функция ввыодит изображения на главной странице
(function () {
  // G.1 Записываем данные фотки в разметку для одной шутки
  var fragment = document.createDocumentFragment();
  window.photos = [];

  var writeInfoPhoto = function (element, index) {
    var foundTemplate = window.util.getTemplate('#picture', '.picture');
    var infoContainer = foundTemplate.querySelector('.picture__info'); // контейнер для коментов и лайков
    var pathPicture = foundTemplate.querySelector('.picture__img');

    foundTemplate.setAttribute('data-id', index);
    infoContainer.querySelector('.picture__likes').textContent = element.likes;
    infoContainer.querySelector('.picture__comments').textContent = element.comments.length;
    pathPicture.src = element.url;
    return foundTemplate;
  };
    // G.2 На основе G.1 формируем и крепим фотки
  window.backend.load(window.constant.ADD_PHOTO_RULES.URL_LOAD, onSuccessHandler);


  var onSuccessHandler = function (resultResponse, readyState, data) {
    window.photos = data;
    window.filterbutton.show(readyState);
    window.filterbutton.addEvtListener();
    for (var i = 0; i < resultResponse.length; i++) {
      fragment.appendChild(writeInfoPhoto(resultResponse[i], i));
    }
    window.selector.imgPlace.appendChild(fragment);
    window.userphoto.show(resultResponse);
  };
})();
