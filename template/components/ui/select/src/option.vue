<!-- <template>
  <el-option :value="value" :label="label">
    <slot></slot>
  </el-option>
</template> -->
<script>
  export default {
    name: 'LvxOption',
    data: function () {
      return {
        
      };
    },
    render (h,context) {
      return h('el-option', {
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
