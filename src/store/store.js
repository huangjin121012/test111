import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// 提供仓库

const store = new Vuex.Store({

     
    state: {
        baseUrl: 'http://www.baidu.com',
    },

     mutations: {},

     getters: { }

})

export default store;