<template>
  <section class="page-login">
      这是登陆页面
      <div><ui-button category="primary" @click="login">登陆</ui-button></div>
  </section>
</template>
<script>
import * as types from '~/src/store/mutation-types'
export default {
  name: 'login',
  metaInfo: {
    title: '登陆'
  },
  data () {
    return {
      
    }
  },
  created () {
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    login() {
      let loadingInstance = this.$createLoading()
      this.$store.commit(types.SET_ISLOGIN, true)
      setTimeout(()=>{
        loadingInstance.close()
        this.$router.push('/')
      }, 2000)
    }
  },
  components: {
  }
    
}
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.page-login {
  @include responsive-default {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
