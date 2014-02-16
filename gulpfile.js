// gulp plugins
var
  gulp = require('gulp'),
  // loads in all gulp plugins prefixed with `gulp-` and attaches them to the
  // `gp` variable
  gp = require('gulp-load-plugins')(),
  // livereload server
  server = require('tiny-lr')();

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
    .pipe(gp.rubySass({ style: 'compressed' }))
    .pipe(gp.rename(minFileName + '.css'))
    .pipe(gulp.dest(cssPath))
    .pipe(gp.livereload(server));
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(gp.uglify())
    .pipe(gp.concat(minFileName + '.js'))
    .pipe(gulp.dest(jsPath))
    .pipe(gp.livereload(server));
});

gulp.task('watch', function () {
  server.listen(35729, function(err) {
    if (err) return console.error(err);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
  });
});

gulp.task('default', ['sass', 'scripts', 'watch']);