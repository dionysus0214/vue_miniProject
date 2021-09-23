<template>
  <div>
    <h5>{{ blog[0].title }}</h5>
    <p>{{ blog[0].date }}</p>
  </div>
  <div>
    <h5>{{ blog[1].title }}</h5>
    <p>{{ blog[1].date }}</p>
  </div>
  <div>
    <h5>{{ blog[2].title }}</h5>
    <p>{{ blog[2].date }}</p>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    blog: Array, // [로 시작하면 array, {로 시작하면 object
  }
}
</script>

<style>

</style>