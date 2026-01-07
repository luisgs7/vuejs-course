<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <h2>Loading posts...</h2>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';

export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  }
}
</script>
