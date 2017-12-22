var gulp = require('gulp'); // 載入 gulp
var gulpSass = require('gulp-sass'); // 載入 gulp-sass
var gulpWebserver = require('gulp-webserver');
var gulpPlumber = require('gulp-plumber');
var gulpJade = require('gulp-jade');
var gulpData = require('gulp-data');
var path = require('path');

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(gulpWebserver({
      livereload: true,
      directoryListing: true,
      host: '0.0.0.0',
      open: true
    }));
});
gulp.task('scss', function () {
  gulp.src('res/scss/**/*.scss') // 指定要處理的 Scss 檔案目錄
    .pipe(gulpPlumber())
    .pipe(gulpSass({ // 編譯 Scss
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('res/css')); // 指定編譯後的 css 檔案目錄
});

gulp.task('templates', function() {
  gulp.src('templates/**/*.jade')
      // .pipe(changed(config.templates.output))
      // `ngAnnotate` will only get the files that 
      // changed since the last time it was run 
      .pipe(gulpPlumber())
      .pipe(gulpJade({
          pretty: true
      }))
      .pipe(gulp.dest('html'))
});

gulp.task('development', ['webserver', 'scss', 'templates'], function () {
  gulp.watch('res/scss/**/*.scss', ['scss']) // 指定要處理的 Scss 檔案目錄
  gulp.watch('templates/**/*.jade', ['templates']) // 指定要處理的 Scss 檔案目錄
});