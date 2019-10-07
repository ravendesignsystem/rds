/**
 * WordPress Webpack Config
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
// const { resolve } = require('path');

// TODO figure out conditional loading in webpack.build.js
const cssName = 'css/[name].css';

// Build Config
module.exports = merge(baseConfig, {
	entry: ['./src/_themes/docs/js/docs.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: 'js/docs.js',
		path: path.resolve(__dirname, 'build/docs'),
	},
	// TODO with conditional logic working, this all moves back to webpack.build.js
	module: {
		rules: [
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
});
