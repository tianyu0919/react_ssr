const path = require("path");

const webpackNodeExternals = require("webpack-node-externals");
const WebpackBar = require('webpackbar');

module.exports = {
  target: "node",
  entry: "./src/index.js",
  mode: "production",
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
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new WebpackBar({
      name: 'server building...'
    })
  ]
};
