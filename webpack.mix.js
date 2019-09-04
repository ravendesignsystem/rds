const mix = require('laravel-mix');
const env = process.env.NODE_ENV;
const ver = "0.10.3";

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
	 .js('src/_core/js/core.js', 'dist/' + ver + '/rds-cu.js')
		.sass('src/_themes/cu/scss/cu.scss', 'dist/' + ver + '/rds-cu.css')
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
		.copy('build/docs', 'docs')
		.js('src/_core/js/core.js', 'dist/core/js/core.js')
		.sass('src/_components/_components.scss', 'dist/_components/_components.scss')
		.copyDirectory('src/_core/layouts', 'dist/core/layouts')
		.copyDirectory('src/_core/scss', 'dist/core/scss')
		.copy('src/_blocks/banner/*.scss', 'dist/_blocks/banner/')
		.copy('src/_blocks/cardgrid/*.scss', 'dist/_blocks/cardgrid')
		.copy('src/_blocks/content/*.scss', 'dist/_blocks/content')
		.copy('src/_blocks/footerbrand/*.scss', 'dist/_blocks/footerbrand')
		.copy('src/_blocks/footersimple/*.scss', 'dist/_blocks/footersimple')
		.copy('src/_blocks/footersitemap/*.scss', 'dist/_blocks/footersitemap')
		.copy('src/_blocks/globalnav/*.scss', 'dist/_blocks/globalnav')
		.copy('src/_blocks/globalnav/*.scss', 'dist/_blocks/globalnav')
		.copy('src/_blocks/imgfull/*.scss', 'dist/_blocks/imgfull')
		.copy('src/_blocks/listing/*.scss', 'dist/_blocks/listing')
		.copy('src/_blocks/login/*.scss', 'dist/_blocks/login')
		.copy('src/_blocks/masthead/*.scss', 'dist/_blocks/masthead/')
		.copy('src/_blocks/menu/*.scss', 'dist/_blocks/menu/')
		.copy('src/_blocks/search/*.scss', 'dist/_blocks/search')
		.copy('src/_blocks/sidebar/*.scss', 'dist/_blocks/sidebar')
		.copy('src/_blocks/textimg/*.scss', 'dist/_blocks/textimg')
		.copyDirectory('src/_components/icons/', 'dist/_components/icons/');
}
