/**
 * WordPress Webpack Config
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
const { resolve } = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

// Current RDS Version
const ver = '0.13.0';

// Build Config
module.exports = merge(baseConfig, {
	entry: ['./src/_core/js/core.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: ver + '/rds-cu.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new copyWebpackPlugin([
			{ from: 'build/docs', to: '../docs' },
			{ from: 'src/_core/layouts', to: '../dist/core/layouts' },
			{ from: 'src/_core/scss', to: '../dist/core/scss' },
			{ from: 'src/_blocks/**/*.scss', to: '../dist/_blocks/banner' },
			{ from: 'src/_components/icons/', to: '../dist/_components/icons' },
		]),
	],
});
