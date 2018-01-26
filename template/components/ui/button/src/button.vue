<script>

  export default {
    name: 'LvxButton',
    render (h) {
      // debugger
      const categoryMap = {
        primary: 'sas-button--primary',
        secondary: 'sas-button--secondary',
        gray: 'sas-button--gray',
        dotted: 'sas-button--dotted'
      }
      const sizeMap = {
        default: 'el-button--default',
        medium: 'el-button--medium',
        small: 'el-button--small'
      }
      const data = {
        class: [categoryMap[this.category], sizeMap[this.size]],
        attrs: this.$props
      }
      // debugger
      return (
        <el-button class="sas-button" {...data} on-click={this.clickHandle}>
          {this.$slots.default}
        </el-button>
        );
    },
    data: function () {
      return {
        
      };
    },
    methods: {
      clickHandle(){
        this.$emit('click')
      }
    },
    props: {
      category: {
        type: String,
        default: 'primary'
      },
      onClick: Function,
      icon: {
        type: String,
        default: ''
      },
      disabled: Boolean,
      autofocus: Boolean,
      size: {
        type: String,
        default: 'default'
      },
    }
  };
</script>
<style lang="scss" type="text/scss" >
@import "~styles/base.scss";
  .sas-button{
    &.sas-button--primary{
      background-color: $theme-color;
      color: #fff;
      border-color: $theme-color;

      &.el-button--default{
        padding: 9px 20px;
      }
      &.el-button--medium{
        padding: 8px 20px;
      }
      &.el-button--small{
        padding: 5px 15px;
      }
      &:hover{
        border-color: $hover-color;
        color: #fff;
        background-color: $hover-color;
      }
      &:focus{
        border-color: $hover-color;
        color: #fff;
        background-color: $hover-color;
      }
      &:active{
        border-color: $hover-color;
        color: #fff;
        background-color: $hover-color;
      }
    }
    &.sas-button--secondary{
      background-color: #fff;
      color: $theme-color;
      border-color: $theme-color;

      &.el-button--default{
        padding: 9px 20px;
      }
      &.el-button--medium{
        padding: 8px 20px;
      }
      &.el-button--small{
        padding: 5px 15px;
      }
      &:hover{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }

      &:active{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }
      &:focus{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }
    }
    &.sas-button--gray{
      background-color: #fff;
      color: $font-color;
      border-color: $border-color;
      
      &.el-button--default{
        padding: 9px 20px;
      }
      &.el-button--medium{
        padding: 8px 20px;
      }
      &.el-button--small{
        padding: 5px 15px;
      }
      &:hover{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }

      &:active{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }

      &:focus{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }
    }

    &.sas-button--dotted{
      background-color: #fff;
      color: $theme-color;
      border-color: $theme-color;
      border-style: dashed;
      
      &.el-button--default{
        padding: 9px 20px;
      }
      &.el-button--medium{
        padding: 8px 20px;
      }
      &.el-button--small{
        padding: 5px 15px;
      }
      &:hover{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }
      &:active{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }
      &:focus{
        border-color: $hover-color;
        color: $hover-color;
        background-color: #fff;
      }
    }
  }

</style>