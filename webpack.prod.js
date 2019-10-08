/**
 * RDS Webpack Config
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
const { resolve } = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

// TODO figure out how to pull this var from webpack.build.js
// const { ver } = require('./webpack.build.js');
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
			{ from: './build/docs', to: '../docs' },
			{ from: './src/_core/scss', to: '../dist/core/scss' },
			{
				from: './src/_blocks',
				to: '../dist/_blocks',
				ignore: ['./data', '*.json', '*.md', '*.twig', '*.yml'],
			},
			{
				from: './src/_components',
				to: '../dist/_components',
				ignore: ['./data', '*.json', '*.md', '*.twig', '*.yml'],
			},
			{
				from: './src/_core/layouts',
				to: '../dist/core/layouts',
				ignore: ['./data', '*.json', '*.md', '*.twig', '*.yml'],
			},
			{ from: './dist/' + ver + '/rds-cu.js', to: '../dist/core/js/core.js' },
		]),
	],
});
