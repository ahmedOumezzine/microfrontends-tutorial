const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: { publicPath: 'http://localhost:9001/' },
  devServer: {
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, options: { presets: ['@babel/preset-env', '@babel/preset-react'] } },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'taskListApp',
      filename: 'remoteEntry.js',
      exposes: { './TaskList': './src/TaskList.js' },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
};
