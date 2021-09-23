<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
    </div>
  </nav>

  <div class="container mt-4">
    <p>vue로 만들었음</p>
  </div>

  <List
    :blog="blog"
  />
</template>

<script>
import blog from './blog.js';
import List from './components/List.vue';

export default {
  name: 'App',
  data() {
    return {
      blog: blog,
    }
  },
  components: {
    List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
