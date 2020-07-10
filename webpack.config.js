/**
 * RDS Webpack Config
 */

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: {
		core: './src/_core/js/core.js',
		docs: './src/_themes/docs/js/docs.js',
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'build/docs'),
	},
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
							name: 'css/[name].css',
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
		new FileManagerPlugin({
			onStart: {
				delete: ['./build/docs'],
			},
			onEnd: {
				copy: [
					{
						source: './build/docs',
						destination: './docs',
					},
				],
			},
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			proxy: 'http://localhost:8000/',
			port: 3000,
			files: [
				'build/**/*',
				'src/_blocks/**/*.scss', // scss, js and main twig files
				'src/_blocks/**/**/*.scss', // twig data support files
				'src/_components/**/*.scss', // scss, js and main twig files
				'src/_components/**/**/*.scss', // twig data support files
				'src/_core/layouts/**/*.scss', // scss and js files
				'src/_core/js/*.js', // main js files
				'src/_core/js/**/*.scss', // js support files
				'src/_core/scss/*.scss', // main scss files
				'src/_core/scss/**/*.scss', // scss support files
			],
			notify: false,
		}),
	],
};
