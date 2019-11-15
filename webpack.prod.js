/**
 * RDS Webpack Config
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

// TODO figure out how to pull this var from webpack.build.js
const ver = '0.14.0';

// Build Config
module.exports = merge(baseConfig, {
	entry: ['./src/_core/js/core.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: ver + '/rds-cu.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new FileManagerPlugin({
			onStart: {
				delete: [
					'./dist/_blocks',
					'./dist/_components',
					'./dist/core',
					'./dist/' + ver,
				],
			},
			onEnd: {
				copy: [
					{
						source: './build/docs',
						destination: './docs',
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
