// TODO
// use rollup to package module see: https://medium.com/@backspaces/es6-modules-part-1-migration-strategy-a48de0b7f112
// consider using NPM instead for build (vs Gulp)

const gulp = require('gulp');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');

const SRC_PATH = 'src/icons';
const DIST_PATH = 'dist';
const ICONS_IN_FILE = 'ptdv-fontawesome.js';
const ICONS_OUT_FILE = 'ptdv-fontawesome.js';

// Note: for now just include fontawesome and add custom icons in project
const FONTAWESOME_FILES = [
  // 'node_modules/@fortawesome/fontawesome/index.js',
  // 'node_modules/@fortawesome/fontawesome-free-solid/index.js',
  // 'node_modules/@fortawesome/fontawesome-free-brands/index.js',
  SRC_PATH + '/' + ICONS_IN_FILE
];

gulp.task('clean', function () {
  return gulp
    .src(DIST_PATH, { read: false })
    .pipe(clean());
});

gulp.task('concat-files', function () {
  return gulp.src(FONTAWESOME_FILES)
    .pipe(concat(ICONS_OUT_FILE))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('build', function (callback) {
  runSequence('clean', 'concat-files', callback);
});

gulp.task('default', ['build']);
