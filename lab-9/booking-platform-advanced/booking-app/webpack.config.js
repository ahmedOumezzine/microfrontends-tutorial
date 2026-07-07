const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: { publicPath: 'http://localhost:9090/', uniqueName: 'bookingApp', clean: true, path: __dirname + '/dist' },
  resolve: { extensions: ['.ts', '.js'] },
  devServer: {
    port: 9090,
    historyApiFallback: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  module: { rules: [{ test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }, { test: /\.css$/i, use: ['style-loader', 'css-loader'] }] },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'bookingApp',
      remotes: {
        offerListApp: 'offerListApp@http://localhost:9091/remoteEntry.js',
        offerDetailApp: 'offerDetailApp@http://localhost:9092/remoteEntry.js',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false, requiredVersion: '^19.2.9' },
        '@angular/common': { singleton: true, strictVersion: false, requiredVersion: '^19.2.9' },
        '@angular/compiler': { singleton: true, strictVersion: false, requiredVersion: '^19.2.9' },
        '@angular/platform-browser': { singleton: true, strictVersion: false, requiredVersion: '^19.2.9' },
        rxjs: { singleton: true, strictVersion: false, requiredVersion: '^7.8.1' },
      },
    }),
  ],
};
