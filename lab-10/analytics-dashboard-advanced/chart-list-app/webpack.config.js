const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: { publicPath: 'http://localhost:9101/' },
  devServer: {
    port: 9101,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  module: { rules: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, options: { presets: ['@babel/preset-env', '@babel/preset-react'] } }, { test: /\.css$/i, use: ['style-loader', 'css-loader'] }] },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'chartListApp',
      filename: 'remoteEntry.js',
      exposes: { './ChartList': './src/ChartList.js' },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'chart.js': { singleton: true },
      },
    }),
  ],
};
