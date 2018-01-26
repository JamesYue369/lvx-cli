import service from './src/index'

export default {
	install: function(Vue) {
	  Vue.prototype.$createLoading = service
	},
	service
};
