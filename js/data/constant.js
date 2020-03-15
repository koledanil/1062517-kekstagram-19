'use strict';
// Данный файл содержит набор констант, переменных, которые
// задают правила работы.

(function () {
  window.constant = {
    PHOTO_RULES: {
      PHOTO: {
        COUNT: 25,
        DECRIPTION_AMOUNT: 10,

        LIKE: {
          MIN: 15,
          MAX: 200
        }
      },

      NAME_AVATAR: {
        MIN: 1,
        MAX: 6,
        MAX_NAME_TEMPLATE: 6
      },

      COMMENT: {
        MIN: 1,
        MAX: 5,
        MAX_COMMENT_TEMPLATE: 10,
      }
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
      URL_UPLD: 'https://js.dump.academy/kekstagram',
      TIME_CLOSE_MSG: 12,
      XHR_TIMEOUT: 12000,
      SHOW_AMOUNT_CMNT: 5,
      PLUS_AMOUNT_CMNT: 5
    } // end ADD_PHOTO_RULES
  };// end window.constant
})(); // end iief
