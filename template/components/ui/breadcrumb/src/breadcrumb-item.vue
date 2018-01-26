<template>
  <el-breadcrumb-item :to="to" :replace="replace">
    <slot></slot>
  </el-breadcrumb-item>
</template>
<script>
  export default {
    name: 'LvxBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    }
  };
</script>
