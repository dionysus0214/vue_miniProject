<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <Discount />
  <transition name="fade">
  <!-- class명을 조건부로 넣으려면 { 클래스명 : 조건 } -->
    <Modal
      @closeModal="modal = false"
      :products="products"
      :isClicked="isClicked"
      :modal="modal"
    />
  </transition>
  <Card
    @openModal="modal = true; isClicked = i"
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
body {
  margin: 0;
  text-align: center;
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

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>

// 동적인 UI 만드는 법
// 1. UI의 현재 상태를 데이터로 저장
// 2. 데이터에 따라 UI가 어떻게 보일지 작성