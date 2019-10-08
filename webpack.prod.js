/**
 * WordPress Webpack Config
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
const { resolve } = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

// TODO figure out conditional loading in webpack.build.js
const ver = '0.13.0';
const cssName = ver + '/rds-cu.css';

// Build Config
module.exports = merge(baseConfig, {
	entry: ['./src/_core/js/core.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: ver + '/rds-cu.js',
		path: path.resolve(__dirname, 'dist'),
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
	plugins: [
		new copyWebpackPlugin([
			{ from: './build/docs', to: '../docs' },
			{ from: './src/_core/layouts', to: '../dist/core/layouts' },
			{ from: './src/_core/scss', to: '../dist/core/scss' },
			{ from: './src/_blocks', to: '../dist/_blocks' },
			{ from: './src/_components', to: '../dist/_components' },
			{ from: './src/_components/icons', to: '../dist/_components/icons' },
		]),
	],
});
