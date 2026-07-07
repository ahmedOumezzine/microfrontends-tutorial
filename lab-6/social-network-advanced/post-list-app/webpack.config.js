const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: { publicPath: 'http://localhost:9061/', uniqueName: 'postListApp' },
  resolve: { extensions: ['.ts', '.js'] },
  devServer: {
    port: 9061,
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
      name: 'postListApp',
      filename: 'remoteEntry.js',
      exposes: { './PostList': './src/post-list.component.ts' },
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
