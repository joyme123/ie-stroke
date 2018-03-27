const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = process.env.WEBPACK_ENV;
var libraryName = 'iestroke'
var plugins = [], outputFile;

if (env === 'lib') {
    plugins.push(new UglifyJSPlugin({
		sourceMap:true
	}));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

module.exports = {
	entry: './src/index',
	output: {
		filename: outputFile,
        path: path.resolve(__dirname, 'lib'),
        library: "IEStroke",
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './lib'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.(scss|css)$/,

				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			}
		]
	},

    

	plugins: plugins
};
