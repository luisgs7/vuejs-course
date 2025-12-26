<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <div v-if="showModal">
    <Modal header="Testing Modal" text="This is a test modal" theme="sale1" @close="toggleModal" />
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

   export default {
    name: 'App',
    components: {Modal},
    data() {
      return {
        title: 'My first Vue app',
        header: 'Sign up for newsletter',
        text: 'This is a test modal',
        showModal: false
      }
    },
    methods: {
      handleClick() {
        console.log(this.$refs.name)
        this.$refs.name.classList.add('active')
        this.$refs.name.focus()
      },
      toggleModal() {
        this.showModal = !this.showModal
      }
    },
   }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
