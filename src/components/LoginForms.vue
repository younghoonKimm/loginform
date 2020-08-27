<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isFormValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button :disabled="!isFormValid || !password" type="submit" class="btn">
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
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
        const idInfo = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', idInfo);
        // const { data } = await loginUser(idInfo);
        // const { token, user } = data;
        // // save at cookie
        // saveAuthToCookie(token);
        // saveUserToCookie(user.nickname);
        // this.$store.commit('setToken', token);
        // this.$store.commit('setUsername', user.nickname);
        this.$router.push('/main');
        // this.logMessage = `${data.user.nickname}님 환영합니다.`;
      } catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
        this.initForm();
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
