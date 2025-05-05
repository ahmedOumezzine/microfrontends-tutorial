const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        ArticleListApp_Remote:
          "ArticleListApp@http://localhost:9001/ArticleListApp_remote.js",
          ArticleDetailApp_Remote:
          "ArticleDetailApp@http://localhost:9002/ArticleDetailApp_remote.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
