const _ =  require('lodash');
module.exports = {
  dev: {//此处配置代理
    proxyTable: {
      '/user':{
          target:'https://test.yunhetong.com',
          changeOrigin:true,
          secure: false,
          bypass: function(req, res, proxyOptions) {
          }
      },
    },
    // host: '192.168.0.145',
    port: 8080
  },
  build: {
    prerender: false,
    dist: 'dist',
    projectName: '',
    publicPath: '/',
    extend(config) {
      config.productionSourceMap = config.devtool = false
      return config
    }
  },
  router: {
    base: '',
    mode: 'history',
    middleware: ['~/middleware/check-login', '~/middleware/check-auth'], //配置所有中间件资源
    meta: [{
      routers: [
        '/', 
        '/login', 
        '/404', 
        '/error/500',
        '/demo'
      ],
      data: {
        layout: 'default',
        middleware: [],
        requireAuth: false,
      }
    }, {
      routers: ['/api'],
      data: {
        layout: 'default',
        middleware: ['~/middleware/check-login', '~/middleware/check-auth'],
        requireAuth: true,
      }
    }],
    scrollBehavior: function(to, from, savedPosition) {
      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: 0 })
          }, 0)
        })
      } else {
        return { x: 0, y: 0 }
      }
    },
    extendRoutes: function (routers, isProduction) {
      return routers
    }
  },
  css: ['~/static/css/bootstrap/css/bootstrap.min.css', '~/static/css/animate/animate.css', '~/style/scss/lvx.variables.scss', '~/style/scss/lvx.scss',  '~/style/scss/common.scss', '~/assets/style/sprite/sprite.css', '~/assets/style/iconfont/iconfont.css'],
  plugins: [{
    src: '~/plugins/lvx-ui',
    sync: true
  },{
    src: '~/plugins/ui',
    sync: true
  },{
    src: '~/plugins/vuelidate',
    sync: false
  }]
}
