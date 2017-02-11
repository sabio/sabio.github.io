var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');



gulp.task('js', function(){
	gulp.src([
		'./bower_components/jquery/dist/jquery.min.js',
		'./src/js/script.js',
	])
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('./js'))


});

gulp.task('css', function() {
	gulp.src('./src/scss/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(gulp.dest('./css'));
});


gulp.task('watch', function(){
	gulp.watch('./src/scss/*.scss', ['css'])
});

gulp.task('default', ['js','css','watch']);
