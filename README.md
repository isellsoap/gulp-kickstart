gulp-kickstart
==============

A mini framework for quickly starting web projects. It’s built around [gulp.js](http://gulpjs.com/), features live reloading capability for fast CSS and JavaScript development, and uses the CSS categorization approach introduced by [SMACSS](http://smacss.com/).

## What is this good for?

You can

* quickly start a web project with only a few commands
* see how [gulp.js](http://gulpjs.com/) works and how simple it is to work with
* edit and tweak the code and settings to exactly fit your needs (actually I encourage you to do so)
* instantly see the results of your CSS and JavaScript without having to manually reload the browser

## Prerequirements

For using the mini framework you have to have installed

* [node.js](http://nodejs.org/)
* [Ruby](https://www.ruby-lang.org/)
* [Sass](http://sass-lang.com/)

on your system.

## Getting Started

### 1. Install gulp globally:

```
npm install -g gulp
```

### 2. Install gulp plugins in the root folder of this repository:

```
npm install
```

This will automatically install the following dev dependencies:

* [gulp](https://www.npmjs.org/package/gulp)
* [gulp-util](https://www.npmjs.org/package/gulp-util)
* [gulp-rename](https://www.npmjs.org/package/gulp-rename)
* [gulp-ruby-sass](https://www.npmjs.org/package/gulp-ruby-sass)
* [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)
* [gulp-concat](https://www.npmjs.org/package/gulp-concat)
* [gulp-load-plugins](https://www.npmjs.org/package/gulp-load-plugins)
* [gulp-livereload](https://www.npmjs.org/package/gulp-livereload)
* [tiny-lr](https://www.npmjs.org/package/tiny-lr)


### 3. Install one of the [LiveReload browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

### 4. Run gulp

```
gulp
```
