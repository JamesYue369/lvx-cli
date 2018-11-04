<template>
  <div class="ui-popover-confirm">
    <!-- <lvx-button type="text" size="small" @click="handleClick">{{model}}</lvx-button>
    <span class="confirm-wraper" v-show="visiable">
      <div class="confirm">
        <slot></slot>
        <div style="text-align: right; margin: 0px;">
          <button type="button" class="lvx-button lvx-button--text lvx-button--mini">
          <span>取消</span>
          </button>
          <button type="button" class="lvx-button lvx-button--primary lvx-button--mini">
          <span>确定</span>
          </button>
        </div>
      </div>
    </span> -->
    <div class="popover-wraper">
    <lvx-popover
      ref="popover"
      placement="top"
      width="160"
      :trigger="trigger"
      v-model="visible">
      <slot></slot>
      <div style="text-align: right; margin: 0">
        <lvx-button size="mini" type="text" @click="handleClose">取消</lvx-button>
        <lvx-button type="primary" size="mini" @click="handleClick">确定</lvx-button>
      </div>
    </lvx-popover>
    </div>
    <lvx-button type="text" size="small" v-popover="`popover`" :disabled="disabled" >{{model}}</lvx-button>
</div>
</template>

<script>
  export default {
    name: 'UiPopoverConfirm',
    data: function () {
      return {
        visible: false
      };
    },
    methods: {
      handleClose () {
        this.$emit('cancel');
        this.visible = false;
      },
      handleClick () {
        this.$emit('sure');
        this.visible = false;
      }
    },
    computed: {
      
    },
    props: {
      model: {
        type: String,
        default: '删除'
      },
      trigger: {
        type: String,
        default: 'click',
        validator: value => ['click', 'hover'].indexOf(value) > -1
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
<style lang="scss" >
@import "~styles/base.scss";
  .ui-popover-confirm{
    position: relative;
    display: inline-block;
  }
</style>
