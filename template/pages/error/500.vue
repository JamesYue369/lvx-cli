<template>
  <div class="page-500">

    <router-link to="/" class="back-link sas-text-decoration-none">返回云合同</router-link>
  </div>
</template>

<script>

export default {
  name: 'error-500',
  metaInfo: {
      title: '云合同'
  },
  layout: 'normal',
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
.page-500{
  @include responsive-default {
    display: table;
    width: 100%;
    text-align: center;
    height: 100vh;
    background: url("~assets/img/src/common/errorbg.png") center center no-repeat;
    background-color: #eeeced;
    .back-link{
      display: table-cell;
      vertical-align: middle;
      color: #f8b62c;
      font-size: 18px;
    }
  }
}

</style>
