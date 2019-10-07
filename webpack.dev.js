/**
 * WordPress Webpack Config
 */
const path = require('path');
const { resolve } = require('path');
const env = process.env.NODE_ENV;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: ['./src/_themes/docs/js/docs.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: 'js/docs.js',
		path: path.resolve(__dirname, 'troy-dev-test'),
		// path: path.resolve(__dirname, 'build/docs'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	presets: ["@babel/preset-env"]
					// }
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].css',
						},
					},
					{
						loader: 'extract-loader',
					},
					{
						loader: 'css-loader?-url',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new CompressionPlugin({
			test: /\.(js|css|map)(\?.*)?$/i,
			filename: '[path].gz[query]',
			algorithm: 'gzip',
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			proxy: 'http://localhost:8000/',
			port: 3000,
			files: ['build/**/*'],
			// watchOptions: {
			// 	ignoreInitial: true,
			// 	ignored: 'dist/icons/*.svg',
			// },
			// notify: false,
		}),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
			}),
		],
	},
};
