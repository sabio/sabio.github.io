const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var jQuery = require("jquery")


const config = {
	entry: ['./src/js/script.js', './src/css/style.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/script.js'
	},
	module: {
		rules: [
			/*
			your other rules for JavaScript transpiling go in here
			*/
			{ // regular css files
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader?importLoaders=1',
				}),
			},
			{ // sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin({ // define where to save the file
			filename: 'css/style.css', //'css/[name].css'
			allChunks: true
		}),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
	]
};



module.exports = config;