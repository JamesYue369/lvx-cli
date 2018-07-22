<template>
  <div class="page-home">
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
  </div>
</template>

<script>
export default {
  name: 'home',
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
.page-home {
  /*this is default rules */
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
  /*this is less than 768px rules , device on mobile*/
  @include responsive-m {

  }
  /*this is great than 992px and less than 768px , device on all pads vertical*/
  @include responsive-pv {

  }

  /*this is great than 992px and less than 1200px  rules, device on all pads horizion and middle desktop screen*/
  @include responsive-phmd {

  }

  /*this is custome min width rules*/
  @include responsive-gt(1366px) {

  }

  /*this is custome max width rules*/
  @include responsive-lt(1600px) {

  }

  /*this is custome min width and max width rules*/
  @include responsive-customize(1366px, 1600px) {

  }
}
</style>
