import { createTest, createVue, destroyVM, createMock } from '../util'
import Vue from 'vue'
import login from '~/pages/login'
import apis from '~/config/api'

describe('login.vue', () => {
	let vm;
	let mock = createMock()
	before(() => {
		vm = createVue(login, true);
		mock.onGet(apis.userLogin).reply(200, {
			"success":true,
			"code":200,
			"userId":-1
		});
	});
  	after(() => {
		destroyVM(vm);
	});
	
	// it('should call api correct', async () => {
	// 	let res = await vm.loginApp()
	// 	res.should.equal(false)
	// });
	it('should render correct contents', () => {
		expect(vm.$el.querySelector('.login-btn-w').textContent).to.equal('登录')
	});

})
