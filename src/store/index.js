import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    //현재 시점에선 토큰 값 필요
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imt4a20wOUBuYXZlci5jb20iLCJfaWQiOiI1ZjQ2NjM0ZTM0MTNiNjgxMmRmNmRmMzciLCJpYXQiOjE1OTg1MDU3NjksImV4cCI6MTYwNzE0NTc2OX0.zFiNZShWLFnulQi08AkYloLrFcd7LGCMCI0z04ozYSU',
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
});
