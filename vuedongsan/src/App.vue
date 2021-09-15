<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <div>
    <h4 v-for="product in products" :key="product">{{ product }}</h4>
    <p v-for="price in prices" :key="price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: ['Home', 'Shop', 'About'],
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
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 4px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
