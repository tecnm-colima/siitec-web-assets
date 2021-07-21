'use strict';

const DIST_PATH = process.env.DIST_PATH || "./dist";

const
    fibers      = require('fibers'),
    gulp        = require('gulp'),
    path        = require('path'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    svgSprite   = require('gulp-svg-sprite');

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
        .pipe(gulp.dest(DIST_PATH));
});
gulp.task('watch:styles', function() {
    gulp.watch('./src/styles/**/*.scss', gulp.series('compile:styles'));
});

gulp.task('watch:svg', function() {
    gulp.watch('./src/graphics/**/*.svg', gulp.series('svgsprite'));
});

gulp.task('copy:fonts', function() {
    return gulp
        .src('./src/fonts/**/*.*')
        .pipe(gulp.dest(path.join(DIST_PATH, 'fonts')));
});

gulp.task('watch:fonts', function() {
    gulp.watch('./scr/fonts/**/*.*', gulp.series('copy:fonts'));
});

gulp.task('svgsprite', function() {
    return gulp
        .src('**/*.svg', { cwd: 'src/graphics'})
        .pipe(svgSprite({
            shape: { id: { separator: '-' }, transform: ['svgo'] },
            mode: { symbol: { dest:"", sprite:'graphics.svg' } }
        }))
        .pipe(gulp.dest('dist'));
});