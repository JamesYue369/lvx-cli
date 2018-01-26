
import metaDic from '~/config/meta-router'
export default function ({store, to, from, next}) {
	return new Promise((resolve, reject)=>{
		if (metaDic[to.name].requireAuth) {
			if(store.state.isLogin) {
				resolve(true)
			} else {
				next('/login')
			}
		} else {
			resolve(true)
		}
	})
}
