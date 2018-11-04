##  公共模块

---
1. <a href="#1">导出Excel</a>
2. <a href="#2">集合转二维数组</a>
3. <a href="#3">打印</a>
4. <a href="#4">设置二级以下导航菜单高亮显示</a>

---
<a name="1"></a>

- export_json_to_excel
	- 参数:
		- {header | array} 表头信息
		- {data | [[],[]]} 数据信息
		- {filename | string} 导出文件名
		- {autoWidth| boolean} 列是否自适应宽度
	- 返回值: 空
	- 示例：

		### 
			<template>
				<div class="btns-wraper lvx-text-align-r">
		          <lvx-button type="primary" size="small" @click="handleExport">导出</lvx-button>
		        </div>
			</template>
			<script>
			import {export_json_to_excel} from '~/src/plugins/ExportExcel'
			import { convertArrayFromCollection } from '~/src/plugins/util'
			export default {
			  methods: {
				handleExport () {
			      const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
			      const res = [
			          {
			              "name": "BeJson",
			              "url": "http://www.bejson.com",
			              "age": 88,
			              "flag": true,
			              "address": "科技园路"
			          },
			          {
			               "name": "BeJson",
			              "url": "http://www.bejson.com",
			              "age": 8,
			              "flag": true,
			              "address": "科技园路"
			          },
			          {
			               "name": "BeJson",
			              "url": "http://www.bejson.com",
			              "age": 88,
			              "flag": true,
			              "address": "科技园路"
			          }
			      ];
			      let data = convertArrayFromCollection(res)//将集合转换为二维数组
			      export_json_to_excel({
			        // 设置Excel表头
			        header: tHeader,
			        // Excel表数据
			        data,
			        // 导出的文件名
			        filename: 'aa',
			        // 是否自适应宽度
			        autoWidth: true
			      })
			    }
			  }
			}
			</script>


<a name="2"></a>

- convertArrayFromCollection
	- 参数:
		- {collection | collection} 集合
	- 返回值: Array | [[],[]]
	- 示例：
	 
	###
	    const res = [
	      {
	          "name": "BeJson",
	          "url": "http://www.bejson.com",
	          "age": 88,
	          "flag": true,
	          "address": "科技园路"
	      },
	      {
	           "name": "BeJson",
	          "url": "http://www.bejson.com",
	          "age": 8,
	          "flag": true,
	          "address": "科技园路"
	      },
	      {
	           "name": "BeJson",
	          "url": "http://www.bejson.com",
	          "age": 88,
	          "flag": true,
	          "address": "科技园路"
	      }
	    ];
	    let data = convertArrayFromCollection(res)

		输出==> data 
		[
	      [
	          "name": "BeJson",
	          "url": "http://www.bejson.com",
	          "age": 88,
	          "flag": true,
	          "address": "科技园路"
	      ],
	      [
	           "name": "BeJson",
	          "url": "http://www.bejson.com",
	          "age": 8,
	          "flag": true,
	          "address": "科技园路"
	      ],
	      [
	           "name": "BeJson",
	          "url": "http://www.bejson.com",
	          "age": 88,
	          "flag": true,
	          "address": "科技园路"
	      ]
	    ];

<a name="3"></a>

- printTemplate
	- 参数:
		- {templateName | string} 打印页面名称
		- {data | object} 打印页面编译时需要的数据
		- {cb | function} 打印结束后的回调函数
	- 返回值：空
	- 用法:
	  
		打印页面必须存放在~/src/components/prints/目录下，示例为show-car.vue组件内容,必须在props中定义data来接收传入的数据

		### 打印模板示例

			<template>
			  <div class="comp-print-show-card">
			    这是测试的打印页面
			    <lvx-card class="box-card">
			     <p>车品牌： {{data.name}}</p>
			     <p>车型： {{data.type}}</p>
			     <p>车系： {{data.ser}}</p>
			    </lvx-card>
			  </div>
			</template>
			
			<script>
			export default {
			  data () {
			    return {
			    }
			  },
			  props: {
			    data: {
			      type: Object,
			      default: {}
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
			
			<style lang="scss"  scoped>
			@import "~styles/base.scss";
			.comp-print-show-card{
			  @include responsive-default {
			   
			  }
			}
			</style>

	- 示例
	
	###
	
		<template>
			<div class="btns-wraper lvx-text-align-r">
	          <lvx-button type="primary" size="small" @click="handlePrint">打印</lvx-button>
	        </div>
		</template>
		<script>
		import { printTemplate } from '~/src/plugins/util'
		export default {
		  methods: {
			handlePrint () {
		      printTemplate('show-car', {name: '奥迪', type: 'SUV', ser: 'Q5'})
		    }
		  }
		}
		</script>
		
<a name="4"></a>

- 设置二级以下导航菜单高亮显示
	- 参数:
		- {routerPath | string} 高亮显示的菜单项的路由地址

	- 用法:
		- 使用this.$store.commit 触发 'setMenuActiveUrl'
	- 示例
		###
	
			<script>
			import { printTemplate } from '~/src/plugins/util'
			export default {
			  async fetchData () {
	            this.$store.commit('setMenuActiveUrl', '/repertory/repertory')
			  }
			}
			</script>
		