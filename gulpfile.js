const gulp = require('gulp');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');

const SRC_PATH = 'src';
const DIST_PATH = 'dist';
const ICONS_FILE = 'ptdv-icons-custom.js';

const FONTAWESOME_FILES = [
  'node_modules/@fortawesome/fontawesome/index.js',
  'node_modules/@fortawesome/fontawesome-free-solid/index.js',
  'node_modules/@fortawesome/fontawesome-free-brands/index.js',
  SRC_PATH + ICONS_FILE
];

gulp.task('clean', function () {
  return gulp
    .src(DIST_PATH, { read: false })
    .pipe(clean());
});

gulp.task('concat-files', function () {
  return gulp.src(FONTAWESOME_FILES)
    .pipe(concat(ICONS_FILE))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('build', function (callback) {
  runSequence('clean', 'concat-files', callback);
});

gulp.task('default', ['build']);
