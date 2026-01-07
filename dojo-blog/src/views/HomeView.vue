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
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('No data available')
        }
        posts.value = await data.json()
      } catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return { posts, error }
  }
}
</script>
