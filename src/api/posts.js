import { posts } from './index';

function createPost(subjectData) {
  return posts.post('/', subjectData);
}

// 노트 조회 API
function fetchPosts() {
  return posts.get('/');
}

function fetchPost(postId) {
  return posts.get(postId);
}

function editPost(postId, subjectData) {
  return posts.put(postId, subjectData);
}

function deletPosts(postId) {
  return posts.delete(postId);
}

export { createPost, fetchPosts, deletPosts, fetchPost, editPost };
