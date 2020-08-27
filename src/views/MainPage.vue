<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem';

export default {
  data() {
    return {
      postItems: [],
    };
  },
  components: {
    PostListItem,
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
      console.log(this.postItems);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
