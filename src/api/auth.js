import { instance } from './index';
//계정 관련 API//회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

//로그 아웃 API
function loginUser(idInfo) {
  return instance.post('login', idInfo);
}

export { registerUser, loginUser };
