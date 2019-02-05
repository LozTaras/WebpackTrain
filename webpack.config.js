const path = require('path'),
	NODE_ENV = process.env.NODE_ENV || 'development',
	webpack = require('webpack');

module.exports = {
	context: __dirname + '/frontend',

	entry: {		
		home: './home',
		about: './about'
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		library: '[name]'
	},

	watch: NODE_ENV == 'development',

	watchOptions: {
		aggregateTimeout: 100,
	},

	devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : '',

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
		}),
		new webpack.NoEmitOnErrorsPlugin()
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