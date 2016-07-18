// Variables and requirements

var gulp = require('gulp');
var VIUR = {
	css: require('viur-ignite-css'),
	js: require('viur-ignite-js'),
	icons: require('viur-ignite-icons'),
	html: require('viur-ignite-html'),
	compressor: require('viur-ignite-compressor')
}



// Tasks

// compilation and postproduction of LESS to CSS
gulp.task('css', function () {
	return VIUR.css.build()
});

// compilation of JS
gulp.task('js', function () {
	return VIUR.js.build()
});

// build icon classes
gulp.task('icons', function () {
	return VIUR.icons.build()
});

// çompression
gulp.task('comp', function () {
	return VIUR.compressor.build({
		index: "./sources/html/_layout.html"
	})
});

// html rendering
gulp.task('html', function () {
	return VIUR.html.build()
});

// create source folder with prototype style.less
// create source folder with prototype app.js
// create source folder with prototype style.less
gulp.task('init', function () {
	VIUR.css.init();
	VIUR.js.init();
	VIUR.icons.init();
});

// default rendering
gulp.task('default', ['css', 'js', 'html']);