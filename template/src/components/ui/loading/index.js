import service from './src/index'

export default {
	install: function(Vue) {
	  Vue.prototype.$createLoading = ()=>{
	  	window._lvx['loading'] = service();
	  },
	   Vue.prototype.$closeLoading = ()=>{
	  	window._lvx['loading'].close();
	  }
	},
	service
};
