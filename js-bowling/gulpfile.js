const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src(['bowling-game.js', 'spec/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('es6'));
});

gulp.task('test', function () {
    return gulp.src('es6/*.js')
        .pipe(jasmine({
            includeStackTrace: false
        }));
});

gulp.task('default', ['build', 'test']);