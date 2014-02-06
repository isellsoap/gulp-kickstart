// gulp plugins
var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  // sass
  sass = require('gulp-ruby-sass'),
  // scripts
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  // live reloading
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  server = lr();

// file names
var
  defaultFileName = 'main',
  defaultMinSuffix = 'min',
  minFileName = defaultFileName + '.' + defaultMinSuffix;

// file paths
var
  baseUrl = './assets/',
  cssPath = baseUrl + 'css/',
  jsPath = baseUrl + 'js/',
  paths = {
    sass: [
      cssPath + '*.scss',
      cssPath + '**/*.scss'
    ],
    scripts: [
      // jquery must be the first file
      jsPath + 'libs/jquery/*.js',
      jsPath + 'libs/**/*.js',
      jsPath + '*.js',
      // ignore minified file
      '!' + jsPath + minFileName + '.js'
    ]
  };

gulp.task('sass', function () {
  gulp.src(cssPath + defaultFileName + '.scss')
    // unminified version
    .pipe(sass())
    .pipe(gulp.dest(cssPath))
    // minified version
    .pipe(sass({ style: 'compressed' }))
    .pipe(rename(minFileName + '.css'))
    .pipe(gulp.dest(cssPath))
    .pipe(livereload(server));
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat(minFileName + '.js'))
    .pipe(gulp.dest(jsPath))
    .pipe(livereload(server));
});

gulp.task('watch', function () {
  server.listen(35729, function(err) {
    if (err) return console.error(err);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
  });
});

gulp.task('default', ['sass', 'scripts', 'watch']);
