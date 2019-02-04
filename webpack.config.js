const path = require('path'),
	NODE_ENV = process.env.NODE_ENV || 'development',
	webpack = require('webpack');

module.exports = {
	entry: './home.js',
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'build.js',
		library: 'home'
	},

	watch: NODE_ENV == 'development',

	watchOptions: {
		aggregateTimeout: 100,
	},

	devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : '',

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
		})
	],

	module: {

		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader?optional[]=runtime',
				options: {
				  presets: ['@babel/preset-env']
				}
			  }
		}]

	},

	optimization: {
		minimize: NODE_ENV == 'production' ? true : false,
	}
}