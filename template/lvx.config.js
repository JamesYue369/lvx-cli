const _ =  require('lodash');
module.exports = {
  dev: {
    proxyTable: {
    },
    port: 8080
  },
  router: {
    base: '/',
    mode: 'history',
    middleware: ['~/middleware/check-login', '~/middleware/check-auth'],
    extendRoutes: function (routers, isProduction) {
      return routers
    }
  },
  css: ['~/static/css/bootstrap/css/bootstrap.min.css', '~/static/css/animate/animate.css', '~/style/scss/lvx.variables.scss', '~/style/scss/lvx.scss',  '~/style/scss/common.scss', '~/assets/style/sprite/sprite.css'],
  plugins: [{
    src: '~/plugins/lvx-ui',
    sync: false
  },{
    src: '~/plugins/ui',
    sync: false
  },{
    src: '~/plugins/vuelidate',
    sync: false
  }],
  build: {
    prerender: false,
    dist: 'dist',
    projectName: 'lvx',
    publicPath: '/',
    extend(config) {
      return config
    }
  }

}
