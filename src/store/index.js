import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryList: [],
    menuList: []
  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    setMenuList (state, menuList) {
      state.menuList = menuList
    }
  },
  actions: {

  },
  modules: {
    app,
    user
  }

})
