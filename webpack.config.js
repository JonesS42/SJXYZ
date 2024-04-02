const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  target: 'web',
  module: {
    rules: [
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
      { 
        test: /\.(css)$/i,
        type: 'asset/resource',
        generator: {
          filename: "css/[name][ext]",
        },
      },
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        },
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
      template: './src/freelance.html',
      filename: 'freelance.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/actop.html',
      filename: 'actop.html',
      chunks: ['projects'],
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./src/ImagesEtc"),
          to: path.resolve(__dirname, "dist/ImagesEtc")
      },
      { from: path.resolve(__dirname, "./src/css"),
          to: path.resolve(__dirname, "dist/css")
      },
      ],
    }),
  ],
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
    resume: path.resolve(__dirname, './src/js/resume.js'),
    projects: path.resolve(__dirname, './src/js/projects.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist', 'ImagesEtc'),
      publicPath: '/'
    },
    watchFiles: ["./src/*"],
    hot: true,
    open: true
  },
};
