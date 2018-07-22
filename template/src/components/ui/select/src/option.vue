<script>
  export default {
    name: 'UiOption',
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
