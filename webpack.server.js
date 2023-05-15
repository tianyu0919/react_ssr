const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const webpackNodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");

const mode = process.env.NODE_ENV;

module.exports = {
  target: "node",
  entry: "./src/index.js",
  mode,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new WebpackBar({
      name: "server building...",
    }),
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
