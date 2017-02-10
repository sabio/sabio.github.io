var gulp = require('gulp'),
	uglify = require('gulp-uglify');



gulp.task('scripts', function(){
	gulp.src([
		'./bower_components/jquery/dist/jquery.min.js',
		'./src/script.js',
	])
	.pipe(uglify())
	.pipe(gulp.dest('./js'))


});



gulp.task('default', ['scripts']);
