'use strict';
(function () {
// F.1 Отображение фоток
// F.1.1 Очищение фоток при переключюении в F.1.3
  var deletePictures = function () {
    var pictures = document.querySelectorAll('a.picture');
    pictures.forEach(function (picture) {
      picture.remove();
    });
  };

  // F.1.2 Запись данных о фотке в F.1.3
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

  // F.1.3 Рендеринг фотки
  var renderPhoto = function (arr) {
    deletePictures();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {

      fragment.appendChild(writeInfoPhoto(arr[i], i));
    }
    window.selector.imgPlace.appendChild(fragment);
    window.userphoto.show(arr);
  };

  // F.2 Переключает кнопки фильтров
  var uncheckOtherFilter = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains('img-filters__button--active')) {
        arr[i].classList.remove('img-filters__button--active');
      }
    }
  };

  // F.3 Сортируем по количеству комментариев
  var sortMax = function (arr) {
    arr.sort(function (a, b) {
      if (b.comments > a.comments) {
        return 1;
      } else {
        return -1;
      }
    });
  };

  // F.4 функция переклчает и фильтры
  var change = function (target, arr, resultRespose) {
    switch (target) {
      case target = 'filter-default':
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.defaultFilter.classList.add('img-filters__button--active');
        renderPhoto(resultRespose);
        return;

      case target = 'filter-random':
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.randomFilter.classList.add('img-filters__button--active');
        var randomArr = arr.slice();
        window.util.shuffleRandomNumber(randomArr);
        var randomArrShort = randomArr.slice(0, 10);
        window.util.debounce(renderPhoto(randomArrShort));
        return;

      case target = 'filter-discussed':
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.discFilter.classList.add('img-filters__button--active');
        var discArr = arr.slice();
        sortMax(discArr);
        renderPhoto(discArr);
        return;

      default:
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.defaultFilter.classList.add('img-filters__button--active');
        renderPhoto(resultRespose);
        return;
    }
  };

  // F.5 Функция показывает фильтры при статусе запроса 4
  var show = function (readyState) {
    if (readyState === 4) {
      window.selector.filterContainer.classList.remove('img-filters--inactive');
    } else {
      window.selector.filterContainer.classList.add('img-filters--inactive');
    }
  };

  // OUTPUT
  window.filter = {
    show: show,
    change: change,
    renderPhoto: renderPhoto,
  };
})();
