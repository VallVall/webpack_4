const devConfig = require("./webpack.dev");
const webpackMerge = require("webpack-merge");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const OptimizeJsPlugin = require("terser-webpack-plugin");

module.exports = webpackMerge(devConfig, {
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 20
        },
        common: {
          name: "common",
          chunks: "async",
          minChunks: 2,
          enforce: true,
          reuseExistingChunk: true,
          priority: 10
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
          priority: 30
        },
        material: {
          test: /[\\/]node_modules[\\/]@material-ui[\\/]/,
          name: "material",
          chunks: "all",
          priority: 30
        }
      }
    },
    minimizer: [new OptimizeCssPlugin(), new OptimizeJsPlugin()]
  },
  mode: "production"
});
