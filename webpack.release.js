/**
 * RDS release Webpack Config
 */
require('dotenv').config();
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');

const version = '0.21.1';

// Build Config
module.exports = merge(baseConfig, {
	plugins: [
		// Build dist for npm package
		new FileManagerPlugin({
			onStart: {
				delete: [
					'./dist/_blocks',
					'./dist/_components',
					'./dist/_core',
					// './dist/' + version,
				],
			},
			onEnd: {
				copy: [
					{
						source: './build/docs/css/core.*',
						destination: './dist/' + version,
					},
					{
						source: './build/docs/js/core.*',
						destination: './dist/' + version,
					},
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
						source: './src/_components/icons/*.svg',
						destination: './dist/_components/icons',
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
			directory: 'dist/latest',
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
			directory: 'dist/latest',
			basePath: 'rds/latest',
		}),
	],
});
