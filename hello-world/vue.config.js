const { defineConfig } = require('@vue/cli-service')
const isPrd = process.env.NODE_ENV === 'production' ? true : false
module.exports = defineConfig({
  transpileDependencies: true, // 开启对node-modules的bable转移
  // publicPath: '/', // 相对路径，使用history模式会出问题，多页应用很不好弄,
  // publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  outputDir: 'dist',
  assetsDir: 'asset',
  indexPath: 'index.html',
  filenameHashing: true,
  // 多页应用
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index page',
      chunks: ['chunk-vundors', 'chunk-common', 'index'],
    },
  },
  lintOnSave: process.env.NODE_ENV != 'production',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
      },
    },
  },
  productionSourceMap: false,
  configureWebpack: (config) => {
    // console.log('>>>>>>>>config', config)
    // return config
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return options
      })
  },
  css: {
    extract: isPrd, // 是否将组建中的css提取至一个独立的css文件，而不是动态注入到JavaScript中的inline代码
    sourceMap: false,
    loaderOptions: {
      css: {
        // 这里的选项会传递给css-loader
      },
      postcss: {
        // 这里的选项会传递给postcss-loader
      },
    },
  },
  pluginOptions: {},
})
