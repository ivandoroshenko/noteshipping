const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');

const jsFiles = [
   './src/js/libs.js',
   './src/js/jquery.slim.min.js',
   './src/js/slick.min.js',
   './src/js/custom.js',
   './src/js/slider.js',
   './src/js/toggle.js'
]

async function styles() {
   return gulp.src('./src/scss/main.scss')
   .pipe(sourcemaps.init())
   .pipe(plumber())
   .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
   .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
   }))
   .pipe(cleanCSS({
      level: 2
   }))
   .pipe(gulp.dest('./build/css'))
   .pipe(browserSync.stream());
}

async function html() {
   gulp.src(['./src/html/partials/*.html']) 
   .pipe(rigger()) 
   .pipe(gulp.dest('./build/'))
   .pipe(browserSync.reload({ stream: true }))
}

function images () {
   return gulp.src('./src/img/**/*')
   .pipe(gulp.dest('./build/img'))
}

function scripts() {
   return gulp.src(jsFiles)
   .pipe(sourcemaps.init())
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('./build/js'))
   .pipe(browserSync.reload({ stream: true }))
}

function clean() {
   return del(['build/*'])
}

function watch() {
   browserSync.init({
      server: {
          baseDir: "./build"
      }
  });
  gulp.watch('./src/scss/**/*.scss', styles)
  gulp.watch('./src/js/**/*.js', scripts)
  gulp.watch("./src/html/**/*.html", html);
  gulp.watch("./src/img/**/*", images);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('del', clean);
gulp.task('images', images);
gulp.task('html', html);
gulp.task('build', gulp.series(clean, images, html, styles,scripts));
gulp.task('watch', gulp.series('build', watch));
gulp.task("html", html);

