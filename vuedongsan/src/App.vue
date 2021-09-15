<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ prices[0] }}</p>
    <button @click="calcuateCount">허위매물신고</button>
    <span>신고수: {{ count }}</span>
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
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동 원룸', '천호동 원룸', '서초동 원룸'],
      prices: ['50만원', '40만원', '70만원'],
      count: 0,
    }
  },
  methods: {
    calcuateCount() {
      this.count++; // 함수 안에서 데이터 쓸 땐 this.데이터명
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
