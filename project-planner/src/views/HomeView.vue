<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <SingleProject v-for="project in filteredProjects" :key="project.id" :project="project" @delete="handleDelete"
        @complete="handleComplete" />
    </div>
    <div v-else>
      <h2>Loading projects...</h2>
    </div>
  </div>
</template>

<script>
  import SingleProject from '../components/SingleProject.vue'
  import FilterNav from '../views/FilterNav.vue';

  export default {
    name: 'Home',
    components: {SingleProject, FilterNav},
    data() {
      return {
        projects: [],
        current: 'all'
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
    },
    computed: {
      filteredProjects() {
        if (this.current === 'completed') {
          return this.projects.filter(project => project.completed)
        } else if (this.current === 'ongoing') {
          return this.projects.filter(project => !project.completed)
        }
        return this.projects
      }
    }
  }
</script>