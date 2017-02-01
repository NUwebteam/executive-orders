'use strict';

const gulp          = require('gulp');
const gulpPlugin    = require('gulp-load-plugins')();
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('autoprefixer');
const postcss       = require('gulp-postcss');
const minifyCss     = require('gulp-minify-css');
const rename        = require("gulp-rename");

/**
*   Bundles JS
*/
gulp.task('scripts', function(cb) {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            throw new gulpPlugin.util.PluginError('webpack', err);
        }

        gulpPlugin.util.log('[webpack]', stats.toString({
            colors: true
        }));

        cb();
    });
});

/**
*   Compile css
*/
gulp.task('styles', function() {
    return gulp.src('./assets/styles/index.scss')
        .pipe(sass())
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(postcss([
            autoprefixer({
                browsers: ["Android 2.3",
                            "Android >= 4",
                            "Chrome >= 20",
                            "Firefox >= 24",
                            "Explorer >= 8",
                            "iOS >= 6",
                            "Opera >= 12",
                            "Safari >= 6"]
            })
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
        // .pipe(browserSync.stream());
});

gulp.task('styles:watch', function () {
    gulp.watch('./assets/styles/**/*.scss', ['styles']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./assets/scripts/**/*.js', ['scripts']);
});

/**
*   Gulp task for dev
*/
gulp.task('default', [ 'styles:watch', 'scripts:watch' ]);
