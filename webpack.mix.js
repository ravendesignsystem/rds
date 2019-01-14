const mix = require('laravel-mix');
const env = process.env.NODE_ENV;

mix
	// .sass('src/_scss/rds/critical.scss', 'src/_css')
	.sass('src/_themes/rds/scss/app.scss', 'build/docs/css')
	.options({
		postCss: [
			require('cssnano')({
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			}),
			require('postcss-pxtorem')({
				replace: true,
			}),
			require('css-mqpacker'),
		],
	})
	.js('src/_themes/rds/js/app.js', 'build/docs/js')
	.browserSync({
		host: 'localhost',
		proxy: 'http://localhost:8000/',
		files: [
			'build/**/*'
		],
	});

proxy: 'my-domain.test'
if ( env === 'production' ) {
	mix
		.sass('src/_core/scss/core.scss', 'dist/core/css/rds-core-min')
		.js('src/_core/js/core.js', 'dist/core/js/rds-core-min')
		// .sass('src/_themes/cms/scss/_cms.scss', 'dist/themes/cms/css/cms-min')
		// .sass('src/_themes/ff/scss/_ff.scss', 'dist/themes/ff/css/ff-min')
		// .sass('src/_themes/fw/scss/_fw.scss', 'dist/themes/fw/css/fw-min')
		.copy('build/docs', 'docs');
}
// .version()

