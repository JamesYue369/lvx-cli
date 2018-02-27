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
<%
  let [mwsList, mwsStr]= [[], '']
  mws.forEach((mw, i)=>{
%>
import mw<%= i%> from '<%= mw%>'
<%
    mwsList.push(`mw${i}(funParams)`)
  })
  mwsStr = mwsList.join(',')
%>
<%
  cssGlo.forEach((css, i)=>{
%>
import '<%= css%>'
<%
  })
%>
<%
let lysStr = ''
  layouts.forEach((ly, i)=>{
    lysStr += `${i?'\t':''}_${ly.name}: () => import('${ly.path}' /* webpackChunkName: '${ly.path}' */).then(m => m.default || m),\n`
  })
%>
let layouts = {
  <%= lysStr%>
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
      Promise.all([<%= mwsStr%>])
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

