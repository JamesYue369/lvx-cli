<template>
  <div class="lvx-index">
    <section class="lvx-introduct container">
      <div class="row introduct-container">
        <div class="col-xs-4 logo">
          <img src="~/assets/img/src/common/brand.png">
        </div>
        <div class="col-xs-8 slogen">
          <p class="p1">Lvx</p>
          <p class="p2">基于Vue.js通用应用框架</p>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import base from '~/framework/core/vue-base'
export default {
  name: 'home',
  extends: base,
  metaInfo: {
    title: 'Lvx',
    meta: [{
      name: 'keywords',
      content: '通用应用框架 lvx vue'
    },{
      name: 'description',
      content: '基于Vue.js通用应用框架'
    }]
  },
  data () {
    return {
    }
  },
  mounted () {
   
  },
  methods: {
    
  }
}
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.lvx-index {
  @include responsive-default {
    .lvx-introduct{
      .introduct-container{
        margin-top: 50px;
        height: 250px;
        position: relative;
        .logo{
          height: 100%;
          img{
            height: 100%;
          }
        }
        .slogen{
          position: absolute;
          right: 0;
          bottom: 0;
          .p1{
            font-size: 100px;
          }
          .p2{
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
