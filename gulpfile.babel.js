'use strict';

import gulp from 'gulp';
import del from 'del';

import './tasks/server_script_task';
import './tasks/client_script_task';


gulp.task("clean", ()=> {
    return del(["./dist/**/*"])
});




gulp.task("build",gulp.series(["clean", "copy_server_script","copy_server_views", "compile_server_views","copy_client_style", "compile_client_views"]));




gulp.task("default", gulp.series (["build"]));
