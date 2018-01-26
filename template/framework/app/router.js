
import Vue from 'vue'
import Router from 'vue-router'
import {isNotBrowser} from '~/framework/core/utils'

Vue.use(Router)

const _777ba69c = () => import('~/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _77a66d33 = () => import('~/pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _e3bcd644 = () => import('~/pages/demo/index.vue' /* webpackChunkName: "pages/demo/index" */).then(m => m.default || m)
const _1a3ae264 = () => import('~/pages/api.vue' /* webpackChunkName: "pages/api" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    // mode: isNotBrowser() ? 'hash': 'history' ,
    mode: 'history',
    base: '/',
    linkActiveClass: 'lvx-link-active',
    linkExactActiveClass: 'lvx-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: '/',
			component: _777ba69c,
			name: 'index'
		},
		{
			path: '/login',
			component: _77a66d33,
			name: 'login'
		},
		{
			path: '/demo',
			component: _e3bcd644,
			name: 'demo'
		},
		{
			path: '/api',
			component: _1a3ae264,
			name: 'api'
		}
    ],
    fallback: false
  })
}
