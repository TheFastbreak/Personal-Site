const
 GULP = require('gulp'),
 SASS = require('gulp-sass'),
 PREFIX = require('gulp-autoprefixer'),
 BS = require('browser-sync'),
 CP = require('child_process'),
 JALERT = '<span style="color: coral">Jekyll is Running:</span> $ jekyll build';

// Jekyll Task
 GULP.task('jekyll-build', function (done) {
     BS.notify(JALERT);
     return CP.spawn('jekyll', ['build'], {stdio: 'inherit'})
         .on('close', done);
 });

 GULP.task('jekyll-rebuild', ['jekyll-build'], function () {
     BS.reload();
 });

// Borwser-Sync

GULP.task('bs-sync', ['sass-build', 'jekyll-build'], function() {
  BS({
    server: {baseDir: "_site"}

  });
});

// Sass to Css to Pipe Task
 GULP.task('sass-build', function () {
   return GULP.src('assets/styles/main.sass')
     .pipe(SASS({
       includePaths: ['css'],
       onError: BS.notify
     }))
     .pipe(PREFIX(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
     .pipe(GULP.dest('_site/assets/styles'))
     .pipe(BS.reload({stream:true}))
     .pipe(GULP.dest('assets/styles'));
 });




 // GULP watching all files...

GULP.task('watch', function () {
  GULP.watch("assets/js/**/*.js", ['jekyll-rebuild']);
  GULP.watch('assets/styles/**', ['jekyll-rebuild']);
  GULP.watch(['*.html', '_layouts/*.html', '_includes/*.html'], ['jekyll-rebuild']);
})

gulp.task('default', ['bs-sync', 'watch']);
