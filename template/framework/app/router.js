
import Vue from 'vue'
import Router from 'vue-router'
import {isNotBrowser} from '~/framework/core/utils'

Vue.use(Router)

const _777ba69c = () => import('~/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _77a66d33 = () => import('~/pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _1a3ae264 = () => import('~/pages/api.vue' /* webpackChunkName: "pages/api" */).then(m => m.default || m)
const _1a3a3182 = () => import('~/pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _e3bcd644 = () => import('~/pages/demo/index.vue' /* webpackChunkName: "pages/demo/index" */).then(m => m.default || m)
const _9cab4f0c = () => import('~/pages/error/500.vue' /* webpackChunkName: "pages/error/500" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: 0 })
          }, 0)
        })
      } else {
        return { x: 0, y: 0 }
      }
    }


export function createRouter () {
  return new Router({
    // mode: isNotBrowser() ? 'hash': 'history' ,
    mode: 'history',
    base: '',
    linkActiveClass: 'lx-link-active',
    linkExactActiveClass: 'lx-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: '/',
			components: {
				'default': _777ba69c
			},
			name: 'index',
			meta: {"layout":"default","middleware":[],"requireAuth":false}
		},
		{
			path: '/login',
			components: {
				'default': _77a66d33
			},
			name: 'login',
			meta: {"layout":"default","middleware":[],"requireAuth":false}
		},
		{
			path: '/api',
			components: {
				'default': _1a3ae264
			},
			name: 'api',
			meta: {"layout":"default","middleware":["~/middleware/check-login","~/middleware/check-auth"],"requireAuth":true}
		},
		{
			path: '/404',
			components: {
				'default': _1a3a3182
			},
			name: '404',
			meta: {"layout":"default","middleware":[],"requireAuth":false}
		},
		{
			path: '/demo',
			components: {
				'default': _e3bcd644
			},
			name: 'demo',
			meta: {"layout":"default","middleware":[],"requireAuth":false}
		},
		{
			path: '/error/500',
			components: {
				'default': _9cab4f0c
			},
			name: 'error-500',
			meta: {"layout":"default","middleware":[],"requireAuth":false}
		}
    ],
    fallback: false
  })
}
