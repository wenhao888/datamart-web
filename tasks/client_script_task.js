import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task("copy_client_script", function(){
    return gulp.src("./src/**/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("./dist/"))
});