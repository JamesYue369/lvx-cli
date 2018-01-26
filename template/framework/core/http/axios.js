import * as axios from 'axios'

let options = {
  timeout: 5000,
  // withCredentials: true,
  // headers: {
  //   post: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //   }
  // }
  params: {
    tm: +new Date()
  }
}

let axiosInstance = axios.create(options);
// axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axiosInstance.interceptors.request.use(function (config) {
  if (config.method === 'post' && config.data) {
    config.transformRequest = [
      function(data) {
          let ret = '';
          for (let it in data) {
              ret += encodeURIComponent(it) +
                  '=' +
                  encodeURIComponent(data[it]) +
                  '&'
          }
          return ret
      }
    ]
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // console.error('error urlpath:' + error.config.url)
  // console.error('error type: ' + error.response.status)
  // console.error('error text:' + error.response.statusText)
  // return Promise.resolve({
  //   // `data` 由服务器提供的响应
  //     data: {
  //       code: -1,
  //       data: {}
  //     },

  //     // `status` 来自服务器响应的 HTTP 状态码
  //     status: 200,

  //     // `statusText` 来自服务器响应的 HTTP 状态信息
  //     statusText: 'OK',

  //     // `headers` 服务器响应的头
  //     headers: {},

  //     // `config` 是为请求提供的配置信息
  //     config: {}
  // });
   return Promise.resolve(error.response)
});

export default axiosInstance;
