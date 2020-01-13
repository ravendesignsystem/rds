/**
 * RDS Webpack Config
 */

require('dotenv').config();

const baseConfig = require('./webpack.build.js');
const CompressionPlugin = require('compression-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const S3Plugin = require('webpack-s3-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const version = '0.16.4';

// Build Config
module.exports = {
	entry: ['./src/_core/js/core.js', './src/_themes/cu/scss/cu.scss'],
	output: {
		filename: version + '/rds-cu.js',
		path: path.resolve(__dirname, 'dist'),
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
							name: version + '/rds-cu.css',
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
		new FileManagerPlugin({
			onStart: {
				delete: [
					'./dist/_blocks',
					'./dist/_components',
					'./dist/core',
					'./dist/' + version,
				],
			},
			onEnd: {
				copy: [
					{
						source: './src/_blocks/**/*.scss',
						destination: './dist/_blocks',
					},
					{
						source: './src/_blocks/**/*.js',
						destination: './dist/_blocks',
					},
					{
						source: './src/_components/**/*.scss',
						destination: './dist/_components',
					},
					{
						source: './src/_components/**/*.js',
						destination: './dist/_components',
					},
					{
						source: './src/_core',
						destination: './dist/_core',
					},
				],
			},
		}),
		new S3Plugin({
			include: /.*\.(css.gz|js.gz|map.gz)/,
			s3Options: {
				accessKeyId: process.env.AWS_ACCESS_KEY,
				secretAccessKey: process.env.AWS_SECRET_KEY,
				region: 'us-east-1',
			},
			s3UploadOptions: {
				Bucket: process.env.AWS_CDN_BUCKET,

				// Set content encoding for gzip files
				ContentEncoding(fileName) {
					if (/\.gz/.test(fileName)) {
						return 'gzip';
					}
				},

				// Set content types for css and js
				ContentType(fileName) {
					if (/\.css/.test(fileName)) {
						return 'text/css';
					}
					if (/\.js/.test(fileName)) {
						return 'application/javascript';
					}
				},

				// Set expiry date on all items
				Expires() {
					return new Date(Date.now() + 63072000000);
				},

				//Set permission level on all items
				ACL() {
					return 'public-read';
				},
			},
			directory: 'dist/' + version,
			basePath: 'rds/' + version,
		}),
		new S3Plugin({
			include: /.*\.(css.gz|js.gz|map.gz)/,
			s3Options: {
				accessKeyId: process.env.AWS_ACCESS_KEY,
				secretAccessKey: process.env.AWS_SECRET_KEY,
				region: 'us-east-1',
			},
			s3UploadOptions: {
				Bucket: process.env.AWS_CDN_BUCKET,

				// Set content encoding for gzip files
				ContentEncoding(fileName) {
					if (/\.gz/.test(fileName)) {
						return 'gzip';
					}
				},

				// Set content types for css and js
				ContentType(fileName) {
					if (/\.css/.test(fileName)) {
						return 'text/css';
					}
					if (/\.js/.test(fileName)) {
						return 'application/javascript';
					}
				},

				// Set expiry date on all items
				Expires() {
					return new Date(Date.now() + 63072000000);
				},

				//Set permission level on all items
				ACL() {
					return 'public-read';
				},
			},
			directory: 'dist/' + version,
			basePath: 'rds/latest',
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
