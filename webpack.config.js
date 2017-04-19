const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],

  output: {
    filename: 'static/[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      images: path.resolve(__dirname, 'images'),
    },
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["es2015", { "modules": false }], 'stage-3', 'react'],
            plugins: 'react-hot-loader/babel',
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=10000?url=false',
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },

  devtool: 'inline-source-map',
};