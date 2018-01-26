import { createTest, createVue, destroyVM, createMock } from '../util'
import Vue from 'vue'
import forgetpwd from '~/pages/forgetPwd'
import apis from '~/config/api'
var expect = require('chai').expect;
//提交按钮判断为空
describe('forgetpwd',() => {
 // var expect = require('chai').expect;
  //组件实例
  const fpCom = Vue.extend(forgetpwd);
  console.log(fpCom);
  //挂载组件
  const myfpCom = new fpCom().$mount();

  myfpCom.chooseclick('2');
  expect(myfpCom.Ischoose).to.be.equal(false);

});

