const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require('gulp-sass-glob');
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");

const autoprefixer = require('gulp-autoprefixer') ;
const csso = require('gulp-csso');
const htmlclean = require('gulp-htmlclean');
const webp = require("gulp-webp") ;

gulp.task("favicon:dev", function () {
    return gulp.src("./src/*.ico")
        .pipe(changed("./build/")) // Проверяем, изменился ли файл
        .pipe(gulp.dest("./build/")); // Копируем файл в /build/
});


gulp.task("html:docs", function () {
    return gulp
        .src(["./src/html/**/*.html", "!./src/html/blocks/*.html"])

        .pipe(changed("./docs/"))
        .pipe(
            plumber({
                errorHandler: notify.onError({
                    title: "HTML",
                    message: "Error <%= error.message %>",
                    sound: false,
                }),
            })
        )
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(htmlclean())
        .pipe(gulp.dest("./docs/"));
});

gulp.task("sass:docs", function () {
    return gulp
        .src("./src/scss/*.scss")
        .pipe(changed("./docs/css/"))
        
        .pipe(
            plumber({
                errorHandler: notify.onError({
                    title: "SCSS",
                    message: "Error <%= error.message %>",
                    sound: false,
                }),
            })
        )
        
        .pipe(sourceMaps.init())
        .pipe(autoprefixer())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(csso())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("./docs/css/"));
});


gulp.task("images:docs", function () {
    return gulp.src("./src/img/**/**.*")
        .pipe(changed("./docs/img/"))
        
        
        // .pipe(gulp.src("./src/img/**.*"))
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest("./docs/img/"))
        .pipe(webp())
        .pipe(gulp.dest("./docs/img/"))
    ;
});

gulp.task("fonts:docs", function () {
    return gulp.src("./src/fonts/**.*")
        .pipe(changed("./docs/fonts/"))
        .pipe(gulp.dest("./docs/fonts/"));
});

gulp.task("files:docs", function () {
    return gulp.src("./src/files/**.*")
        .pipe(changed("./docs/files/"))
        .pipe(gulp.dest("./docs/files/"));
});

gulp.task("server:docs", function () {
    browserSync.init({
        server: {
            baseDir: "./docs",
        },
    });
    browserSync.watch("docs", browserSync.reload);
});

gulp.task("clean:docs", function (cb) {
    if (fs.existsSync("./docs/")) {
        return gulp
            .src("./docs/", { read: false })
            .pipe(clean({ force: true }));
    } else {
        cb();
    }
});

gulp.task("js:docs", function () {
    return gulp
        .src("./src/js/*.js")
        .pipe(changed("docs/js"))
        .pipe(
            plumber({
                errorHandler: notify.onError({
                    title: "JS",
                    message: "Error <%= error.message %>",
                    sound: false,
                }),
            })
        )
        .pipe(babel())
        .pipe(webpack(require("./../webpack.config.js")))
        .pipe(gulp.dest("docs/js"));
});


gulp.task("watch:docs", function () {
    gulp.watch("./src/**/*.scss", gulp.parallel("sass:docs"));
    gulp.watch("./src/**/*.html", gulp.parallel("html:docs"));
    gulp.watch("./src/img/**.*", gulp.parallel("images:docs"));
    gulp.watch("./src/fonts/**.*", gulp.parallel("fonts:docs"));
    gulp.watch("./src/files/**.*", gulp.parallel("files:docs"));
    gulp.watch("./src/js/**.*", gulp.parallel("js:docs"));
    gulp.watch("./src/favicon.ico", gulp.parallel("favicon:dev")); // Добавляем наблюдение за favicon.ico
});

