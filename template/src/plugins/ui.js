import Vue from 'vue'
import UI from '~/src/components/ui'
export default function () {
	return new Promise((resolve, reject)=>{
		Vue.use(UI)
		resolve()
	})
}
