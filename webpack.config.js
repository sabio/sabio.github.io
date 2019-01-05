const path = require('path');
const webpack = require('webpack');
const jQuery = require("jquery")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const config = {
	mode: 'production',
	entry: ['./src/js/script.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/script.js'
	},
	module: {
    rules: [
      {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
			{
      test: /\.scss$/,
      use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
	optimization: {
		minimizer: [
			new UglifyJsPlugin()
		]
	},
	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
  },
	plugins: [
		new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
		new CopyWebpackPlugin([
	    { from: path.resolve(__dirname, 'src/docs'), to: path.resolve(__dirname, 'dist/docs') },
			{ from: path.resolve(__dirname, 'src/imgs'), to: path.resolve(__dirname, 'dist/imgs') }
  	])
	]
};

module.exports = config;
