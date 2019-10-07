/**
 * WordPress Webpack Config
 */

const env = process.env.NODE_ENV;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Set version and css names
const cssName = 'css/[name].css';

if (env === 'production') {
	const cssName = ver + '/rds-cu.css';
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: cssName,
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
	// optimization: {
	// 	minimizer: [
	// 		new UglifyJsPlugin({
	// 			cache: true,
	// 			parallel: true,
	// 			sourceMap: true,
	// 		}),
	// 	],
	// },
};
