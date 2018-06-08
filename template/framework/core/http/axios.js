import * as axios from 'axios'
import _ from 'lodash'
import  { createRouter } from '../../app/router'

const router = createRouter();
let options = {
  timeout: 100000,
  params: {
    _: +new Date()
  },
  headers: {'X-Requested-With': 'XMLHttpRequest'},
};

let axiosInstance = axios.create(options);
axiosInstance.interceptors.request.use((config)=> {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response)=> {
  return response;
}, (error)=> {
  let [url, statusCode, statusText] = [error.config.url, error.response.status, error.response.statusText];
  if(statusCode == 404) {
    _lvx.router.push({path: '/404'});
  } else if (statusCode >= 500) {
    _lvx.router.push({path: '/error/500'});
  }
  return Promise.reject(error.message);
});

export default axiosInstance;
