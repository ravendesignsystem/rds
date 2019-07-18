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
		.sass('src/_themes/core/scss/core.scss', 'rds/core/scss/core.scss')
		.js('src/_themes/core/js/core.js', 'rds/core/js/core.js')
		.copy('build/docs', 'docs')
		.copy('src/_themes/core/scss/base/vendor/*.scss', 'rds/core/scss/vendor/')
		.copy('src/_themes/core/scss/base/vars/*.scss', 'rds/core/scss/vars/')
		.copy('src/_blocks/banner/*.scss', 'rds/blocks/banner/')
		.copy('src/_blocks/cardgrid/*.scss', 'rds/blocks/cardgrid')
		.copy('src/_blocks/content/*.scss', 'rds/blocks/content')
		.copy('src/_blocks/footersimple/*.scss', 'rds/blocks/footersimple')
		.copy('src/_blocks/footersitemap/*.scss', 'rds/blocks/footersitemap')
		.copy('src/_blocks/globalnav/*.scss', 'rds/blocks/globalnav')
		.copy('src/_blocks/globalnav/*.scss', 'rds/blocks/globalnav')
		.copy('src/_blocks/imgfull/*.scss', 'rds/blocks/imgfull')
		.copy('src/_blocks/listing/*.scss', 'rds/blocks/listing')
		.copy('src/_blocks/login/*.scss', 'rds/blocks/login')
		.copy(
			['src/_blocks/masthead/*.scss', 'src/_blocks/masthead/*.js'],
			'rds/blocks/masthead'
		)
		.copy(['src/_blocks/menu/*.scss', 'src/_blocks/menu/*.js'], 'rds/blocks/menu')
		.copy('src/_blocks/search/*.scss', 'rds/blocks/search')
		.copy('src/_blocks/sidebar/*.scss', 'rds/blocks/sidebar')
		.copy('src/_blocks/textimg/*.scss', 'rds/blocks/textimg');
}
//

if (env === 'dist') {
	mix.minify
		.sass('src/_themes/core/scss/core.scss', 'dist/core/core.scss')
		.js('src/_themes/cu/js/cu.js', 'dist/core/core.js');
}

if (env === 'package') {
	mix
		.sass('src/_themes/core/scss/core.scss', 'package/core/scss/_core.scss')
		.copy(
			'src/_themes/core/scss/base/vendor/_include-media.scss',
			'package/core/scss/base/vendor/'
		)
		.copy(
			'src/_themes/core/scss/base/vars/_vars.scss',
			'package/core/scss/base/vars/'
		)
		// Blocks
		.copy(
			'src/_blocks/footersimple/_footersimple.scss',
			'package/blocks/footersimple/'
		)
		.copy(
			'src/_blocks/footersitemap/_footersitemap.scss',
			'package/blocks/footersitemap/'
		);
}
