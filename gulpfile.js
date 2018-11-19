"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify-es").default;
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var maps = require("gulp-sourcemaps");
var del = require("del");




// // source and distribution folder
// var source = "src/",
//   dest = "dist/";

// // Bootstrap scss source
// var bootstrapSass = {
//   in: "./node_modules/bootstrap-sass/"
// };

// // Bootstrap fonts source
// var fonts = {
//   in: [source + "fonts/*.*", bootstrapSass.in + "assets/fonts/**/*"],
//   out: dest + "fonts/"
// };

// // Our scss source folder: .scss files
// var scss = {
//   in: source + "scss/main.scss",
//   out: dest + "css/",
//   watch: source + "scss/**/*",
//   sassOpts: {
//     outputStyle: "nested",
//     precison: 3,
//     errLogToConsole: true,
//     includePaths: [bootstrapSass.in + "assets/stylesheets"]
//   }
// };




gulp.task("concatScripts", function() {
  return gulp
    .src(["js/slick.js", "js/scripts.js"])
    .pipe(maps.init())
    .pipe(concat("app.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp
    .src("js/app.js")
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("js"));
});

gulp.task("compileSass", function() {
  return gulp
    .src("scss/application.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("css"));
});

gulp.task("watchFiles", function() {
  gulp.watch(["scss/**/*.scss"], ["compileSass"]);
  gulp.watch("js/main.js", ["concatScripts"]);
});

gulp.task("clean", function() {
  del(["dist", "css/application.css*", "js/app*.js*"]);
});

gulp.task("build", ["minifyScripts", "compileSass"], function() {
  return gulp
    .src(
      [
        "css/application.css",
        "js/app.min.js",
        "index.html",
        "img/**",
        "fonts/**"
      ],
      { base: "./" }
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("serve", ["watchFiles"]);





// // copy bootstrap required fonts to dest
// gulp.task("fonts", function() {
//   return gulp.src(fonts.in).pipe(gulp.dest(fonts.out));
// });

// // compile scss
// gulp.task("sass", ["fonts"], function() {
//   return gulp
//     .src(scss.in)
//     .pipe(sass(scss.sassOpts))
//     .pipe(gulp.dest(scss.out));
// });




// default task
gulp.task("default", ["sass"], function() {
  gulp.watch(scss.watch, ["sass"]);
});

gulp.task("default", ["clean"], function() {
  gulp.start("build");
});
