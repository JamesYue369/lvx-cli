
import apis from '~/src/config/api'
import axios from '~/framework/core/http/axios'
import * as types from '~/src/store/mutation-types'
export default function ({store, to, from, next}, iterator) {
  return new Promise(async (resolve, reject)=>{
    if(to.path == '/404' || to.path == '/error/500') {
      resolve(true);
    } else {
      /* demo 
      const r = await axios.get(apis.userLogin).then((data)=>data.data);
      if(r.userId != -1) {
        store.state.isLogin = true;
        const u = await axios.get(apis.userInfo).then((data)=>data.data.data);
        store.state.user = u;
        resolve(true);
        if(iterator) {
         iterator.next()
        }
        
      } else {
        store.state.isLogin = false;
        store.state.user = {};
        resolve(true);
        if(iterator) {
          iterator.next()
        }
      }
      */
      store.state.isLogin = store.state.isLogin;
      if(iterator) {
        iterator.next()
      }

    }

  })
}
