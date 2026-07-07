const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    publicPath: 'http://localhost:9030/',
    uniqueName: 'shopApp',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 9030,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'shopApp',
      remotes: {
        productListApp: 'productListApp@http://localhost:9031/remoteEntry.js',
        cartApp: 'cartApp@http://localhost:9032/remoteEntry.js',
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
