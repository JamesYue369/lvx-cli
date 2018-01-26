<template>
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import _ from 'lodash'
import * as types from '~/store/mutation-types'

export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
    })
  },
  created () {
    let self = this
    this.$lvx.loading.start()
    if (typeof self.$options.fetchData === 'function') {
      self.$options.fetchData.apply(self)
      .then((data)=>{
        _.assign(self, data)
        this.$lvx.loading.finish()
        
      })
    } else {
      this.$lvx.loading.finish()
    }
    
  },
  mounted () {
   
  },
  methods: {
    print: function (message) {
    }
  }
}
</script>

<style lang="scss">

</style>