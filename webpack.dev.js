/**
 * WordPress Webpack Config
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.build.js');
const path = require('path');
// const { resolve } = require('path');

const cssName = 'css/[name].css';

// Build Config
module.exports = merge(baseConfig, {
	entry: ['./src/_themes/docs/js/docs.js', './src/_themes/docs/scss/docs.scss'],
	output: {
		filename: 'js/docs.js',
		path: path.resolve(__dirname, 'build/docs'),
	},
});
