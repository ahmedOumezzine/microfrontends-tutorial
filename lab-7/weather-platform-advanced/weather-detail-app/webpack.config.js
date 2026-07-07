const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: { publicPath: 'http://localhost:9072/' },
  devServer: {
    port: 9072,
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
      name: 'weatherDetailApp',
      filename: 'remoteEntry.js',
      exposes: { './WeatherDetail': './src/WeatherDetail.js' },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
  ],
};
