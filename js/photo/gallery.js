'use strict';
// Функция ввыодит изображения на главной странице
(function () {

  var filterHandler = function (resultRespose, readyState) {
    window.filter.show(readyState);
    var copyArr = resultRespose;
    window.filter.renderPhoto(resultRespose);

    var swithcFiltersHandler = function (evt) {
      var target = evt.target.id;
      window.filter.change(target, copyArr, resultRespose);
    };

    window.addEventListener('click', swithcFiltersHandler);
  };

  window.selector.filterContainer.classList.remove('img-filters--inactive');
  window.backend.load(window.constant.ADD_PHOTO_RULES.URL_LOAD, filterHandler);
})();
