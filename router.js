import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54ea1489 = () => interopDefault(import('..\\pages\\auth\\log-in.vue' /* webpackChunkName: "pages/auth/log-in" */))
const _aaeafd00 = () => interopDefault(import('..\\pages\\auth\\sign-up.vue' /* webpackChunkName: "pages/auth/sign-up" */))
const _4c32f74f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth/log-in",
    component: _54ea1489,
    name: "auth-log-in"
  }, {
    path: "/auth/sign-up",
    component: _aaeafd00,
    name: "auth-sign-up"
  }, {
    path: "/",
    component: _4c32f74f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
