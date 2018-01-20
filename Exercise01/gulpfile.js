var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
	watch = require('gulp-watch');

gulp.task('default', () => 
	gulp.src('style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('build'))
);

gulp.task('stream', function () {
	return watch('style.css', {ignoreInitial: false })
		.pipe(gulp.dest('build'));
});