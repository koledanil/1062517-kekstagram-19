'use strict';
// Функция ввыодит изображения на главной странице
(function () {
  // G.1 Записываем данные фотки в разметку для одной шутки
 

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
    window.selector.filterContainer.classList.remove('img-filters--inactive');
  window.backend.load(window.constant.ADD_PHOTO_RULES.URL_LOAD, function (resultRespose, readyState) {
    // window.filterbutton.show(readyState);
    // window.filterbutton.addEvtListener();
    var copyArr = resultRespose;

    renderPhoto(resultRespose);

  var swithcFiltersHandler = function (evt) {
          var target = evt.target.id;
          switchBtn(target);
        };
    var switchBtn = function (target) {
      switch (target) {
        case target = 'filter-default':
          uncheckOtherFilter(window.selector.filterArray.elements);
          window.selector.defaultFilter.classList.add('img-filters__button--active');
          renderPhoto(resultRespose);
          return;
  
        case target = 'filter-random':
          uncheckOtherFilter(window.selector.filterArray.elements);
          window.selector.randomFilter.classList.add('img-filters__button--active');
          var randomArr = copyArr.slice();
          window.util.shuffleRandomNumber(randomArr);
          var randomArrShort = randomArr.slice(0,10);
          renderPhoto(randomArrShort);
          return;
  
        case target = 'filter-discussed':
          uncheckOtherFilter(window.selector.filterArray.elements);
          window.selector.discFilter.classList.add('img-filters__button--active');
          var discArr = copyArr.slice();
          sortMax(discArr)
          renderPhoto(discArr);
          return;
  
        default:
          uncheckOtherFilter(window.selector.filterArray.elements);
          window.selector.defaultFilter.classList.add('img-filters__button--active');
          renderPhoto(resultRespose);
          return;
      }
    };
     // Снимает со всех фильтров статус АКТИВНЫй
  var uncheckOtherFilter = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains('img-filters__button--active')) {
        arr[i].classList.remove('img-filters__button--active');
      }
    }
  };

  window.addEventListener('click', swithcFiltersHandler);
  });

 


  var renderPhoto = function (arr, fragment) {
    deletePictures();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      
      fragment.appendChild(writeInfoPhoto(arr[i], i));
    }
    window.selector.imgPlace.appendChild(fragment);
    window.userphoto.show(arr);
  }

  var sortMax = function (arr) {
    arr.sort((a, b) => b.comments > a.comments ? 1 : -1);
    console.log(arr)
  }
  
 
  var deletePictures = function () {
    var pictures = document.querySelectorAll('a.picture');
    pictures.forEach(function (picture) {
      picture.remove();
    });
  };
})();
