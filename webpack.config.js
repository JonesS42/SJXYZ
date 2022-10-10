const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      { 
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(ico|svg|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "ImagesEtc/[name][ext]",
        },
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'ImagesEtc/[name].[ext]'
            }  
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/resume.html',
      filename: 'resume.html',
      chunks: ['resume'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/projects.html',
      filename: 'projects.html',
      chunks: ['projects'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/hire.html',
      filename: 'hire.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/actop.html',
      filename: 'actop.html',
      chunks: ['main'],
    }),
  ],
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
    resume: path.resolve(__dirname, './src/js/resume.js'),
    projects: path.resolve(__dirname, './src/js/projects.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
