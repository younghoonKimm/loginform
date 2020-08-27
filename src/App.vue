<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  created() {},
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
