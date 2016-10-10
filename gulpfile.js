var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('mytask', function () {
    console.log("Hello this is gulp test");
});

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true,
        middleware: function (connect) {
            return [connect().use("/bower_components", connect.static("bower_components"))];
        }
    });
});

gulp.task('build-less', function () {
    gulp.src(['./app/less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('./app/less'))
})

gulp.task('html-js', function () {
    gulp.src(['./app/*.html', './app/views/*.html', './app/js/*.js'])
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html', './app/js/*.js'], ['html-js'])
});

gulp.task('default', ['mytask', 'connect', 'build-less', 'watch']);

gulp.task('serve', ['connect']);
