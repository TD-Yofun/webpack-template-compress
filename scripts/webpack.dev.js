const webpack = require("webpack");
const { merge } = require("webpack-merge");

// common
const base = require("./webpack.common");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true,
    open: true,
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
