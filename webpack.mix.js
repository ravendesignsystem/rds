const mix = require('laravel-mix');
const env = process.env.NODE_ENV;

mix
	// .sass('src/_scss/docs/critical.scss', 'src/_css')
	.sass('src/_themes/docs/scss/docs.scss', 'build/docs/css')
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
	.js('src/_themes/docs/js/docs.js', 'build/docs/js')
	.sass('src/_themes/hp/scss/critical.scss', 'src/_themes/hp/_css')
	.sass('src/_themes/hp/scss/hp.scss', 'build/docs/css')
	.js('src/_themes/hp/js/hp.js', 'build/docs/js')

	.browserSync({
		host: 'localhost',
		proxy: 'http://localhost:8000/',
		files: ['build/**/*'],
	});

if (env === 'production') {
	mix
		.js('src/_core/js/core.js', 'rds/core/js/core.js')
		.sass('src/_components/_components.scss', 'rds/_components/_components.scss')
		.copyDirectory('src/_core/layouts', 'rds/core/layouts')
		.copyDirectory('src/_core/scss', 'rds/core/scss')
		.copy('build/docs', 'docs')
		.copy('src/_blocks/banner/*.scss', 'rds/_blocks/banner/')
		.copy('src/_blocks/cardgrid/*.scss', 'rds/_blocks/cardgrid')
		.copy('src/_blocks/content/*.scss', 'rds/_blocks/content')
		.copy('src/_blocks/footerbrand/*.scss', 'rds/_blocks/footerbrand')
		.copy('src/_blocks/footersimple/*.scss', 'rds/_blocks/footersimple')
		.copy('src/_blocks/footersitemap/*.scss', 'rds/_blocks/footersitemap')
		.copy('src/_blocks/globalnav/*.scss', 'rds/_blocks/globalnav')
		.copy('src/_blocks/globalnav/*.scss', 'rds/_blocks/globalnav')
		.copy('src/_blocks/imgfull/*.scss', 'rds/_blocks/imgfull')
		.copy('src/_blocks/listing/*.scss', 'rds/_blocks/listing')
		.copy('src/_blocks/login/*.scss', 'rds/_blocks/login')
		.copy('src/_blocks/masthead/*.scss', 'rds/_blocks/masthead/')
		.copy('src/_blocks/menu/*.scss', 'rds/_blocks/menu/')
		.copy('src/_blocks/search/*.scss', 'rds/_blocks/search')
		.copy('src/_blocks/sidebar/*.scss', 'rds/_blocks/sidebar')
		.copy('src/_blocks/textimg/*.scss', 'rds/_blocks/textimg');
}
