var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('build-css', function () {

    gulp.src('./app/scss/main.scss')
        .pipe(sass({
            includePath: ['./app/scss']
        }))
        .pipe(gulp.dest('./app/css'))
})

gulp.task('watch', function () {

    watch('./app/scss/*.scss', ['build-css']);
})
