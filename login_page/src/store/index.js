import { createStore } from 'vuex';
import Cookies from 'js-cookie';

export default createStore({
  state: {
    isLoggedIn: false,
    userdata: null,
  },
  mutations: {
    SET_LOGIN(state, userdata) {
      state.userdata = userdata;
      state.isLoggedIn = true;
    },
    SET_LOGOUT(state) {
      state.isLoggedIn = false;
      state.userdata = null;
      Cookies.remove('userdata');
    },
  },
  actions: {
    logout({ commit }) {
      commit('SET_LOGOUT');
    },
  },
});
