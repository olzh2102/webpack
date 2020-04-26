const path = require('path')

module.exports = {
	mode: 'development',
	// where to start
	entry: './src/index.js',

	// where to output generated file
	output: {
		filename: 'bundle.js',

		// which folder to create and put bundle.js
		path: path.resolve(__dirname, 'dist'),
	},
}
