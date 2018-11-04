## 全局基础数据
---
1. <a href="#1">字典数据</a>
2. <a href="#2">登录用户基本信息数据</a>
3. <a href="#3">登录用户权限菜单数据</a>

---
<a name="1"></a>
#### 1.字典数据
通过mapState将store.Env映射到实例env计算属性

	<template>
		<!--库存状态-->
		<lvx-select  placeholder="请选择" size="small">
	        <lvx-option 
	          v-for="item in env.storeStatus"
	          :key="item.value"
	          :label="item.text"
	          :value="item.value">
	        </lvx-option>
	    </lvx-select>
		<!--商户列表	-->
		<lvx-select  placeholder="请选择" size="small">
	        <lvx-option 
	          v-for="item in env.commercial"
	          :key="item.value"
	          :label="item.text"
	          :value="item.value">
	        </lvx-option>
	    </lvx-select>
	</template>
	<script>
    import { mapState } from 'vuex'
    export default {
		 created () {
		    this.$store.dispatch('fetchCommercial');
		 },
		 computed: {
		    ...mapState({
		      env: state => state.Env
		    })
		 }
    }
	</script>

#### 基础数据结构键名
- 库存状态
	- 绑定env.storeStatus
	- 触发$store.dispatch('fetchStoreStatus')获取库存状态数据
- 库存天数
	- 绑定env.storeHoldDays
	- 触发$store.dispatch('fetchStoreHoldDays')获取库存天数数据
- 车型
	- 绑定env.carType
	- 触发$store.dispatch('fetchCarLevel')获取车型数据
- 车龄
	- 绑定env.carAge
	- 触发$store.dispatch('fetchCarAge')获取车龄数据
- 里程
	- 绑定env.carMileage
	- 触发$store.dispatch('fetchCarMileage')获取车辆里程数据
- 排量
	- 绑定env.carDisplacement
	- 触发$store.dispatch('fetchCarDisplacement')获取车辆排量数据
- 排放标准
	- 绑定env.carEmissionStandard
	- 触发$store.dispatch('fetchCarEmissionStandard')获取车辆排放标准数据
- 变速箱
	- 绑定env.carGearbox
	- 触发$store.dispatch('fetchCarGearbox')获取车辆变速箱数据
- 座位数
	- 绑定env.carSeats
	- 触发$store.dispatch('fetchCarSeats')获取车辆座位数数据
- 燃料类型
	- 绑定env.carFuel
	- 触发$store.dispatch('fetchCarFuel')获取车辆燃料类型数据
- 售价
	- 绑定env.carPrice
	- 触发$store.dispatch('fetchTradingPrice')获取车辆售价数据
- 抵押状态
	- 绑定env.carMortgage
	- 触发$store.dispatch('fetchCarMortgage')获取车辆抵押状态数据
- 是否新车
	- 绑定env.carTime
	- 触发$store.dispatch('fetchCarTime')获取车辆是否新车数据
- 车辆所属类型
	- 绑定env.carOwnerType
	- 触发$store.dispatch('fetchCarOwnerType')获取车辆所属类型数据
- 上架状态
	- 绑定env.carOperationStatus
	- 触发$store.dispatch('fetchCarOperationStatus')获取车辆上下架状态动态数据
- 区域
	- 绑定env.area
	- 触发$store.dispatch('fetchArea')获取区域动态数据
- 区域不包含全部选项
	- 绑定env.areaAdd
	- 触发$store.dispatch('fetchAreaAdd')获取区域动态数据
- 商户
	- 绑定env.commercial
	- 触发$store.dispatch('fetchCommercial',areaId)获取商户列表动态数据
		- 参数：{areaId}(默认为空) 根据区域id筛选
- 商户状态
	- 绑定env.commercialStatus
	- 触发$store.dispatch('fetchCommercialStatus')获取商户状态动态数据
- 商户类型
	- 绑定env.commercialType
	- 触发$store.dispatch('fetchCommercialType')获取商户类型动态数据
- 商户类型不包含全部选项
	- 绑定env.commercialTypeAdd
	- 触发$store.dispatch('fetchCommercialTypeAdd')获取物业类型动态数据
- 商户年限
	- 绑定env.commercialYears
	- 触发$store.dispatch('fetchCommercialYears')获取商户年限动态数据
- 开票类型
	- 绑定env.ticketType
	- 触发$store.dispatch('fetchTicketType')获取开票类型动态数据
- 物业类型
	- 绑定env.propertyType
	- 触发$store.dispatch('fetchPropertyType')获取物业类型动态数据
- 物业类型不包含全部选项
	- 绑定env.propertyTypeAdd
	- 触发$store.dispatch('fetchPropertyTypeAdd')获取物业类型动态数据
- 合同状态
	- 绑定env.contractStatus
	- 触发$store.dispatch('fetchContractStatus')获取合同状态数据
- 缴费状态
	- 绑定env.paymentStatus
	- 触发$store.dispatch('fetchPaymentStatus')获取缴费状态数据
- 付款方式
	- 绑定env.payType
	- 触发$store.dispatch('fetchPayType')获取付款方式数据
- 付款方式不包含全部选项
	- 绑定env.payTypeAdd
	- 触发$store.dispatch('fetchPayTypeAdd')获取付款方式数据
- 品牌车系
	- 绑定env.brandSerices
	- 触发$store.dispatch('fetchBrandSerices')获取品牌车系数据
- 上架渠道
	- 绑定env.shelfType
	- 触发$store.dispatch('fetchShelf')获取上架渠道数据
- 交易车辆来源
	- 绑定env.tradingResource
	- 触发$store.dispatch('fetchTradingResource')获取交易车辆来源动态数据
- 交易状态
	- 绑定env.tradingStatus
	- 触发$store.dispatch('fetchTradingStatus')获取交易状态动态数据
- 道闸出入类型
	- 绑定env.inOutType
	-触发$store.dispatch('fetchInOutType')获取道闸出入类型动态数据
- 系统消息状态
	- 绑定env.newsType
	-触发$store.dispatch('fetchNews')获取系统消息状态动态数据
- 部门列表
	- 绑定env.branchList
	-触发$store.dispatch('fetchBranchList')获取部门列表动态数据
- 事故车类型列表
	- 绑定env.accidentType
	-触发$store.dispatch('fetchAccidentType')获取事故车类型动态数据
- 车辆出入类型列表
	- 绑定env.carInOutType
	-触发$store.dispatch('fetchCarInOutType')获取车辆出入类型动态数据
- 过户类型列表
	- 绑定env.transferType
	-触发$store.dispatch('fetchTransferType')获取过户类型动态数据
- 发票状态列表
	- 绑定env.invoiceStatus
	-触发$store.dispatch('fetchInvoiceStatus')获取发票状态动态数据
- 开票端口类型列表
	- 绑定env.invoicePortofType
	-触发$store.dispatch('fetchInvoicePortofType')获取过户类型动态数据
- 车辆类型列表
	- 绑定env.carInvoiceType
	-触发$store.dispatch('fetchCarInvoiceType')获取车辆类型动态数据
<a name="2"></a>
#### 2.登录用户基本信息数据
通过mapState将store.user 映射到实例user计算属性

	<script>
    import { mapState } from 'vuex'
    export default {
		 computed: {
		    ...mapState({
		      user: state => state.user
		    })
		 }
    }
	</script>

<a name="3"></a>
#### 3.登录用户权限菜单数据
通过mapState将store.userAuths 映射到实例userAuths计算属性

	<script>
    import { mapState } from 'vuex'
    export default {
		 computed: {
		    ...mapState({
		      userAuths: state => state.userAuths
		    })
		 }
    }
	</script>