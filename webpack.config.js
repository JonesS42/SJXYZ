const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(ico|svg|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "ImagesEtc/[name][ext]",
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist', 'ImagesEtc'),
      publicPath: '/'
    },
    hot: true,
    open: true
  },
};
