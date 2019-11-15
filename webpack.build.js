/**
 * RDS Webpack Config
 */

const env = process.env.NODE_ENV;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ver = '0.14.0';
const cssName = env === 'production' ? `${ver}/rds-cu.css` : 'css/[name].css';

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
				test: /\.(scss|css)$/,
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
							sourceMap: false,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false,
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
			files: [
				'build/**/*',
				'src/_blocks/**/*.scss',
				'src/_components/**/*.scss',
				'src/_core/layouts/**/*.scss',
				'src/_core/scss/**/*.scss',
				'src/_themes/cu/scss/**/*.scss',
			],
			notify: false,
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
