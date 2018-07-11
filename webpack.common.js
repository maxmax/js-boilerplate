const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});

const extractHtml = new HtmlWebpackPlugin({
  title: 'Output Management landing',
  filename: 'index.html',
  template: 'src/template/index.ejs',
  chunks:['main']
  //hash: true,
});

//const extractAbout = new HtmlWebpackPlugin({
//  title: 'Output Management landing',
//  filename: 'view/about.html',
//  template: 'src/template/about.html',
//});

//const extractContacts = new HtmlWebpackPlugin({
//  title: 'Output Management Contacts',
//  filename: 'view/contacts.html',
//  template: 'src/template/contacts.html',
//});

module.exports = {
   entry: {
      main: ["babel-polyfill", "./src/index.js"]
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Production'
      }),
			extractSass,
			extractHtml,
      // extractAbout,
			// extractContacts
			//new BundleAnalyzerPlugin()
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
	 module: {
		rules: [
			{
				 test: /\.js$/,
				 exclude: /node_modules/,
				 use: {
					 loader: 'babel-loader',
					 options: {
						 presets: ['env'],
						 plugins: ["transform-async-to-generator"]
					 }
				 }
			},
			{
				 test: /\.css$/,
				  //use: [
  				//	'style-loader',
  				//	'css-loader'
				  //]
          use: [ 'css-loader', 'postcss-loader' ]
			},
			{
				 test: /\.scss$/,
         use: extractSass.extract({
           fallback: "style-loader",
           use:[ 'css-loader', 'postcss-loader', 'sass-loader' ]
         })
  				//use: extractSass.extract({
  				//	use: [{
  				//		loader: "css-loader"
  				//	}, {
  				//		loader: "sass-loader"
  				//	}],
  				//	// use style-loader in development
  				//	fallback: "style-loader"
  				//})
			},
			{
				 test: /\.(png|svg|jpg|gif|mp4)$/,
				 use: [
					 'file-loader?name=assets/[name].[hash].[ext]'
				 ]
			},
			{
				 test: /\.(csv|tsv)$/,
				 use: [
					 'csv-loader'
				 ]
			},
			{
				 test: /\.xml$/,
				 use: [
					 'xml-loader'
				 ]
			},
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
		]
	 }
};
