/**
 * WordPress Webpack Config
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const version = '0.19.9';

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
					'./dist/' + version,
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
	],
});
