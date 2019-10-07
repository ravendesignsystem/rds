module.exports = {
	plugins: [
		require("autoprefixer")({
			flexbox: false,
			grid: false
		}),
		require("cssnano")({
			preset: [
				"advanced",
				{
					cssDeclarationSorter: {
						order: "concentric-css"
					},
					discardComments: {
						removeAll: true
					}
				}
			]
			// zindex: false,
		}),
		require("postcss-pxtorem")({
			replace: true
		})
	]
};
