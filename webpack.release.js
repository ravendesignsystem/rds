/**
 * RDS Webpack Config
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const version = '0.15.0';

// Build Config
module.exports = merge(baseConfig, {
	entry: ['./src/_core/js/core.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: version + '/rds-cu.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
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
						source: './dist/' + version + '/rds-cu.css',
						destination: './docs/css/docs.css',
					},
					{
						source: './dist/' + version + '/rds-cu.js',
						destination: './docs/js/docs.js',
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
						source: './src/_core',
						destination: './dist/_core',
					},
				],
			},
		}),
	],
});
