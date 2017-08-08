var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');


gulp.task('js', () => {
    return gulp.src('vendors/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('vendors/dist'));
});

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}


gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir : '.',
            proxy: 'hkolev.int:8080'
        }
    })
})
 
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .on('error', handleError)
    .pipe(autoprefixer({
        browsers: ['last 5 versions'], 
    }))
    .pipe(sourcemaps.write('/.maps'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }))
})



gulp.task('watch', ['browserSync', 'sass'], function(){
  	gulp.watch('scss/**/*.scss', ['sass']);
  	gulp.watch('*.html', browserSync.reload);
  	gulp.watch('vendors/**/*.js', browserSync.reload);
	gulp.watch('vendors/app.js',['js']);
})