import Vue from 'vue'
import axiosInstance from './axios'

let requestPlugin = {};

requestPlugin.install = function (Vue, options) {
  Vue.prototype.$axios = axiosInstance;
  
}
export default function () {
  return new Promise((resolve, reject)=>{
    Vue.use(requestPlugin)
    resolve()
  })
}
