'use strict';
(function () {
  window.checkFormat = function () {
    var fileChooser = document.querySelector('#upload-file');
    //   var preview = window.selector.imgPreview;
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();
    console.log(fileName)
    var matches = window.constant.ADD_PHOTO_RULES.FILE_TYPES.some(function (it) {
      fileName.endsWith(it);
    });
    console.log(matches);
    return matches;
  };
})();
