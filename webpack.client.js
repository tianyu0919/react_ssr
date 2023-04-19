const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackBar = require('webpackbar');

module.exports = {
  target: "node",
  mode: "production",
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
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
  plugins: [
    new WebpackBar({
      name: 'client building...'
    })
  ]
};
