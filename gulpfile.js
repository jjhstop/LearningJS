const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
  // ESLint를 실행
  gulp.src(["src_es6/**/*.js", "public/src_es6/**/*.js"])
  .pipe(eslint())
  .pipe(eslint.format());
  //노드소스
  gulp.src("src_es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("src_dist"));
  //브라우저 소스
  gulp.src("public/src_es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/src_dist"));
});
