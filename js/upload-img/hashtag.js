'use strict';
// валидация хэш-тэгов
(function () {
  window.constant.ADD_PHOTO_RULES.special.validityTag = true;
  window.constant.ADD_PHOTO_RULES.special.ORIGINAL_TITLE = document.title;
  // ^^^сохраняем в объект название страницы, оно будет использовано когда пользователь исправит
  // все ошибки и нам надо будет вернуть старое название страницы. Для работы S.2

  // H.1 Поиск дубликатов внутри массива и возвращение False или true, знак
  var findDuplicate = function (arr) {
    var lowerCaseArr = [];
    arr.forEach(function (element) {
      lowerCaseArr.push(element.toLowerCase());
    });
    var temp = {};
    var isDuplicate;
    temp = arr.filter(function (item) {
      return temp[item] || !(temp[item] = !0);
    });
    if (temp.length > 0) {
      isDuplicate = true;
      return isDuplicate;

    } else {
      isDuplicate = false;
      return isDuplicate;
    }
  };

  // H.2 Функция проверяет каждый тег на ошибки характ. для 1 тэга. Проверка к-ва тэгов и дубликатов идет отдельно
  var checkTag = function (tagStorage) {
    var checkedTag = {};
    checkedTag.isSharp = tagStorage[0] === '#';
    checkedTag.maxLength = tagStorage.length < 20;
    checkedTag.onlySharp = tagStorage.length === 1 && tagStorage === '#';
    checkedTag.regExp = window.constant.ADD_PHOTO_RULES.UPLD_TAGS.REG_EXP.test(tagStorage);
    return checkedTag;
  };

  // H.3 Функция првоеряет каждый тэг на ошибки согласно H.2
  // ==== H.3.1 Функция обнуляет эффекты ошибок, затирает разметку и меняет флаг валидности
  var resetTags = function () {
    window.selector.tagErrPlaceUl.innerHTML = '';
    window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = 0;
    window.selector.tagInput.classList.remove('border-error');
    window.constant.ADD_PHOTO_RULES.special.validityTag = true;
  };

  var checkAllTags = function () {
    resetTags();
    var enteredTags = window.selector.tagInput.value.toLowerCase().split(' ').filter(function (item) {
      return item !== '';

    });

    // var tagErrTemplate = document.querySelector('#error-item').content.querySelector('li'); // детеныши ошибок
    // var tagErrPlaceUl = document.querySelector('#tag-error'); // мамка ошибок
    var errArray = []; // массив с перечнем дошибок для каждого тэга

    if (findDuplicate(enteredTags)) { // проверяем на дубликаты и записываем значение в массив.
      // проверка идет первой, чтобы юзер сразу видел есть дубликаты.
      window.constant.ADD_PHOTO_RULES.special.validityTag = false;
      errArray.push(window.constant.ADD_PHOTO_RULES.msg.errDuplicate);
    } else {
      window.constant.ADD_PHOTO_RULES.special.validityTag = true;
    }

    // проверка идет второй, чтобы также сразу его обрадывать.
    if (enteredTags.length > 5) {
      errArray.push(window.constant.ADD_PHOTO_RULES.msg.errAmount);
    }
    for (var i = 0; i < enteredTags.length; i++) { // цикл запускает проверку тэгов массива

      var checkedTag = checkTag(enteredTags[i]); // вот и стартанула фукнция H.2
      if (enteredTags[i].trim().length > 0 && checkedTag.isSharp !== true || checkedTag.maxLength !== true
      //  В данном условии записана глобальная проверка:
      //  1. Она начинается если итый тыг больше нуля
      //  2. Через или описаны все варианты ошибок, которые могут встретиться (на основании H.2)
      // Если это все выполняется то пойдет наполнение тэга ошибок
                                            || checkedTag.onlySharp !== false
                                            || checkedTag.regExp !== true) {
        window.selector.tagErrPlaceUl.innerHTML = ''; // затирает мамку ошибок
        window.constant.ADD_PHOTO_RULES.special.validityTag = false; // ставит флаг о том что невалид и форма не отправится

        if (checkedTag.isSharp !== true && checkedTag !== '') {
          (errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errSharp));
        } // если нет решетки записываем ошибку и имя тэга

        if (checkedTag.maxLength !== true) {
          errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errLength);
        } // если тэг длиннее нормы

        if (checkedTag.regExp !== true) {
          errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errRegExp);
        } // если регулярка пролетела

        if (checkedTag.onlySharp !== false) {
          errArray.push(enteredTags[i] + ' ' + window.constant.ADD_PHOTO_RULES.msg.errToShort);
        } // если только решетка и все

        // ^^^Даннаый фор предназначен для того, чтобы понятно отобразить юзеру:
        // 1. какие ошибки есть
        // 2. в каких тэгах они есть
        // То бишь чтобы избежать такой стиуации что по одной ошибки вывводится, и после исправления одной идет другая
        // и пользователь не может понять сколько ошибок всего.
        window.constant.ADD_PHOTO_RULES.special.counterErrTagTitle = errArray.length; // вносим длинну тэга в значение в объекте, чтобы отобр. в тайтле S.2
      }
    } // end for var i
    for (var m = 0; m < errArray.length; m++) {
      var clonedElement = window.selector.tagErrTemplate.cloneNode(true);
      clonedElement.textContent = errArray[m];
      clonedElement.classList.add('error-list__item');
      window.selector.tagErrPlaceUl.appendChild(clonedElement);
      window.selector.tagInput.classList.add('border-error');
    }
    // }
  }; // end check all tags

  window.selector.tagInput.addEventListener('change', checkAllTags);

})(); // finished IIFE
