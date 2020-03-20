const devConfig = require("./webpack.dev");
const webpackMerge = require("webpack-merge");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const OptimizeJsPlugin = require("terser-webpack-plugin");

module.exports = webpackMerge(devConfig, {
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [new OptimizeCssPlugin(), new OptimizeJsPlugin()]
  },
  mode: "production"
});
