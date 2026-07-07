const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    publicPath: 'http://localhost:9021/',
  },
  devServer: {
    port: 9021,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'newsListApp',
      filename: 'remoteEntry.js',
      exposes: {
        './NewsList': './src/NewsList.vue',
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: deps.vue,
        },
      },
    }),
  ],
};
