const fetchDataMixin = {
  // mounted () {
  //   if (typeof this.$options.fetchData == 'function') {
  //     const { fetchData, loading } = this.$options
  //     let self = this;
  //     let customeLoadingInstance = null;
  //     if(typeof loading === 'function' || typeof loading === 'object') {
  //       customeLoadingInstance = loading();
  //     } else {
  //       if(!this.$lvx.loading.get()) {
  //         this.$lvx.loading.start()
  //       }
  //     }
  //     const r = fetchData.call(this);
  //     r.then((data = {})=> {
  //       Object.assign(self.$data, data);
  //       if(customeLoadingInstance) {
  //         customeLoadingInstance.close();
  //       } else {
  //         this.$lvx.loading.finish()
  //       }
  //     });
  //   }
  // },
  activated () {
    if (typeof this.$options.fetchData == 'function') {
      const { fetchData, loading } = this.$options
      let self = this;
      let customeLoadingInstance = null;
      if(typeof loading === 'function' || typeof loading === 'object') {
        // customeLoadingInstance = loading();
      } else {
        if(!this.$lvx.loading.get()) {
          // this.$lvx.loading.start()
        }
      }
      const r = fetchData.call(this);
      r.then((data = {})=> {
        Object.assign(self.$data, data);
        if(customeLoadingInstance) {
          // customeLoadingInstance.close();
        } else {
          // this.$lvx.loading.finish()
        }
      });
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (typeof this.$options.fetchData == 'function') {
      const { fetchData, loading } = this.$options
      let customeLoadingInstance = null;
      if(typeof loading === 'function' || typeof loading === 'object') {
        // customeLoadingInstance = loading();
      } else {
        if(!this.$lvx.loading.get()) {
          // this.$lvx.loading.start()
        }
      }      
      fetchData.call(this)
      .then((data = {})=> {
        Object.assign(this.$data, data);
        if(customeLoadingInstance) {
          // customeLoadingInstance.close();
        } else {
          // this.$lvx.loading.finish()
        }
        next()
      }).catch(next)
    } else {
      next()
    }
  }
};

export default fetchDataMixin;