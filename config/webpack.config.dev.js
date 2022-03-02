const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    compress: true,
    port: 404,
    hot: true,
  },
};