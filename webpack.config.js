'use strict'
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [{
  entry: path.resolve(__dirname, "/client/index.js"),
  mode: process.env.NODE_ENV,

  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./client/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // {
      //   test: /\.jsx?/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env", "@babel/preset-react"],
      //     },
      //   },
      // },
      {
        test: /\.(m?js|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-object-assign"],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.m?js$/,
      //   enforce: "pre",
      //   use: ["source-map-loader"],
      // },
    ],
  },
  devServer: { //main
    port: 8081,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "./build"),
      // publicPath:
    },
    proxy: {
      "/api/**": "http://localhost:3000"
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}, 
]
