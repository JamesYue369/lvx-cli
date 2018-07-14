const fetchDataMixin = {
  beforeMount () {
    const { fetchData, loading } = this.$options
    let self = this;
    if (fetchData) {
      let customeLoadingInstance = null;
      if(typeof loading === 'function' || typeof loading === 'object') {
        customeLoadingInstance = loading();
      } else {
        this.$lvx.loading.start()
      }
      const r = fetchData({
        to: this.$route.to,
        from: this.$route.from
      });
      r.then((data = {})=> {

        Object.assign(self, data);
        if(customeLoadingInstance) {
          customeLoadingInstance.close();
        } else {
          this.$lvx.loading.finish()
        }
      });
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { fetchData } = this.$options
    if (fetchData) {
      let customeLoadingInstance = null;
      if(typeof loading === 'function' || typeof loading === 'object') {
        customeLoadingInstance = loading();
      } else {
        this.$lvx.loading.start()
      }
      fetchData({
        to: this.$route.to,
        from: this.$route.from
      }).then((data = {})=> {

        Object.assign(this, data);
        if(customeLoadingInstance) {
          customeLoadingInstance.close();
        } else {
          this.$lvx.loading.finish()
        }
        next()
      }).catch(next)
    } else {
      next()
    }
  }
};

export default fetchDataMixin;