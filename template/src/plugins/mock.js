import apis from '~/src/config/api'
import Vue from 'vue'
import Mock from 'mockjs'
import MockAdapter from 'axios-mock-adapter';
export default function () {
  return new Promise((resolve, reject)=>{
    const createMock = function () {
    let mock = new MockAdapter(Vue.prototype.$axios);
      return mock;
    };
    Vue.prototype.$mock = createMock();
    //库存列表查询
    Vue.prototype.$mock.onGet(apis.carList).reply(200, {
      "success":true,
      "code":200,
      "tableData": {
        carList: [{
          carId: '001',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: '',
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }, {
          carId: '002',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: 0,
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }, {
          carId: '003',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: 0,
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }, {
          carId: '004',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: 0,
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }, {
          carId: '005',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: 0,
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }, {
          carId: '006',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: 0,
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }, {
          carId: '007',
          vin: 'l0098282122',
          tenantName: '张三车行',
          isNewCar: 0,
          carStatus: 1,
          registerDay: 22,
          insertTime: '2018-07-26 16:51:34.0',
          seriesName: '奥迪A3',
          modelName: '2018款 奥迪A3 30周年型 Sportback 40 TFSI 运动型',
          initialLicenceTime: '2015-07-26 16:51:34.0',
          mileage: 11999,
          marketPrice: 75,
          evaluatePrice: 73,
          stockStatus: 3,
          remark: 'xxx',
          showConfirmDel: false
        }],
        total: 100,
        currentPage: 1
      }
    });
    //区域列表查询
    Vue.prototype.$mock.onGet(apis.areaList).reply(200, {
      "success":true,
      "code":200,
      "data": [{
        text: '全部',
        value: 0
      }, {
        text: '宝马专区',
        value: 1
      }, {
        text: '奔驰专区',
        value: 2
      }]
    });
    //商户列表查询
    Vue.prototype.$mock.onGet(apis.commercialList).reply(200, {
      "success":true,
      "code":200,
      "data": [{
        text: '全部',
        value: 0
      }, {
        text: '张三车行',
        value: 1
      }, {
        text: '李四车行',
        value: 2
      }]
    });
    // 商户local
    Vue.prototype.$mock.onGet(apis.local).reply(200, {
      "success":true,
      "code":200,
      "data": {
        list: [{
          level: 2,
          tenantName: '全车通',
          status: '正常',
          tenantType: 1,
          Integral: 99,
          checkInTime: new Date(),
          checkItems: '卫生干净',
          scoresAddSubtract: '+',
          scopeDown: 0,
          scopeUp: 99,
          checkTime: new Date(),
          checkScore: '+5',
          id: 1,
        }]
      }
    });

    resolve()
  })
}
