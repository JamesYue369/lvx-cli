<!-- <template>
  <div class="sas-select">
    <el-select v-model="value" :placeholder="placeholder">
      <slot></slot>
    </el-select>  
  </div>
</template> -->
<script>

  export default {
    name: 'LvxSelect',
    render (h) {
      // debugger
      return (
        <div class="sas-select">
          <el-select { ...{ attrs: this.$props } } size="small" on-change={this.changeHandle}  v-model={this.value}>
            {this.$slots.default}
          </el-select>  
        </div>
        );
    },
    data: function () {
      return {
        value: this.model
      };
    },
    watch: {
      model: function (val, oldVal) {
        this.value =  val
      },
    },
    props: {
      model: {
        required: true
      },
      name: String,
      id: String,
      // size: String,
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: String,
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: {
        type: Number,
        default: 0
      },
      placeholder: {
        type: String,
        default() {
          return t('el.select.placeholder');
        }
      },
      defaultFirstOption: Boolean,
      reserveKeyword: Boolean,
      valueKey: {
        type: String,
        default: 'value'
      },
      collapseTags: Boolean
    },
    methods: {
      changeHandle(v) {
        this.$emit('change', v)
      }
    }
  };
</script>
<style lang="scss" type="text/scss" >
@import "~styles/base.scss";
  .sas-select{
    display: inline;
    .el-input--small {
      .el-input__inner{
        height: 34px;
      }
    }
  }
</style>