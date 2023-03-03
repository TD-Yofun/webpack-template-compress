const path = require("path");
const { merge } = require("webpack-merge");

// common
const base = require("./webpack.common");

// plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "js/[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new OptimizeCssAssetsWebpackPlugin({}),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
  ],
});
