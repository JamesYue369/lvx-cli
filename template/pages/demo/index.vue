<template>
<section class="row saas-demo">
    <div class="lvx-tooltip-bottom">
        Tip hover here
        <span class="tooltiptext">aa</span>
    </div>
    <lvx-breadcrumb >
        <lvx-breadcrumb-item :to="{ path: '/' }">首页</lvx-breadcrumb-item>
        <lvx-breadcrumb-item>活动管理</lvx-breadcrumb-item>
        <lvx-breadcrumb-item>活动列表</lvx-breadcrumb-item>
        <lvx-breadcrumb-item >活动详情</lvx-breadcrumb-item>
    </lvx-breadcrumb>
    <div>
        <lvx-select  placeholder="请选择" :model="value" @change="change" >
            <lvx-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </lvx-option>
        </lvx-select>
        <lvx-select  placeholder="请选择" :model="value" >
            <lvx-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </lvx-option>
        </lvx-select>
        
    </div>
</section>

</template>

<script>
import base from '~/framework/core/vue-base'
export default {
  name: 'demo',
  extends: base,
  metaInfo: {
    title: '示例'
  },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
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
    change(v) {
      console.log(v)
    },
    changeSelect() {
      this.value = '选项2'
    }
  },
  components: {
  }
    
}
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.saas-demo{
    margin-top: 67px;
}
</style>
