<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              <router-link to="/list">List</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="mt-4">
    <router-view :blog="blog"></router-view>
    <!-- props 전송은 <router-view>에서 진행 -->
  </div>
</template>

<script>
import blog from './blog.js';

export default {
  name: 'App',
  data() {
    return {
      blog: blog,
    }
  },
  components: {
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
