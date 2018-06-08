<template>
<section class="row saas-demo">
    <div class="lvx-tooltip-bottom">
        Tip hover here
        <span class="tooltiptext">aa</span>
    </div>
    <sas-breadcrumb >
        <sas-breadcrumb-item :to="{ path: '/' }">首页</sas-breadcrumb-item>
        <sas-breadcrumb-item>活动管理</sas-breadcrumb-item>
        <sas-breadcrumb-item>活动列表</sas-breadcrumb-item>
        <sas-breadcrumb-item >活动详情</sas-breadcrumb-item>
    </sas-breadcrumb>
    <div>
        <sas-select  placeholder="请选择" :model="value" @change="change" >
            <sas-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </sas-option>
        </sas-select>
        <sas-select  placeholder="请选择" :model="value" >
            <sas-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </sas-option>
        </sas-select>
        
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
.saas-demo{
    margin-top: 67px;
}
</style>
