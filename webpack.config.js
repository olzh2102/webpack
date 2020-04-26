const path = require('path')

module.exports = {
	mode: 'development',
	// where to start
	entry: {
		main: './src/index.js',
		analytics: './src/analytics.js',
	},

	// where to output generated file
	output: {
		filename: '[name].bundle.js',

		// which folder to create and put bundle.js
		path: path.resolve(__dirname, 'dist'),
	},
}
