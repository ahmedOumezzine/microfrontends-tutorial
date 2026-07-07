const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: { publicPath: 'http://localhost:9081/' },
  devServer: {
    port: 9081,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  module: { rules: [{ test: /\.vue$/, loader: 'vue-loader' }, { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, { test: /\.css$/i, use: ['style-loader', 'css-loader'] }] },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'photoListApp',
      filename: 'remoteEntry.js',
      exposes: { './PhotoList': './src/PhotoList.vue' },
      shared: { vue: { singleton: true, requiredVersion: '^3.4.0' } },
    }),
  ],
};
