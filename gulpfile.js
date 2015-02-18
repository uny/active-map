var gulp   = require('gulp');
var jade   = require('gulp-jade');
var sass   = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil  = require('gulp-util');

var paths = {
    jade:   './jade/**/*.jade',
    sass:   './sass/**/*.scss',
    coffee: './coffee/**/*.coffee'
};

gulp.task('jade', function() {
    gulp.src(paths.jade)
        .pipe(jade())
        .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee({bare: true})).on('error', gutil.log)
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.coffee, ['coffee']);
});

gulp.task('default', ['watch', 'jade', 'coffee', 'sass']);
