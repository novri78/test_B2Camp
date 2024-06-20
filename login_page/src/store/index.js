import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    userdata: null
  },
  getters: {
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.userdata = JSON.parse(payload)
    },
    SET_LOGOUT(state) {
      state.isLoggedIn = false;
      state.userdata = null;
    },
  },
  actions: {
    logout({ commit }) {
      commit('SET_LOGOUT');
    },
  },
  modules: {
  }
})
