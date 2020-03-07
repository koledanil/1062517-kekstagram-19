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
        REG_EXP: /^[а-яёa-z0-9]+$/i,
        MIN_LENGTH: 3,
        MAX_LENGTH: 20,
        MAX_AMOUNT_TAG: 5
      },

      ZOOM: {// правила зума
        MIN: 25,
        MAX: 100,
        STEP: 25
      },

      msg: {
        errSharp: 'должен начинаться с символа #',
        errRegExp: 'должен быть без специальных символов\n',
        errLength: 'должен содержать не более 20 символов, включая #\n',
        errAmount: 'должно быть не более 5 тэгов',
        errDuplicate: 'Встречаются одинаковые тэги',
        errToShort: 'тэг не может содержать только #'
      },

      special: {
        counterErrAreaTitle: 0,
        counterErrTagTitle: 0,
        ORIGINAL_TITLE: document.title,
        // ^^^ Здесь содержится:
        // 1. каунтер ошибок в инпуте тэгов
        // 2. каунтер ошибок в textarea (она у нас там одна)
        // 3. Оригинальное название страницы. Его мы возвращаем по закрытию формы или исправлении всех ошибок
        // нужны для работы S.2 (submit)
        validityTag: true, // флаг для поля комента.
        validityTextArea: true, // флаг для поля комента. Если один из флагов будет фолс, то форма не даст себя отправить.
        counterSymbol: 0
      }
    } // end ADD_PHOTO_RULES
  };// end window.constant
})(); // end iief
