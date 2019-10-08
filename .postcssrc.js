module.exports = {
	plugins: [
		require('autoprefixer')({
			flexbox: false,
			grid: false,
		}),
		require('cssnano')({
			preset: [
				'advanced',
				{
					cssDeclarationSorter: {
						order: 'concentric-css',
					},
					discardComments: {
						removeAll: true,
					},
				},
			],
			// TODO is z-index being reset to lower numbers still an issue on compile?
			// zindex: false,
		}),
		require('postcss-pxtorem')({
			replace: true,
		}),
	],
};
