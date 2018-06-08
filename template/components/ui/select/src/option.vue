<!-- <template>
  <el-option :value="value" :label="label">
    <slot></slot>
  </el-option>
</template> -->
<script>
  export default {
    name: 'SasOption',
    data: function () {
      return {
        
      };
    },
    render (h,context) {
      return h('lvx-option', {
        props: {...this.$props}
      }, this.$slots.default)
    }, 
    props: {
      value: {
        required: true
      },
      label: [String, Number],
    }
  };
</script>
