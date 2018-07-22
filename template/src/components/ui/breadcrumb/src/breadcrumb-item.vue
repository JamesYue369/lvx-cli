<template>
  <lvx-breadcrumb-item :to="to" :replace="replace">
    <slot></slot>
  </lvx-breadcrumb-item>
</template>
<script>
  export default {
    name: 'UiBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    }
  };
</script>
