<template>
  <lvx-breadcrumb-item :to="to" :replace="replace">
    <slot></slot>
  </lvx-breadcrumb-item>
</template>
<script>
  export default {
    name: 'SasBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    }
  };
</script>
