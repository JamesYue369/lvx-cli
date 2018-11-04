
##  接口数据模拟
在项目初期接口联调之前，可以通过伪造模拟接口数据的形式提供接口数据，
该方式是以插件的形式运行，可以在配置文件中开关，属于无入侵式的，不会对业务代码不良影响。

### 使用方法
- 配置
	- 在项目根目录的lvx.config.js文件的plugins节点添加

	<template>
	 
	</template>

		
		plugins: [{
		    src: '~/src/plugins/mock',
		    sync: true,
		    isProduction: false,
		}]
	
- 添加规则
	- 在项目根目录的src/plugins/mock.js中添加mock规则
	
	```
	
		import apis from '~/src/config/api'
		import Vue from 'vue'
		export default function () {
		  return new Promise((resolve, reject)=>{
		    //区域列表查询
		    Vue.prototype.$mock.onGet(apis.areaList).reply(200, {
		      "success":true,
		      "code":200,
		      "data": [{
		        text: '全部',
		        value: 0
		      }, {
		        text: '宝马专区',
		        value: 1
		      }, {
		        text: '奔驰专区',
		        value: 2
		      }]
		    });
		    //商户列表查询
		    Vue.prototype.$mock.onGet(apis.commercialList).reply(200, {
		      "success":true,
		      "code":200,
		      "data": [{
		        text: '全部',
		        value: 0
		      }, {
		        text: '张三车行',
		        value: 1
		      }, {
		        text: '李四车行',
		        value: 2
		      }]
		    });
		    resolve()
		  })
		}
		
	```