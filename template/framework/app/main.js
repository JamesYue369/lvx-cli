import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MetaInfo from 'vue-meta-info'
import LxPlugin from '~/framework/core/lvx-plugin'
import fetchData from '~/framework/core/mixin/fetch-data'
import  { createRouter } from './router'
import createStore from '~/src/store'
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
Vue.use(LxPlugin)
Vue.mixin(fetchData);
const store = createStore();
const router = createRouter();
router.afterEach((to, from) => {
	if(document.getElementsByClassName("container-main")[0]==undefined){
	}else if(to.query.anchor!==true){
		document.getElementsByClassName("container-main")[0].scrollTop=0
	}
});
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
let _app;
const p = Promise.all([<%= pluginsStr%>])
p.then(function (v) {
	_app = new Vue({
	  router,
	  store,
	  render: h => h(App)
	});
	window._lvx = {};
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
_app = new Vue({
  router,
  store,
  render: h => h(App)
});
window._lvx = {};
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

export default _app;