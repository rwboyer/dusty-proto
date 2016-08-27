var path = require('path');
var webpack = require('webpack');

var config = {
   entry: './app.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   resolve:{
     root: [
      path.resolve("./bower_components"),
      path.resolve("./js/src"),
      path.resolve("./assets/slick-circular/js")
    ]
  },
   module: {
      loaders: [
          {
          test: /jquery/, 
          loader: 'expose?$!expose?jQuery',
           resolve: [
              path.resolve("./node_modules")
            ]
          },
          
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
  plugins: [
              new webpack.ProvidePlugin({
                  $: 'jquery',
                  jQuery: 'jquery'
              })
          ]
}


module.exports = config;