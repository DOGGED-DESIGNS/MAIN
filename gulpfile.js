const { src, watch, parallel, series, dest } = require("gulp");

const concat = require("gulp-concat");

const rename = require("gulp-rename");

const autoprefixer = require("gulp-autoprefixer");

const gulpsass = require("gulp-sass")(require("sass"));

const uglify = require("gulp-uglify");

const cssnanao = require("cssnano");

const gulpSourcemap = require("gulp-sourcemaps");
const replace = require("gulp-replace");

const files = {
  srcScss: "./scss/**/*.scss",

  srcJs: "./js/**/*.js",

  srcHtml: "./index.php",

  srcabout: "./about.html",
  srcdetails: "./details.html",

  destJs: "./final/",

  destScss: "./final/",

  destHtml: "./final/",
};

function scssTask() {
  return src(files.srcScss)
    .pipe(gulpSourcemap.init())

    .pipe(
      gulpsass({
        errorLogToconsole: true,
        outputStyle: "compressed",
      })
    )

    .pipe(
      autoprefixer({
        browsers: ["last 2 version"],
        cascade: false,
      })
    )

    .pipe(rename({ suffix: ".min" }))

    .pipe(gulpSourcemap.write("./"))

    .pipe(dest(files.destScss));
}

function jsTask() {
  return src(files.srcJs)
    .pipe(concat("all.js"))
    .pipe(uglify())

    .pipe(dest(files.destJs));
}

function cacheBust() {
  const num = new Date().getTime();

  return src(files.srcHtml)
    .pipe(replace(/([cd=]{3})([\d]+)/g, "cd=" + num))

    .pipe(dest(files.destHtml));
}
function cacheBustFood() {
  const num = new Date().getTime();

  return src(files.srcabout)
    .pipe(replace(/([cd=]{3})([\d]+)/g, "cd=" + num))

    .pipe(dest(files.destHtml));
}
function cacheBustAdmin() {
  const num = new Date().getTime();

  return src(files.srcdetails)
    .pipe(replace(/([cd=]{3})([\d]+)/g, "cd=" + num))

    .pipe(dest(files.destHtml));
}

function watchtask() {
  watch(
    [
      files.srcScss,
      files.srcJs,
      files.srcHtml,
      files.srcdetails,
      files.srcabout,
    ],
    parallel(scssTask, jsTask, cacheBust, cacheBustFood, cacheBustAdmin)
  );
}

exports.default = series(
  scssTask,
  jsTask,
  cacheBust,
  watchtask,
  cacheBustAdmin,
  cacheBustFood
);
