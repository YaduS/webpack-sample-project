const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// below package was deprecated:
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css',
// });
// using => https://github.com/webpack-contrib/mini-css-extract-plugin instead

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // use: extractPlugin.extract({   // cannot use this since its deprecated...
        //   use: ['css-loader', 'sass-loader'],
        // }),
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
