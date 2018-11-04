### 基础用法

	<template>
	  <div class="page-home">
	    <!--气泡确认框 -->
	    <ui-popover-confirm model="删除" @sure="handleConfirmDel(scope.row)" @close="handleConfirmDel">
                <p><i class="lvx-icon-warning lvx-margin-right-10 lvx-color-theme"></i>确定要删除吗？</p>
              </ui-popover-confirm>
	  </div>
	</template>
	<script>
	export default {
	  name: 'home',
	  data () {
	    return {
	      
	    }
	  },
	  mounted () {
	   
	  },
	  methods: {
	    handleConfirmDel(car) {
	      console.log(car)      
	    },
	    handleCancelDel() {
	    }
	  },
	  components: {
	    
	  }
	}
	</script>

###  Attributes
<table>
<tr>
	<td>参数</td>
	<td>说明</td>
	<td>类型</td>
	<td>可选值</td>
	<td>默认值</td>
</tr>
<tr>
	<td>model</td>
	<td>显示按钮的文本值</td>
	<td>string</td>
	<td>—</td>
	<td>'删除'</td>
</tr>
<tr>
	<td>disabled</td>
	<td>是否禁用</td>
	<td>boolean</td>
	<td>false | true</td>
	<td>false</td>
</tr>
</table>

###  Events
<table>
<tr>
	<td>事件名称</td>
	<td>说明</td>
	<td>回调参数</td>
</tr>
<tr>
	<td>sure</td>
	<td>点击确认时触发</td>
	<td>—</td>
</tr>
<tr>
	<td>close</td>
	<td>点击取消时触发</td>
	<td>—</td>
</tr>
</table>

### Slot
<table>
<tr>
	<td>name</td>
	<td>说明</td>
</tr>
<tr>
	<td>default</td>
	<td>确认框内容</td>
</tr>
</table>

