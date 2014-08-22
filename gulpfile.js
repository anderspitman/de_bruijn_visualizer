var gulp = require('gulp');

var easyimg = require('easyimage');
var fs = require('fs');
var path = require('path');


gulp.task('default', function() {
  console.log("Hi there");
});

gulp.task('thumbnails', function() {
  var srcDir = path.join(__dirname, 'mugs');
  var dstDir = path.join(__dirname, 'thumbnails');
  fs.readdir(srcDir, function(err, files) {
    for (var i=0; i<files.length; i+=1) {
      var basename = path.basename(files[i], '.jpg');
      var dstPath = basename+'.png';
      easyimg.thumbnail({
        src: path.join(srcDir, files[i]),
        dst: path.join(dstDir, dstPath),
        width: 50,
        height: 50,
        x: 0,
        y: 0
      }).then(function(file) {
        console.log("success");
      }, function(err) {
        console.warn("error");
      });
    }
  });
});

