const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    publicPath: 'http://localhost:9000/',
  },
  devServer: {
    port: 9000,
  },
  resolve: {
    fallback: {},
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
      name: 'hostApp',
      remotes: {
        newsListApp: 'newsListApp@http://localhost:9001/remoteEntry.js',
        newsDetailsApp: 'newsDetailsApp@http://localhost:9002/remoteEntry.js',
      },
    }),
  ],
};