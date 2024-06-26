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

      // Force UI update (not really forcing browser Storage panel refresh, but ensures state consistency)
      if (!Cookies.get('userdata')) {
        console.log('Cookie successfully removed');
      }
    },
  },
  actions: {
    logout({ commit }) {
      commit('SET_LOGOUT');
    },
  },
});
