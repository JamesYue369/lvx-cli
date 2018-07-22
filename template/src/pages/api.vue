<template>
  <section class="page-api">
      这是API页面
  </section>
</template>
<script>
import apis from '~/src/config/api'
export default {
  name: 'api',
  metaInfo: {
    title: 'API'
  },
  data () {
    return {
      list: []
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
   
  },
  components: {
    
  }
    
}
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.page-api {
  @include responsive-default {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
