import Vue from 'vue'
import LvxUI from 'lvx-ui'
export default function () {
	return new Promise((resolve, reject)=>{
		Vue.use(LvxUI)
		resolve()
	})
}
