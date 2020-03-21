const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["@babel/polyfill", "./index.tsx"],
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
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
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: "./index.html"
    }),
    new CleanPlugin(),
    new CssPlugin({
      filename: "css/[name].[contenthash].css"
    }),
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    alias: {
      "@utils": path.join(__dirname, "src/utils"),
      "@hooks": path.join(__dirname, "src/hooks"),
      "@client": path.join(__dirname, "src/client"),
      "@interfaces": path.join(__dirname, "src/interfaces")
    },
    extensions: [".js", ".ts", ".tsx", ".jsx"]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true
  },
  mode: "development"
};
