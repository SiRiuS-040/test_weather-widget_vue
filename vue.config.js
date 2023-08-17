const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/test_weather-widget_vue/'
      : '/'
})
//
// const webpack = require('webpack')
//
// let assetsDir = "assets";
// module.exports = {
//   assetsDir: assetsDir,
//   configureWebpack: {
//     output: {
//       filename: assetsDir + "/[name].js",
//       chunkFilename: assetsDir + "/[name].js"
//     },
//     plugins: [
//       new webpack.optimize.LimitChunkCountPlugin({
//         maxChunks: 1
//       })
//     ]
//   },
//   chainWebpack:
//       config => {
//         config.optimization.delete('splitChunks')
//
//         if (config.plugins.has("extract-css")) {
//           const extractCSSPlugin = config.plugin("extract-css");
//           extractCSSPlugin &&
//           extractCSSPlugin.tap(() => [
//             {
//               filename: assetsDir + "/[name].css",
//               chunkFilename: assetsDir + "/[name].css"
//             }
//           ]);
//         }
//       }
// }