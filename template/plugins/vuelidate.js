import Vue from 'vue'
import Vuelidate from 'vuelidate'
export default function () {
	return new Promise((resolve, reject)=>{
		Vue.use(Vuelidate)
		resolve()
	})
}
