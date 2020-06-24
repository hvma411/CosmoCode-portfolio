const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

gulp.task('connect', function(cb) {
  connect.server({
    root: './dist',
    livereload: true
  });
  cb();
});

gulp.task("sass", function() {
  return gulp.src('./src/scss/main.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({errLogToConsole: true}))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('./dist/css'))
          .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src('./src/JS/*.js')
    .pipe(gulp.dest('./dist/JS'))
    .pipe(connect.reload());
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));  
  gulp.watch('./src/**/*.html', gulp.series('html'));
  gulp.watch('./src/JS/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('connect', 'watch'));