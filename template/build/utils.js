const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const Glob = require('glob')
const pify = require('pify')
const serialize = require('serialize-javascript');
const cons = require('consolidate')
const config = require('../config/env/')
const appConfig = require('../lvx.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')
const hash = require('hash-sum')
const glob = pify(Glob)
const webpack = require('webpack')
const decode = require('unescape');
// const metaDic = require('../config/meta-router')
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.createNotifierCallback = function () {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }
    const error = errors[0]

    const filename = error.file.split('!').pop()
    notifier.notify({
      title: pkg.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

function cleanChildrenRoutes (routes, isChild = false) {
  let start = -1
  let routesIndex = []
  routes.forEach((route) => {
    if (/-index$/.test(route.name) || route.name === 'index') {
      // Save indexOf 'index' key in name
      let res = route.name.split('-')
      let s = res.indexOf('index')
      start = (start === -1 || s < start) ? s : start
      routesIndex.push(res)
    }
  })
  routes.forEach((route) => {
    route.path = (isChild) ? route.path.replace('/', '') : route.path
    if (route.path.indexOf('?') > -1) {
      let names = route.name.split('-')
      let paths = route.path.split('/')
      if (!isChild) {
        paths.shift()
      } // clean first / for parents
      routesIndex.forEach((r) => {
        let i = r.indexOf('index') - start //  children names
        if (i < paths.length) {
          for (let a = 0; a <= i; a++) {
            if (a === i) {
              paths[a] = paths[a].replace('?', '')
            }
            if (a < i && names[a] !== r[a]) {
              break
            }
          }
        }
      })
      route.path = (isChild ? '' : '/') + paths.join('/')
    }
    route.name = route.name.replace(/-index$/, '')
    if (route.children) {
      if (route.children.find((child) => child.path === '')) {
        delete route.name
      }
      route.children = cleanChildrenRoutes(route.children, true)
    }
  })
  return routes
}
exports.generateRoutes = async function (isProduction) {
  // console.log(metaDic)
  const createRoutes = function (files, srcDir) {
    let routes = []
    files.forEach((file) => {
      let keys = file.replace(/^pages/, '').replace(/\.vue$/, '').replace(/\/{2,}/g, '/').split('/').slice(1)
      let route = { name: '', path: '', component: '' }
      let parent = routes
      keys.forEach((key, i) => {
        route.name = route.name ? route.name + '-' + key.replace('_', '') : key.replace('_', '')
        route.name += (key === '_') ? 'all' : ''
        route.component = route.name
        route.filepath = file
        let child = _.find(parent, { name: route.name })
        if (child) {
          if (!child.children) {
            child.children = []
          }
          parent = child.children
          route.path = ''
        } else {
          if (key === 'index' && (i + 1) === keys.length) {
            route.path += (i > 0 ? '' : '/')
          } else {
            route.path += '/' + (key === '_' ? '*' : key.replace('_', ':'))
            if (key !== '_' && key.indexOf('_') !== -1) {
              route.path += '?'
            }
          }
        }
      })
      // Order Routes path
      parent.push(route)
      parent.sort((a, b) => {
        if (!a.path.length || a.path === '/') {
          return -1
        }
        if (!b.path.length || b.path === '/') {
          return 1
        }
        let res = 0
        let _a = a.path.split('/')
        let _b = b.path.split('/')
        for (let i = 0; i < _a.length; i++) {
          if (res !== 0) {
            break
          }
          let y = (_a[i].indexOf('*') > -1) ? 2 : (_a[i].indexOf(':') > -1 ? 1 : 0)
          let z = (_b[i].indexOf('*') > -1) ? 2 : (_b[i].indexOf(':') > -1 ? 1 : 0)
          res = y - z
          if (i === _b.length - 1 && res === 0) {
            res = 1
          }
        }
        return res === 0 ? -1 : res
      })
    })
    return cleanChildrenRoutes(routes)
  }
  const files = await glob('pages/**/*.vue', { cwd: './' })
  // console.log(files)
  let fileRoutesData = createRoutes(files, './'); 
  let routesMetaData = appConfig.router.meta;
  _.forEach(routesMetaData, function(rmd) { //add meta {} to fileRoutesData
    let [md, routes] = [rmd.data, rmd.routers];
    _.forEach(routes, function(r) {
      let tempFileRoute = _.find(fileRoutesData, function(o) { return o.path == r; });
      tempFileRoute.meta = Object.assign(tempFileRoute.meta || {}, md);
    });
  });
  let generatedRoutes = appConfig.router.extendRoutes(fileRoutesData, isProduction)
  
  cons.ejs('./build/bin/router.js', {
    router: {
      routes: generatedRoutes,
      mode: appConfig.router.mode || 'history',
      base: appConfig.router.base || '',
      scrollBehavior: appConfig.router.scrollBehavior,
      linkActiveClass: appConfig.router.linkActiveClass || 'lx-link-active',
      linkExactActiveClass: appConfig.router.linkExactActiveClass || 'lx-link-exact-active',
      fallback: false,
    },
    hash: hash,
    _: _,
    serialize: serialize,
    decode: decode
  })
  .then(function (str) {
    let routerPath = './framework/app/router.js';
    debugger
    // console.log(_.unescape(str))
    fs.writeFileSync(routerPath, _.unescape(str) );
  })
  .catch(function (err) {
    throw err;
  });
}
function importFiles (path) {
  return require(path)
}
exports.generateMain = function (isProduction) {
  function importPlugins () {
    let pluginConfigPath = path.join(process.cwd(), 'config', '/plugin')
    return require(pluginConfigPath)
  }
  cons.ejs('./build/bin/main.js', {
    plugins: appConfig.plugins || [],
    isProduction: isProduction,
    _: _
  })
  .then(function (str) {
    let routerPath = './framework/app/main.js';
    fs.writeFileSync(routerPath, _.unescape(str) );
  })
  .catch(function (err) {
    throw err;
  });
}
exports.generateApp = async function () {
  let [cssGlobal, mws, layouts, parten]= [(appConfig.css || []), (appConfig.router.middleware || []), [], /[^layouts/].*[^.vue]/]
  let layoutsVue = await glob('layouts/*.vue', { cwd: './' })
  _.forEach(layoutsVue, function(n){
    layouts.push({name:n.replace(/^layouts/, '').replace(/\.vue$/, '').replace('/', ''), path: `~/${n}`})
  })
  cons.ejs('./build/bin/App.vue', {
    layouts: layouts,
    mws: mws,
    cssGlo: cssGlobal
  })
  .then(function (str) {
    let path = './framework/app/App.vue';
    fs.writeFileSync(path, _.unescape(str) );
  })
  .catch(function (err) {
    throw err;
  });
}

exports.generateAppHtml = async function (isProduction) {
  cons.ejs('./build/bin/index.html', {
    isProduction: isProduction
  })
  .then(function (str) {
    let path = './index.html';
    fs.writeFileSync(path, _.unescape(str) );
  })
  .catch(function (err) {
    throw err;
  });
}