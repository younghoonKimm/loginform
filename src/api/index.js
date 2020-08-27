import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//엑시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // baseURL: 'http://localhost:3000/',
  });
  return setInterceptors(instance);
}

const instance = createInstance();

//회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

//로그 아웃 API
function loginUser(idInfo) {
  return instance.post('login', idInfo);
}

// 노트 조회 API
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
