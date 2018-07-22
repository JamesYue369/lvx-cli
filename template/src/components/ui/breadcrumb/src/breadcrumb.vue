<template>
  <div class="ui-breadcrumb">
    <lvx-breadcrumb  :separator="separator" >
      <slot></slot>
    </lvx-breadcrumb>  
  </div>
</template>
<script>
  export default {
    name: 'UiBreadcrumb',
    data: function () {
      return {
        separator: '/'
      };
    },
    props: {
    }
  };
</script>
<style lang="scss" >
  .ui-breadcrumb{
    .lvx-breadcrumb__item{
      .lvx-breadcrumb__inner{
        color: #d9d9d9;
        font-weight: normal;
      }
      &:last-child{
        .lvx-breadcrumb__inner{
          color: #333;
        }
      }
    }
  }
</style>