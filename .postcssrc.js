module.exports = {
	plugins: [
		require('autoprefixer')({
			flexbox: true,
			grid: true,
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
			zindex: false,
		}),
		require('postcss-pxtorem')({
			replace: true,
		}),
	],
};
