<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create" @click="fixItem"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletPosts } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('wanna delete?')) {
        await deletPosts(this.postItem._id);
        this.$emit('refresh');
      }
    },
    fixItem() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style></style>
