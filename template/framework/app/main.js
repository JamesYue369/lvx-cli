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

import plugin0 from '~/plugins/lvx-ui'

import plugin1 from '~/plugins/ui'

import plugin2 from '~/plugins/vuelidate'

Vue.use(Vuex)
Vue.use(MetaInfo)
Vue.use(LvxPlugin)
const store = createStore();
const router = createRouter();


plugin0()

plugin1()

plugin2()


const _app = new Vue({
  router,
  store,
  render: h => h(App)
})
document.addEventListener('DOMContentLoaded', function () {
    _app.$mount('#_lvx')
})
// _app.$mount('#_lvx')
Vue.nextTick(function () {
	window._appReadyCbs.forEach((cb) => {
	    if (typeof cb === 'function') {
	     	cb(_app)
	    }
	})
})

