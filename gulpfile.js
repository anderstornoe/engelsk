/// SWALLOW ERROR FUNCTION: 


/*
function swallowError(error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}*/

//  

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver');
    browserify = require('gulp-browserify'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    bower = require('gulp-bower');

var env,
    jsSources,
    htmlSources,
    cssSources,
    outputDir;

env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    outputDir = 'builds/development/';
} else {
    outputDir = 'builds/production/';
}

jsSources = [
    //'components/js/*.js',
    'builds/development/js/vid_new.js',
    'builds/development/js/opg_1.js',
    'builds/development/js/billeddrag.js'
];

htmlSources = [
    outputDir + '*.html'
];

cssSources = [
    'components/css/*.css'
];

gulp.task('bower', function() { 
    return bower() .pipe(gulp.dest('bower_components')) 
});

gulp.task('log', function() {
    gutil.log("Hej fra loggen");
});

gulp.task('js', function() {
    gulp.src('components/js/*.js')
        //.on('error', swallowError)
        .pipe(concat("script.js"))
        .pipe(browserify())
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputDir + 'js'))
   // .pipe(webserver.reload())
});

gulp.task('html', function() {
    gulp.src('builds/development/*.html')
        //.on('error', swallowError)
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(outputDir)))

    //.pipe(webserver.reload())

});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(concat("styles.css"))
        .pipe(gulpif(env === 'production', minifyCSS({
            keepBreaks: false
        })))
        .pipe(gulp.dest(outputDir + 'css'))
        //.pipe(webserver.reload())
});

gulp.task('lint', function() {
    return gulp.src(jsSources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js', 'lint','html']);
    gulp.watch('builds/development/*.html', ['html', 'lint']);
    gulp.watch(cssSources, ['css', 'lint']);


});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['bower', 'js', 'webserver', 'html', 'css', 'lint', 'log', 'watch']);
