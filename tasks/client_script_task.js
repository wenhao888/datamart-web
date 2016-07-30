import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';

gulp.task("copy_client_script", function(){
    return gulp.src("./src/**/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("./dist/"))
});

gulp.task("copy_client_style", function() {
    return gulp.src("./src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/"))
});