export default function ({store, to, from, next}, iterator) {
  return new Promise((resolve, reject)=>{
    if (to.meta.requireAuth) {
      if(store.state.isLogin) {
        resolve(true);
        if(iterator) {
          iterator.next()
        }
      } else {
        next({path: '/login'});
      }
    } else {
      resolve(true);
      if(iterator) {
        iterator.next()
      }
    }
  })
}
