const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
	CleanWebpackPlugin,
} = require('clean-webpack-plugin')

module.exports = {
	context: 'src',
	mode: 'development',
	// where to start
	entry: {
		main: './index.js',
		analytics: './analytics.js',
	},

	// where to output generated file
	output: {
		filename: '[name].[contenthash].js',

		// which folder to create and put bundle.js
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
		}),

		new CleanWebpackPlugin(),
	],
}
