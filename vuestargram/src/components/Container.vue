<template>
  <div>
    <Post
      :post="post[i]"
      v-for="(a, i) in post"
      :key="i"
    />
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  components: {
    Post,
  },
  props: {
    post: Array,
  }
}
</script>

<style>

</style>