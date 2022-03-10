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
    chunkFilename: '[name].js',
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
        test: /\.(png|jp(e*)g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: './img/',
              limit: 10000,
              esModule: false,
              name: '[name].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.json', '.js', '.jsx', '.ts'],
  },
  plugins: [
    // 빌드 과정을 알려줌
    new webpack.ProgressPlugin(),
    // 배너를 정해줌
    new webpack.BannerPlugin({
      banner: `build time : ${new Date().toLocaleTimeString()}`,
    }),
    // 타겟된 템블릿을 빌드될 때 베이스템플릿로 정해줌
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // 전의 빌드를 삭제함
    new CleanWebpackPlugin(),
  ],
  //devtool: 'source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
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
