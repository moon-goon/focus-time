const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
  target: 'web',
  mode: 'development',
  entry: [ 
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dev-build'),
  },
  devServer: {
    contentBase: path.join(__dirname, './dev-build'),
    compress: true,
    hot: true
  },
  plugins: [

    new HtmlWebPackPlugin({
      template: "./src/index.html", 
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),

  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};