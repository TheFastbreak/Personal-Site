var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Jekyll Task
 gulp.task('jekyll-build', function (done) {
     browserSync.notify(messages.jekyllBuild);
     return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
         .on('close', done);
 });

 gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
     browserSync.reload();
 });

// Borwser-Sync

gulp.task('browserSync-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {baseDir: "_site"}

  });
});

// sass to Css to Pipe Task
gulp.task('sass', function () {
    return gulp.src('assets/styles/main.sass')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/styles'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/styles'));
});




 // gulp watching all files...

gulp.task('watch', function () {
  gulp.watch("assets/js/**/*.js", ['jekyll-rebuild']);
  gulp.watch('assets/styles/**', ['jekyll-rebuild']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html'], ['jekyll-rebuild']);
})

gulp.task('default', ['browserSync-sync', 'watch']);
