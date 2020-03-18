'use strict';
// Здесь происходит управление кнопками фильтров
(function () {
  // F.1 Если статус не 4, то фильтры не будут отображаться на странице
  var show = function (readyState) {
    if (readyState === 4) {
      window.selector.filterContainer.classList.remove('img-filters--inactive');
    } else {
      window.selector.filterContainer.classList.add('img-filters--inactive');
    }
  };
  var swithcFiltersHandler = function (evt) {
    var target = evt.target.id;
    switchBtn(target);
  };

  // Выделяет нужный фильтр после нажатия
  var switchBtn = function (target) {
    switch (target) {
      case target = 'filter-default':
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.defaultFilter.classList.add('img-filters__button--active');
        return;

      case target = 'filter-random':
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.randomFilter.classList.add('img-filters__button--active');
        return;

      case target = 'filter-discussed':
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.discFilter.classList.add('img-filters__button--active');
        return;

      default:
        uncheckOtherFilter(window.selector.filterArray.elements);
        window.selector.defaultFilter.classList.add('img-filters__button--active');
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

  var addEvtListener = function () {
    window.addEventListener('click', swithcFiltersHandler);
  };
  // OUTPUT
  window.filterbutton = {
    show: show,
    addEvtListener: addEvtListener
  };
})();
