<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">password:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname:</label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          :disabled="!isFormValid || !password || !nickname"
          type="submit"
          class="btn"
        >
          회원 가입
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  computed: {
    isFormValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData);
        this.logMessage = `${data.nickname}님 환영합니다.`;
        this.initForm();
      } catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
