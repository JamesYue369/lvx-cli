<template>
<section class="row page-demo">
    <div class="lvx-tooltip-bottom">
        Tip hover here
        <span class="tooltiptext">aa</span>
    </div>
    <ui-breadcrumb >
        <ui-breadcrumb-item :to="{ path: '/' }">首页</ui-breadcrumb-item>
        <ui-breadcrumb-item>活动管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>活动列表</ui-breadcrumb-item>
        <ui-breadcrumb-item >活动详情</ui-breadcrumb-item>
    </ui-breadcrumb>
    <div>
        <ui-select  placeholder="请选择" :model="value" @change="change" >
            <ui-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </ui-option>
        </ui-select>
        <ui-select  placeholder="请选择" :model="value" >
            <ui-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </ui-option>
        </ui-select>
        
    </div>
</section>

</template>

<script>
export default {
  name: 'demo',
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
.page-demo{
    margin-top: 67px;
}
</style>
