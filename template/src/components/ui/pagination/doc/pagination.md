
### 基础用法


	<template>
	  <div class="page-home">
	    <!--分页组件 -->
	    <ui-pagination :total="total" :currentPage="current_page" @current-change="pageChange" @size-change="sizeChange"/>
	  </div>
	</template>
	<script>
	import breadcrumb from '~/src/components/common/breadcrumb'
	export default {
	  name: 'home',
	  data () {
	    return {
	      total: 200,
      	  current_page: 1
	    }
	  },
	  mounted () {
	   
	  },
	  methods: {
	    pageChange(pageNumber) {
	      console.log(pageNumber)
	    },
			sizeChange(sizeNumber) {
	      console.log(sizeNumber)
	    },
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
	<td>pageSize</td>
	<td>每页显示条目数</td>
	<td>number</td>
	<td>—</td>
	<td>20</td>
</tr>
<tr>
	<td>total</td>
	<td>总条目数</td>
	<td>number</td>
	<td>—</td>
	<td>—</td>
</tr>
<tr>
	<td>currentPage</td>
	<td>当前页数</td>
	<td>number</td>
	<td>—</td>
	<td>—</td>
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
	<td>current-change</td>
	<td>currentPage 改变时会触发</td>
	<td>当前页currentPage</td>
</tr>
<tr>
	<td>size-change</td>
	<td>sizePage 改变时会触发</td>
	<td>当前页数据条数pageSize</td>
</tr>
</table>
