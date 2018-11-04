<template>
  <div class="layout">
    <lvx-header />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view name="default"/>
      </keep-alive>
    </transition>
    <lvx-footer />
  </div>
</template>

<script>
import header from '~/src/components/common/header'
import footer from '~/src/components/common/footer'
import * as types from '~/src/store/mutation-types'
export default {
  data () {
    return {
      scrollTag: false,
      timer: null,
      scroll: '',
      top: 150,
      speed: 100,
      componentScrollBar: null,
    }
  },
  components: {
    'lvx-header': header,
    'lvx-footer': footer
  },
  created () {
  },
  mounted () {
    this.scrollTop()
    window.document.addEventListener('scroll', this.scrollTop)
  },
  destroyed () {
  },
  methods: {
    goTop () {
      clearInterval(this.timer)
      this.scroll = document.body.scrollTop || document.documentElement.scrollTop
      this.timer = setInterval(() => {
        if (this.scroll < 0) {
          clearInterval(this.timer)
          return false
        }
        this.scroll -= this.speed
        window.scrollTo(0, this.scroll)
      }, 16)
    },
    scrollTop () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop > 500) {
        this.scrollTag = true
      } else {
        this.scrollTag = false
      }      
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '~styles/base.scss';
.layout{
    @include responsive-default {
      height: 100vh;
    }
}
</style>
