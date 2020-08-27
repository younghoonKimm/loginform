import Vue from 'vue';
import Vuex from 'vuex';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username != '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, idInfo) {
      const { data } = await loginUser(idInfo);
      const { token, user } = data;
      // save at cookie
      saveAuthToCookie(token);
      saveUserToCookie(user.nickname);
      commit('setToken', token);
      commit('setUsername', user.nickname);
      //혹시 사용할 수 있으니 data를 return 시킴.
      return data;
    },
  },
});
