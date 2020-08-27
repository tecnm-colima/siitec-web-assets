'use strict';

const
    fibers      = require('fibers'),
    gulp        = require('gulp'),
    path        = require('path'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    svgstore    = require('gulp-svgstore');

sass.compiler = require('sass');

gulp.task('compile:styles', function() {
    return gulp
        .src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass.sync({
                fiber: fibers,
                outputStyle: 'compressed'
            }).on('error', sass.logError))
        .pipe(rename({ suffix : '.min' }))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('watch:styles', function() {
    gulp.watch('./src/styles/**/*.scss', gulp.series('compile:styles'));
});

gulp.task('compile:graphics', function() {
    return gulp
        .src('./src/graphics/**/*.svg', { base: './src/graphics' })
        .pipe(rename(function(file) {
            var name = file.dirname.split(path.sep);
            name.push(file.basename);
            file.basename = name.join('-');
        }))
        .pipe(svgstore())
        .pipe(rename({ basename: 'graphics' }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch:graphics', function() {
    gulp.watch('./src/graphics/**/*.svg', gulp.series('compile:graphics'));
});

gulp.task('copy:fonts', function() {
    return gulp
        .src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('watch:fonts', function() {
    gulp.watch('./scr/fonts/**/*.*', gulp.series('copy:fonts'));
})