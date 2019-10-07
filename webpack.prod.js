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
		// new copyWebpackPlugin([
		// 	{ from: "./*.php", to: "../release" },
		// 	{ from: "./acf-json", to: "../release/acf-json" },
		// 	{ from: "./blocks", to: "../release/blocks" },
		// 	{ from: "./components", to: "../release/components" },
		// 	{ from: "./dist", to: "../release/dist" },
		// 	{ from: "./functions", to: "../release/functions" },
		// 	{ from: "./templates", to: "../release/templates" },
		// 	{ from: "./style.css", to: "../release" }
		// ]),
		// new SshWebpackPlugin({
		// 	port: process.env.SSH_PORT,
		// 	username: process.env.SSH_USER,
		// 	// password: process.env.SSH_PASS,
		// 	privateKey: require("fs").readFileSync(process.env.SSH_KEY),
		// 	from: "./release",
		// 	host: process.env.PROD_HOST,
		// 	before: process.env.PROD_CLEAN,
		// 	to: process.env.PROD_PATH
		// })
	],
});
