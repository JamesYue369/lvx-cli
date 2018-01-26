import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MetaInfo from 'vue-meta-info'
import LvxPlugin from '~/framework/core/lvx-plugin'
import base from '../core/vue-base.vue'
import  { createRouter } from './router'
import createStore from '~/store'
import _ from 'lodash'
//自定义验证器
window._appReadyCbs = []
window.onAppReady = function (cb) {
	window._appReadyCbs.push(cb)
}
<%
let pluginsTemp = []
plugins.forEach((plugin, i) =>{
	if (isProduction) {
%>
import plugin<%= i%> from '<%= plugin.src%>'
<%
		pluginsTemp.push({
			name: `plugin${i}`,
			sync: !!plugin.sync
		})
		// pluginsTemp.push(`plugin${i}`)
	} else {
		if (!!!plugin.isProduction) {
%>
import plugin<%= i%> from '<%= plugin.src%>'
<%
			pluginsTemp.push({
				name: `plugin${i}`,
				sync: !!plugin.sync
			})
			// pluginsTemp.push(`plugin${i}`)
		}
	}
})
%>
Vue.use(Vuex)
Vue.use(MetaInfo)
Vue.use(LvxPlugin)
const store = createStore();
const router = createRouter();

<%
let syncPlugins = []
pluginsTemp.forEach(function (v, i) {
	if (!v.sync) {
%>
<%= v.name%>()
<%
	} else {
		syncPlugins.push(`${v.name}()`)
	}
})
%>
<%
if (syncPlugins.length) {
	let pluginsStr = syncPlugins.join(',')
%>
const p = Promise.all([<%= pluginsStr%>])
p.then(function (v) {
	const _app = new Vue({
	  router,
	  store,
	  render: h => h(App)
	})
	_app.$mount('#_lvx')
	Vue.nextTick(function () {
		window._appReadyCbs.forEach((cb) => {
		    if (typeof cb === 'function') {
		     	cb(_app)
		    }
		})
	})
})
<%
} else {
%>
const _app = new Vue({
  router,
  store,
  render: h => h(App)
})
_app.$mount('#_lvx')
Vue.nextTick(function () {
	window._appReadyCbs.forEach((cb) => {
	    if (typeof cb === 'function') {
	     	cb(_app)
	    }
	})
})
<%
}
%>
