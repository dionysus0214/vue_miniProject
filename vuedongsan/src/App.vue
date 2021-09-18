<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>
  <div>
    <img :src="products[0].image" class="room-img" />
    <h4>{{ products[0].title }}</h4>
    <p>{{ products[0].price }}원</p>
  </div>
</template>

<script>
import data from './data.js';

export default {
  name: 'App',
  data() {
    return {
      products: data,
      menus: ['Home', 'Shop', 'About'],
      count: [0, 0, 0],
      modal: false,
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

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>

// 동적인 UI 만드는 법
// 1. UI의 현재 상태를 데이터로 저장
// 2. 데이터에 따라 UI가 어떻게 보일지 작성