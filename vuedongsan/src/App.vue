<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <Discount
    v-if="showDiscount == true"
    :discount = "discount"
  />

  <button @click="sortingPrice">가격순정렬</button>
  <button @click="back">되돌리기</button>

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
      productsOriginal: [...data],
      // array, object 데이터의 각각 별개의 사본을 만들려면 [...array]
      menus: ['Home', 'Shop', 'About'],
      count: [0, 0, 0],
      discount: 20,
      showDiscount: true,
      isClicked: 0,
      modal: false,
    }
  },
  methods: {
    sortingPrice() {
      this.products.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    back() {
      this.products = [...this.productsOriginal];
    }
    // sort()는 원본 변형
    // map(), filter()는 원본 보존
  },
  mounted() {
    setInterval(() => {
      if(this.discount > 0) {
        this.discount--;
      } else {
        this.showDiscount = false;
      }
    }, 1000);
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