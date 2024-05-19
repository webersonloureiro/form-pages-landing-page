const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano')
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('sass', function sassFunc() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('./src/css'))
});

gulp.task('minify', function minifyFunc() {
    return gulp.src('./src/css/style.css')
        .pipe(cssNano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('uglify', function uglifyFunc() {
    return gulp.src('./src/js/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function watchFunc() {
    gulp.watch(['./src/sass/*.scss', './src/sass/blocks/*.scss', './src/js/*.js'], gulp.series('sass', 'minify', 'uglify'));
});