const path = require("path");

const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const webpackNodeExternals = require("webpack-node-externals");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV;

module.exports = {
  target: "node",
  entry: "./src/index.js",
  // mode: "development",
  mode,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
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
