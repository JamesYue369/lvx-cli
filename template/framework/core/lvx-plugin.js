import axios from './http/axios'
import xss from 'xss'
import _ from 'lodash'
let lvxPlugin = {}

// 图片加载错误
function errorHandel (ev) {
  // console.log(1)
  this.src = require('~/assets/img/src/common/default_load.png')
}

lvxPlugin.install = function (Vue, options) {
  Vue.myGlobalMethod = function () {  // 1. 添加全局方法或属性，如: vue-custom-element
    // 逻辑...
  }
  Vue.prototype.$axios = axios;
  Vue.directive('imgerror', {  // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
    inserted: function (el, binding, vnode, oldVnode) {
      el.addEventListener('error', errorHandel, false)
      let styleEl = getComputedStyle(el, null)
      if ((!parseInt(styleEl.width) && !parseInt(el.style.width) && !parseInt(el.attributes.width.value)) || (!parseInt(styleEl.height) && !parseInt(el.style.height) && !parseInt(el.attributes.height.value))) {
        throw new Error('not define style width & height')
      }
    }
  })
  Vue.directive('xss', {
    inserted: function (el, binding, vnode, oldVnode) {
      //XSS过滤处理
      function xssHandle (ev, el) {
        // this.value = xss(this.value)
        // console.log(vnode)
        
        let expression = _.result(_.find(vnode.data.directives, function(chr) {
          return chr.name === 'model';
        }), 'expression');
        _.set(vnode.context, expression, xss(_.result(vnode.context, expression)))
      }
      el.addEventListener('blur', xssHandle, true)
    }
  })
  // Vue.filter('xss', function (val) {
  //   if (val) {
  //     return xss(val)
  //   } else {
  //     return val
  //   }
  // })
  Vue.filter('timeflier', function (date) {
    let time = '';
    date = new Date(date)
    let o = {
      'Y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'd+': date.getDate()
    };
    for (let k in o) {
      time += `${o[k]}-`;
    }
    return time !== '' ? time.substring(0, time.lastIndexOf('-')) : '';
  })
  Vue.filter('trimfilter', function (str) {
    return str.trim();
  })
  Vue.filter('cut_str', function (str = '', L = 8) {
    if (!((typeof str === 'string') && str.constructor === String)) {
      return ''
    }

    let result = ''
    let strlen = str.length // 字符串长度
    let chrlen = str.replace(/[^\x00-\xff]/g, '**').length // 字节长度

    if (chrlen <= L) {
      return str
    }

    for (let i = 0, j = 0; i < strlen; i++) {
      let chr = str.charAt(i)
      if (/[\x00-\xff]/.test(chr)) {
        j++ // ascii码为0-255，一个字符就是一个字节的长度
      } else {
        j += 2 // ascii码为0-255 以外，一个字符就是两个字节的长度
      }
      if (j <= L) { // 当加上当前字符以后，如果总字节长度小于等于L，则将当前字符真实的+在result后
        result += chr
      } else { // 反之则说明result已经是不拆分字符的情况下最接近L的值了，直接返回
        return result + '...'
      }
    }
  })
  Vue.mixin({
    created: function () {  // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
      
    }
  })
  Vue.prototype.$lvx = {}
  Vue.prototype.$xss = function (val) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
    if (val) {
      return xss(val)
    } else {
      return val
    }
  }
}
export default lvxPlugin
