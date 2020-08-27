<template>
  <div class="contents">
    <h1 class="page-header">Edit Subject</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Content:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 300
          </p>
        </div>
        <button type="submit" class="btn">edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 300;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (err) {
        this.logMessage = err;
        console.log(err);
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    const { title, contents } = data;
    return (this.title = title), (this.contents = contents);
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: #fff;
}
</style>
