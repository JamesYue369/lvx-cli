<template>
  <section class="lvx-api">
      这是API页面
  </section>
</template>
<script>
import base from '~/framework/core/vue-base'
export default {
  name: 'api',
  extends: base,
  metaInfo: {
    title: 'API'
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
