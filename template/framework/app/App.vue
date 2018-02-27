<template>
  <div id="_lvx">
    <lvx-loading ref="loading"></lvx-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import LvxLoading from '~/framework/components/loading'
import { mapState } from 'vuex'
import _ from 'lodash'

import mw0 from '~/middleware/check-login'

import mw1 from '~/middleware/check-auth'


import '~/static/css/bootstrap/css/bootstrap.min.css'

import '~/static/css/animate/animate.css'

import '~/style/scss/lvx.variables.scss'

import '~/style/scss/lvx.scss'

import '~/style/scss/common.scss'

import '~/assets/style/sprite/sprite.css'


let layouts = {
  _default: () => import('~/layouts/default.vue' /* webpackChunkName: '~/layouts/default.vue' */).then(m => m.default || m),

}
export default {
  name: 'app',
  data () {
    return {
      layoutName: '',
      layout: null
    }
  },
  beforeCreate () {
  },
  created () {
    let self = this
    self.$router.beforeResolve((to, from, next) => {
      let matchVues = self.$router.getMatchedComponents(to)
      let funParams = {
        to: to, from: from, next: next, store: this.$store
      }
      Promise.all([mw0(funParams),mw1(funParams)])
      .then(()=>{
        self.initLayout(matchVues.length ? matchVues[0].layout ? matchVues[0].layout: 'default' : 'default')
        next()
      })
    })
  },
  mounted () {
    this.$loading = this.$refs.loading
    this.$lvx.loading = this.$loading
  },
  computed: {
    ...mapState({
      // layout: state => state.layout,
      // layoutName: state => state.layoutName
    })
  },
  methods: {
    async initLayout (layoutName) {
      // let currentRouteName = routerName ? routerName : this._getNameByPath(location.pathname)
      // let layoutName = metaDic[currentRouteName].layoutName
      let currentLayoutName = this.layoutName
      if (layoutName !== currentLayoutName) {
        await this.loadLayout(layoutName)
        this.setLayout(layoutName)
      }
      
    },
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
      })
    },
    checkAuth (routerName) {
      if (metaDic[routerName].requireAuth) {
        return checkLogin()
      } else {
        return true
      }
      
    },
    checkRouterExist (path) {
      return this._getNameByPath(path)
    },
    _getNameByPath (routerPath) {
      let routers = this.$router.options.routes
      let name = _.find(routers, function (r) {
        return r.path === routerPath
      })
      return !!name ? name.name : null
    }

  },
  components: {
    LvxLoading
  }
}
</script>

