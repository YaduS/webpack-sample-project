const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    // publicPath: '/dist',
    clean: true, // to clean dist before build
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
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader', // webpack 5 prefers "asset/resource" instead => https://webpack.js.org/guides/asset-modules/
            options: {
              name: '[name].[ext]', // this doesnt seem to change the image names in the index.html, and also generates a hashed png which does not load properly.
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
