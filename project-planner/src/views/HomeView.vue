<template>
  <div class="home">
    <div v-if="projects.length">
      <SingleProject v-for="project in projects" :key="project.id" :project="project" @delete="handleDelete"
        @complete="handleComplete" />
    </div>
    <div v-else>
      <h2>Loading projects...</h2>
    </div>
  </div>
</template>

<script>
  import SingleProject from '../components/SingleProject.vue'
  export default {
    name: 'Home',
    components: {SingleProject},
    data() {
      return {
        projects: []
      }
    },
    mounted() {
      fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => this.projects = data)
      .catch(error => console.log(error))
    },
    methods: {
      handleDelete(id) {
        this.projects = this.projects.filter(project => project.id !== id)
      },
      handleComplete(id) {
        let p = this.projects.find(project => project.id === id)
        p.completed = !p.completed
      }
    }
  }
</script>