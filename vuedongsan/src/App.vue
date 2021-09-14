<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ prices[0] }}</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ prices[1] }}</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ prices[2] }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동 원룸', '천호동 원룸', '서초동 원룸'],
      prices: ['50만원', '40만원', '70만원']
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
  margin-top: 60px;
}
</style>
