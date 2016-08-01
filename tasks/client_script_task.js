import gulp from 'gulp';
import sass from 'gulp-sass';
import webpack from "webpack-stream";
import webpackConfig from "../webpack.config";
import named from 'vinyl-named';

gulp.task("compile_client_views", function(){
    return gulp.src('src/app/views/*.jsx')
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/public/views/'));
});

gulp.task("copy_client_style", function() {
    return gulp.src("./src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/"))
});