var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path')

let webpackConfig = {
  entry: {
    swiper: path.resolve(__dirname + '/res/lib/entry/swiper.js'),
  },
  output: {
    path: path.resolve(__dirname + '/res/lib/tools_builded'), // 输出文件的保存路径
    filename: '[name].entry.js' // 输出文件的名称
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      loaders: 'babel-loader?presets[]=es2015'
    }, {
      test: /\.(ts)$/,
      loaders: 'ts-loader'
    }, {
      test: /\.(css)$/,
      loaders: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(scss|sass)$/,
      loaders: 'style-loader!css-loader!postcss-loader!sass-loader'
    }, {
      test: /\.html$/,
      loaders: 'html-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: []
}
webpackConfig.plugins.push(
  new CleanWebpackPlugin([webpackConfig.output.path], {
    root: '', // An absolute path for the root  of webpack.config.js
    verbose: true, // Write logs to console.
    dry: false // Do not delete anything, good for testing.
  })
)
module.exports = webpackConfig