'use strict';
// Данный файл содержит набор констант, переменных, которые
// задают правила работы.

(function () {
  window.constant = {
    GALLERY_RULES: {
      DEBOUNCE_INTERVAL: 30000,
    }, // end photo-rules

    ADD_PHOTO_RULES: {
      UPLD_COMMENTS: {// опис. правила валидации коментов
        MIN_LENGTH: 0,
        MAX_LENGTH: 140
      },

      UPLD_TAGS: {// опис. правила валидации тэгов.
        DIVIDER_SYMBOL: '#',
        REG_EXP: /[^a-zA-Z0-9]/,
        MIN_LENGTH: 3,
        MAX_LENGTH: 20,
        MAX_AMOUNT_TAG: 5
      },

      ZOOM: {// правила зума
        MIN: 25,
        MAX: 100,
        STEP: 25
      },

      MSG: {
        ERR_SHARP: 'должен начинаться с символа #.',
        ERR_REGEXP: 'должен быть без специальных символов.',
        ERR_LENGTH: 'должен содержать не более 20 символов, включая #.',
        ERR_AMOUNT: 'Больше 5 штук нельзя. Лимит превышен на ',
        ERR_DUBLICATE: 'Встречаются одинаковые тэги.',
        ERR_VERY_SHORT: 'тэг не может содержать только #.',
        ERR_MAX_CHARACTER: 'Достигли лимит в 140 символов. 😶',
        ERR_NETWORK: 'Нет интернета. Проверьте подключение к интернету. ☝🏻',
        OK_NETWORK: 'Интернет есть. Теперь все работает. 🚀'
      },

      ORIGINAL_TITLE: document.title,
      URL_UPLOAD: 'https://js.dump.academy/kekstagram',
      URL_LOAD: 'https://js.dump.academy/kekstagram/data',
      TIME_CLOSE_MSG: 12,
      XHR_TIMEOUT: 15000,
      SHOW_AMOUNT_CMNT: 5,
      PLUS_AMOUNT_CMNT: 5
    } // end ADD_PHOTO_RULES
  };// end window.constant
})(); // end iief
