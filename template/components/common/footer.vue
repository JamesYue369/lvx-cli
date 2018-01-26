<template>
  <footer class="lx-ui-footer">
    <div class="footer-container">
      Copyright © James Yue
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
@import "~styles/base.scss";
.lx-ui-footer{
  @include responsive-default {
    position: absolute;
    bottom: 0;
    height: 50px;
    background-color: #324858;
    color: #fff;
    width: 100%;
    text-align: center;
    line-height: 50px;
  }
}
</style>

