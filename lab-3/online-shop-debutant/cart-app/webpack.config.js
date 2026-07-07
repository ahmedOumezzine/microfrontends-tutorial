const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    publicPath: 'http://localhost:9002/',
    uniqueName: 'cartApp',
  },
  resolve: { extensions: ['.ts', '.js'] },
  devServer: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'cartApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/cart.component.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false },
        '@angular/common': { singleton: true, strictVersion: false },
        '@angular/compiler': { singleton: true, strictVersion: false },
        '@angular/platform-browser': { singleton: true, strictVersion: false },
        rxjs: { singleton: true, strictVersion: false },
      },
    }),
  ],
};
