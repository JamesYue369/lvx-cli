import Vuex from 'vuex'
import * as types from './mutation-types'

import Header from './modules/common/header'
import Footer from './modules/common/footer'

const CreateStroe = () => {
  return new Vuex.Store({
    state: {
        isLogin: false,
        user: {}
    },
    mutations: {
        [types.SET_USER] (state, payload) {
            state.user = payload
        },
        [types.SET_ISLOGIN] (state, payload) {
            state.isLogin = payload
        }
    },
    actions: {
    },
    modules: {
        Header,
        Footer,
    }
  })
}

export default CreateStroe
