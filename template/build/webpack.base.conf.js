const path = require('path')
const utils = require('./utils')
const SpritesmithPlugin = require('webpack-spritesmith')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('../config/env')
const vueLoaderConfig = require('./vue-loader.conf')
const isProduction = process.env.NODE_ENV === 'production'
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
utils.generateRoutes()
utils.generateMain(isProduction)
utils.generateApp()
utils.generateAppHtml(isProduction)
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['babel-polyfill','./framework/app/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': process.cwd(),
      // 'static': resolve('static'), 
      // 'assets': path.join(process.cwd(), 'assets')
      'assets': path.join(__dirname, '..', 'assets'),
      'styles': path.join(__dirname, '..', 'style/scss')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint? [{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        // exclude: [/node_modules/, resolve('assets'), ],
        include: [resolve('components'), resolve('framework'), resolve('layouts'), resolve('pages'), resolve('store')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: !config.dev.showEslintErrorsInOverlay
        }
      }] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?attrs[]=Img:src',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new SpritesmithPlugin({
      src: {
          cwd: 'assets/img/sprite',
          glob: '*.*'
      },
      target: {
          image: 'assets/style/sprite/spritesmith-generated/sprite.png',
          css: 'assets/style/sprite/sprite.css'
      },
      apiOptions: {
          cssImageRef: "spritesmith-generated/sprite.png"
      }
    })
  ]
}
