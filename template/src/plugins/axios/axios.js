import Vue from 'vue'
import * as axios from 'axios'
import _ from 'lodash'
import Cookie from 'js-cookie'

let options = {
  timeout: 300000, //请求超时时间设置
  headers: {'X-Requested-With': 'XMLHttpRequest'}, //异步接口标识
};
let axiosInstance = axios.create(options);
axiosInstance.interceptors.request.use((config)=> {
  if(!config.params) {
    config.params = {};
  }
  if(Cookie.get('token')) { //请求aop:添加userToken
    config.headers.userToken = Cookie.get('token');
  }
  config.params._ = Date.now();
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response)=> {
  if (response.data.code == 403) { //登录过期调整登录
    _lvx.router.push({path: '/'});
  } else if (response.data.code == 500) { //服务器异常
    _lvx.router.push({path: '/error/500'});
  }
  return response;
}, (error)=> {
  // let [url, statusCode, statusText] = [error.config.url, error.response.status, error.response.statusText];
  let [statusCode] = [error.response.status]
  if(statusCode == 404) { //服务资源地址错误
    if (_lvx['loading']) {
      _lvx['loading'].close();
    }
    _lvx.router.push({path: '/404'});
  } else if (statusCode >= 500) { //服务器异常
    if (_lvx['loading']) {
      _lvx['loading'].close();
    }
    _lvx.router.push({path: '/error/500'});
  }
  return Promise.reject(error.message);
});

export default axiosInstance;
