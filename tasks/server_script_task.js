import gulp from 'gulp';
import babel from "gulp-babel";

gulp.task("copy_server_script", function() {
    return gulp.src(["./src/**/*.js"])
        .pipe(babel())
        .pipe(gulp.dest("./dist/"));
});


gulp.task("copy_server_views", function () {
    return gulp.src(["./src/**/*.hbs"])
        .pipe(gulp.dest("./dist/"));
});

gulp.task("compile_server_views", function () {
    return gulp.src("./src/**/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("./dist/"))
});