import gulp from 'gulp';
import sass from 'gulp-sass';


import webpackConfig from "../webpack.config";


import gutil from "gulp-util";
import webpack from "webpack";

gulp.task("compile_client_views", function(callback){
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("copy_client_style", function() {
    return gulp.src("./src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/"))
});