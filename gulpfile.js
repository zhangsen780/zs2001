// 这个文件写的的gulp完成功能

let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let rename = require("gulp-rename");
let babel = require("gulp-babel");
let sass = require("gulp-sass");
// 完成复制index.html的功能
// gulp.task("copy-index",async ()=>{
//     gulp.src("./index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao"));
// });

// gulp.task("copy-html",async ()=>{
//     gulp.src("./*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao"));
// });

// gulp.task("copy-pic",async ()=>{
//     gulp.src("./img/*.").pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao"));
// });

// gulp.task("copy-all",async ()=>{
//     gulp.src(["./src/**/*","!./src/index.html"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao"));
// });

// 监听
// gulp.task("watch-all",async()=>{
gulp.task("default", async () => {
    // gulp.watch("./src/**/*",async ()=>{
    //     gulp.src("./src/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao"));
    // })

    gulp.watch("./src/pages/*.html", async () => {
        gulp.src("./src/pages/*.html")
            // .pipe(htmlmin({
            //     collapseWhitespace: true,
            //     removeEmptyAttributes: true,
            //     minifyJS: true,
            //     minifyCSS: true
            // }))
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\conversezs\\pages"))
    })

    gulp.watch("./src/css/*.css", async () => {
        gulp.src("./src/css/*.css")
            // .pipe(cssmin())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\conversezs\\css"));
     })

    // gulp.watch("./src/imgs/*.*" ,async()=>{
    //     gulp.src('./src/imgs/*.*').pipe(gulp.dest("D:\\phpStudy\\WWW\\conversezs\\imgs"));
    // })
    // gulp.watch("./src/js/*.js",async ()=>{
    //     gulp.src("./src/js/*.js")
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao\\js"));
    // })

    // 合并并压缩
    // gulp.watch("./src/js/*.js",async ()=>{
    //     gulp.src(["./src/js/index.js","./src/js/goodslist.js"])
    //     .pipe(concat("tools.js"))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao\\js"));
    // })

    // 合并并压缩并重命名
    // gulp.watch("./src/js/*.js",async ()=>{
    //     gulp.src(["./src/js/index.js","./src/js/goodslist.js"])
    //     .pipe(concat("tools.js"))
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao\\js"))
    //     .pipe(uglify())
    //     .pipe(rename("tools.min.js"))
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao\\js"));
    // })

    // es6转ES5

    // gulp.watch("./src/js/index.js",async ()=>{
    //     gulp.src(["./src/js/index.js"])
    //     .pipe(babel({
    //         presets: ['@babel/env']
    //     }))
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao\\js"));
    // })

    gulp.watch("./src/sacc/*.scss", async () => {
        gulp.src("./src/sacc/*.scss")
            .pipe(sass())
            .pipe(cssmin())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\conversezs\\sacc"))
    })

    gulp.watch("./src/js/*.js", async () => {
        gulp.src("./src/js/*.js")


            // .pipe(babel({
            //     presets: ['@babel/env']
            // }))
            // .pipe(uglify())

            .pipe(gulp.dest("D:\\phpStudy\\WWW\\conversezs\\js"));
    })

})
