const path = require("path");

// plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "images/[name].[ext]?[hash]",
          },
        },
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Compress",
      template: path.resolve(__dirname, "../index.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // include all types of chunks
      cacheGroups: {
        vue: {
          name: "vue",
          test: /[\\/]node_modules[\\/]((vue)|(vuex)|(vue-router))[\\/]/, // vue三件套不打包
          priority: 10,
          chunks: "initial", // only package third parties that are initially dependent
        },
      },
    },
  },
};
