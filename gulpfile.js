const gulp = require('gulp');
const insert = require('gulp-insert');
const fs = require('fs');
const concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
const through2 = require('through2');

function getVersion() {
    const versionFilePath = './version.txt';
    const currentVersion = fs.readFileSync(versionFilePath, 'utf-8').trim();

    const updateVersion = process.argv.includes('--updateVersion');

    if (!updateVersion) {
        return currentVersion;
    }

    const files = fs.readdirSync('./src');
    const count = files.length;

    const versionParts = currentVersion.split('.');
    if (Number(versionParts[1]) !== count) {
        // Count is different, reset x to 0 and add 1 to count
        const newVersion = `1.${count}.0`;
        fs.writeFileSync(versionFilePath, newVersion);
        return newVersion;
    } else {
        // Count is the same, increment x
        const newX = Number(versionParts[2]) + 1;
        const newVersion = `${versionParts[0]}.${versionParts[1]}.${newX}`;
        fs.writeFileSync(versionFilePath, newVersion);
        return newVersion;
    }
}


const OUTPUT = 'merged.user.js';

function getHeader() {
    const version = "1.0.0" // TODO: getVersion();
    return fs.readFileSync("template.user.js", 'utf-8').replace('version_number_here', version);
}

// Gulp task to minify JavaScript files
gulp.task('scripts', () => {
    return gulp
        // .src('./src/util.js')
        // .pipe(concat(OUTPUT))
        .src(['./src/**/*.js', '!./src/setup.js', '!./src/util.js'])
        //.pipe(gulp.src(['./src/**/*.js', '!./src/setup.js', '!./src/util.js']))
        .pipe(concat(OUTPUT))
        //.pipe(gulp.src('./src/setup.js'))
        //.pipe(concat(OUTPUT))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function () {
    return gulp
        .src('./styles/**/*.css')
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('merge', function () {
    let cssContents = fs.readFileSync('./dist/all.css', 'utf8');

    return gulp
        .src(`./dist/${OUTPUT}`)
        .pipe(
            through2.obj(function (file, enc, cb) {
                file.contents = Buffer.concat([
                    Buffer.from('var style = document.createElement("style");\n'),
                    Buffer.from('style.textContent = `' + cssContents + '`;\n'),
                    Buffer.from('document.head.appendChild(style);\n'),
                    Buffer.from('\n'),
                    file.contents,
                ]);
                cb(null, file);
            }),
        )
        .pipe(insert.prepend(getHeader()))
        .pipe(gulp.dest('./dist/'));
});

const updateVersion = process.argv.includes('--updateVersion');

if (updateVersion) {
    gulp.task('default', (cb) => {
        gulp.series('scripts', 'styles', 'merge')(cb);
    });
} else {
    gulp.task('default', (cb) => {
        gulp.watch('./template.user.js', gulp.series('scripts', 'styles', 'merge'));
        gulp.watch('./src/**/*.js', gulp.series('scripts', 'styles', 'merge'));
        gulp.watch('./styles/**/*.css', gulp.series('scripts', 'styles', 'merge'));

        gulp.series('scripts', 'styles', 'merge')(cb);

        process.on('SIGINT', () => {
            console.log('Exiting...');
            process.exit(0);
        });
    });
}