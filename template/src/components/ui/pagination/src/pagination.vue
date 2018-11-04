<script>
  export default {
    name: 'UiPagination',
    render (h) {
      const data = {
        attrs: this.$props
      }
      return (
        <div class="ui-pagination">
          <lvx-pagination
            layout="prev, pager, next"
            more-pages={this.morePages}
            more-style={this.moreStyle}
            pre-style={this.preStyle}
            next-style={this.nextStyle}
            pager-class="pager-style"
            pager-style={this.pagerStyle}
            active-class="page-active-style"
            popper-class="page-popper-style"
            active-style={this.pagerActiveStyle}
            {...data}
            layout="prev, pager, next, sizes, jumper"
            on-current-change={this.currentChangeHandle}
            on-size-change={this.sizeChangeHandle}
            >
          </lvx-pagination>
        </div>
        );
    },
    data: function () {
      return {
        morePages: 5,
        pagerStyle: {
          width: '30px',
          minWidth: '30px',
          height: '30px',
          lineHeight: '30px',
          border: 'solid 1px #d9d9d9',
          borderRadius: '4px',
          fontSize: '12px',
          padding: '0'
        },
        pagerActiveStyle: {
          color: '#ff9d00',
          backgroundColor: '#ffffff',
          border: '1px solid #ff9d00'
        },
        moreStyle: {
          marginRight: '5px',
          width: '30px',
          minWidth: '30px',
          height: '30px',
          lineHeight: '30px',
          border: 'solid 1px #d9d9d9',
          borderRadius: '4px',
          fontSize: '12px',
          padding: '0'
        },
        preStyle: {
          width: '30px',
          height: '30px',
          minWidth: '30px',
          border: 'solid 1px #d9d9d9',
          borderRadius: '4px',
          padding: '0',
          marginRight: '5px'
        },
        nextStyle: {
          width: '30px',
          height: '30px',
          minWidth: '30px',
          border: 'solid 1px #d9d9d9',
          borderRadius: '4px',
          padding: '0',
          marginLeft: '5px'
        }
      };
    },
    methods: {
      currentChangeHandle(v) {
        this.$emit('current-change', v)
      },
      sizeChangeHandle(v) {
        this.$emit('size-change',v)
      }
    },
    props: {
      pageSize: {
        type: Number,
        default: 20
      },
      small: Boolean,

      total: Number,

      pageCount: Number,

      currentPage: {
        type: Number,
        default: 1
      },

      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 40];
        }
      },

      popperClass: String,
    }
  };
</script>
<style lang="scss" >
@import "~styles/base.scss";
  .ui-pagination{
    display: inline-block;

    .pager-style{
      &:not(:last-child){
        margin-right: 5px;
      }
    }
    .page-active-style{
      color: #fff;
      background-color: $theme-color;
      border: none;
    }
    .lvx-pagination .lvx-select .lvx-input .lvx-input__inner{
      height: 30px;
    }

  }
</style>
