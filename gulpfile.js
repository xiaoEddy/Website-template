var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
// 引入依赖包

gulp.task('server', function() {
  browserSync({
    server: { // 监听的文件夹
      baseDir: 'app'
    },
    port: 8080, // 设置端口
    ghostMode: false, // 开启的话有一个设备 滚动(scroll)\点击(clicks)\forms 了页面其他设备也会有相同的行为
    notify: false // 不会在浏览器里显示任何提醒(开启的话每次刷新会有提示，在移动端下遮挡很严重)
  });

  gulp.watch(['*.html', 'css/*.css', 'js/*.js'], {cwd: 'app'}, reload);
  gulp.watch('./app/scss/*.scss', ['sass']);
});


gulp.task('sass', function(){
  return gulp.src('./app/scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('./app/css'));
});
/*
  outputStyle:
    nested：嵌套缩进的css代码，它是默认值。

    expanded：没有缩进的、扩展的css代码。

    compact：简洁格式的css代码。

    compressed：压缩后的css代码。

    如需改变压缩格式，可以直接命令行运行： "gulp sass" 来直接编译
*/