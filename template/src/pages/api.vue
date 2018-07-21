<template>
  <section class="lvx-api">
      这是API页面
      <cus-list/>
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
.lvx-api {
  @include responsive-default {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
