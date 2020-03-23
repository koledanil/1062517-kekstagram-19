'use strict';
// моудль который позволяет пользователю загрузить свою фотку
(function () {
  var fileChooser = document.querySelector('#upload-file');
  var preview = window.selector.imgPreview;

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = window.constant.ADD_PHOTO_RULES.FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });


    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
