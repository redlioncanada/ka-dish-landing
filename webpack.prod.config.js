var webpack = require("webpack")

module.exports = {
	entry: "./app/app.ts",
	output: {
		path: __dirname + "/public/js",
		filename: "bundle.compiled.js"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			compress: {
				warnings: false
			}
		})
	],
	resolve: {
	    "extensions": ["", ".js", ".ts"]
	  },
  	devtool: "source-map",
	module: {
		loaders: [
            { test: /\.ts/, "loaders": ["ts-loader"], "exclude": /node_modules/ }
		]
	}
}