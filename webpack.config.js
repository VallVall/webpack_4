const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const OptimizeJsPlugin = require("terser-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["@babel/polyfill", "./index.tsx"],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [CssPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "images"
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HTMLPlugin({
      template: "./index.html"
    }),
    new CleanPlugin(),
    new CssPlugin({
      filename: "css/[name].[contenthash].css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [new OptimizeCssPlugin(), new OptimizeJsPlugin()]
  },
  resolve: {
    alias: {
      "@utils": path.join(__dirname, "src/utils")
    },
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    port: 4000,
    historyApiFallback: true
  }
};
