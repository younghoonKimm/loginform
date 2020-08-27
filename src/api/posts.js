import { posts } from './index';

function createPost(subjectData) {
  return posts.post('/', subjectData);
}

// 노트 조회 API
function fetchPosts() {
  return posts.get('/');
}

export { createPost, fetchPosts };
