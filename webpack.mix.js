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
		.sass('src/_themes/core/scss/core.scss', 'dist/core/css/rds-core-min')
		.sass('src/_themes/cu/scss/cu.scss', 'dist/themes/cu/1.2.2/cu.min.css')
		.js('src/_themes/cu/js/cu.js', 'dist/themes/cu/1.2.2/cu.min.js')
		.js('src/_themes/core/js/core.js', 'dist/core/js/rds-core-min')
		.copy('build/docs', 'docs');
	// .sass('src/_themes/cms/scss/_cms.scss', 'dist/themes/cms/css/cms-min')
	// .sass('src/_themes/ff/scss/_ff.scss', 'dist/themes/ff/css/ff-min')
	// .sass('src/_themes/fw/scss/_fw.scss', 'dist/themes/fw/css/fw-min')
}

if (env === 'dist') {
	mix.minify
		.sass('src/_themes/cu/scss/cu.scss', 'dist/themes/cu/css')
		.js('src/_themes/cu/js/cu.js', 'dist/themes/cu/js');
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
