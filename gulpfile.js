var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');

gulp.task('test', function () {
  return test().on('error', function (e) {
    throw e;
  });
});

gulp.task('default', function () {
  gulp.watch(['./index.js', './test/index.js'], test);
  test();
});

function test() {
  return gulp.src(['test/index.js'], {read: false})
    .pipe(mocha({
      R: 'spec',
      c: true,
      inlineDiffs: true,
      debug: true
    })).on('error', console.warn.bind(console));
}
