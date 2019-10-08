/**
 * WordPress Webpack Config
 */

const env = process.env.NODE_ENV;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ver = '0.13.0';

// TODO why you no workey?
if (process.env.NODE_ENV === 'production') {
	console.log('Running in production');
	// const cssName = ver + '/rds-cu.css';
} else {
	console.log('Running in development');
	// const cssName = 'css/[name].css';
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
			// TODO with conditional logic working, this all comes back and is removed from dev/prod
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: cssName,
			// 			},
			// 		},
			// 		{
			// 			loader: 'extract-loader',
			// 		},
			// 		{
			// 			loader: 'css-loader?-url',
			// 			options: {
			// 				sourceMap: true,
			// 			},
			// 		},
			// 		{
			// 			loader: 'postcss-loader',
			// 			options: {
			// 				sourceMap: true,
			// 			},
			// 		},
			// 		{
			// 			loader: 'sass-loader',
			// 			options: {
			// 				sourceMap: true,
			// 			},
			// 		},
			// 	],
			// },
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
