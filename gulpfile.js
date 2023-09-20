const{src, dest, watch, series, parallel} = require("gulp");

// Css y Sass

const sass = require("gulp-sass")(require("sass"));

// Imagenes

const imagemin = require("gulp-imagemin");

function css(done){

    src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("build/css"));

    done()
}

function imagenes(done){
    return src("src/img/**/*")
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(dest("build/img"))

    done()
}

function dev(){
    watch("src/scss/**/*.scss", css);
    watch("src/img/**/*", imagenes);

}

exports.css = css
exports.imagenes = imagenes
exports.dev = dev
exports.default = series(css, dev);

