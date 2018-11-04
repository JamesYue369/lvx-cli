
##  全局CSS样式
- 组件
  - 数据条
	
		为`<div>`标签添加类'lvx-data-bar'
		
			<div class="lvx-data-bar row">
			  <div class="col-md-3"><span class="data-label">总库存量(台)</span><span class="data-separator">：</span><span class="data-value">1211</span></div>
			  <div class="col-md-3"><span class="data-label">在场量(台)</span><span class="data-separator">：</span><span class="data-value">1201</span></div>
			  <div class="col-md-3"><span class="data-label">出场量(台)</span><span class="data-separator">：</span><span class="data-value">23</span></div>
			  <div class="col-md-3"><span class="data-label">库存总价值(万元)</span><span class="data-separator">：</span><span class="data-value">23433</span></div>
			</div>
	
		![](https://i.imgur.com/14hKe47.png)
- 预定义类
	- 内联元素水平右对齐 lvx-text-align-r
	- 内联元素水平左对齐 lvx-text-align-l
	- 内联元素水平居中对齐 lvx-text-align-c
	- 文本鼠标悬浮不显示下划线 lvx--text-decoration-none
	
	- 元素按照块级渲染 lvx-display-b
	- 元素按照内联块级渲染 lvx-display-ib
	
	- 元素右外边距10px lvx-margin-right-10
	- 元素右外边距5px lvx-margin-right-5

	- 文本颜色为项目主题色 lvx-color-theme

	- 元素定位为绝对定位 lvx-position-abs

- 全局变量
	- 页面中卡片的外边距 $card-spacing: 20px;
	- 分页组件上下外边距 $pagination-margin: 20px;
		
