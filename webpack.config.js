const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              url: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
        ],
        exclude: /\.module\.css$/,
      },
      // {
      //   test: /\.(png|jp(e*)g)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         outputPath: './img/',
      //         limit: 10000,
      //         esModule: false,
      //         name: '[name].[ext]',
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },
      {
        test: /\.(png|jp(e*)g)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]',
        },
      },
      // {
      //   test: /\.ttf$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000,
      //         fallback: 'file-loader',
      //         name: 'fonts/[name].[ext]',
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },
      {
        test: /\.(ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.json', '.js', '.jsx', '.ts'],
  },
  plugins: [
    // ?????? ????????? ?????????
    new webpack.ProgressPlugin(),
    // ????????? ?????????
    new webpack.BannerPlugin({
      banner: `build time : ${new Date().toLocaleTimeString()}`,
    }),
    // ????????? ???????????? ????????? ??? ????????????????????? ?????????
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // ?????? ????????? ?????????
    new CleanWebpackPlugin(),
  ],
  //devtool: 'source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    proxy: {
      '/api/*': {
        target: 'https://[::1]:8080',
        secure: false,
        pathRewrite: { '^/api': '/' },
      },
    },
    host: 'localhost',
    port: 5674,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
