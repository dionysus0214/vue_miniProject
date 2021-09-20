<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <Discount />
  <Modal
    :products="products"
    :isClicked="isClicked"
    :modal="modal"
  />
  <Card
    v-for="(product, i) in products"
    :key="i"
    :product="products[i]"
  />
</template>

<script>
import data from './data.js';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  data() {
    return {
      products: data,
      menus: ['Home', 'Shop', 'About'],
      count: [0, 0, 0],
      isClicked: 0,
      modal: false,
    }
  },
  components: {
    Discount,
    Modal,
    Card,
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

// 동적인 UI 만드는 법
// 1. UI의 현재 상태를 데이터로 저장
// 2. 데이터에 따라 UI가 어떻게 보일지 작성