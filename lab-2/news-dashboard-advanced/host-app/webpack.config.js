const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    publicPath: 'http://localhost:9020/',
  },
  devServer: {
    port: 9020,
    historyApiFallback: true
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
        newsListApp: 'newsListApp@http://localhost:9021/remoteEntry.js',
        newsDetailsApp: 'newsDetailsApp@http://localhost:9022/remoteEntry.js',
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
