const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: { publicPath: 'http://localhost:9000/' },
  devServer: { port: 9000 },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, options: { presets: ['@babel/preset-env', '@babel/preset-react'] } },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'taskManagerApp',
      remotes: {
        taskListApp: 'taskListApp@http://localhost:9001/remoteEntry.js',
        taskDetailApp: 'taskDetailApp@http://localhost:9002/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
  ],
};
