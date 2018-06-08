<template>
  <div class="page-404">

  </div>
</template>

<script>

export default {
  name: 'not-find',
  metaInfo: {
      title: '404—云合同'
  },
  data () {
    return {
      
    }
  },
  layout: 'user',
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
.page-404{
  @include responsive-default {
    height: calc(100% - 67px);
    background: url("~assets/img/src/common/404.png") center center no-repeat;
    background-color: #eeeced;
  }
}

</style>
