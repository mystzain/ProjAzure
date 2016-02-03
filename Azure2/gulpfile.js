/// <binding Clean='clean' />
var gulp = require('gulp');

gulp.task('clean', function () {
    // 将你的默认的任务代码放在这
    gulp.src('./node_modules/angular/*')
        .pipe(gulp.dest('./libs/angular'));
    gulp.src('./node_modules/jquery/dist/*')
        .pipe(gulp.dest('./libs/jquery'));
    gulp.src('./node_modules/ui-router/release/*')
        .pipe(gulp.dest('./libs/angular'));
});