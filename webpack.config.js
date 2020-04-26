const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
	CleanWebpackPlugin,
} = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	// where to start
	entry: {
		main: './src/index.js',
		analytics: './src/analytics.js',
	},

	// where to output generated file
	output: {
		filename: '[name].[contenthash].js',

		// which folder to create and put bundle.js
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),

		new CleanWebpackPlugin(),
	],
}
