<template>
  <div class="menu">
    <!-- vue 반복문 특징: array, object 넣기 가능(자료 안의 데이터 갯수만큼 반복됨, 작명한 변수는 데이터 안의 자료가 됨)
      <a v-for="(작명, i) in 몇회" :key="i"></a>
      :key=""는 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀
      변수 작명 2개 까지 가능(왼쪽은 array 내 데이터, 오른쪽은 1씩 증가하는 변수) -->
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <Discount
    v-if="showDiscount == true"
    :discount = "discount"
  />

  <button @click="sortingPrice">가격순정렬</button>
  <button @click="back">되돌리기</button>

  <transition name="fade">
  <!-- class명을 조건부로 넣으려면 { 클래스명 : 조건 }
    <div :class="{ enimate : true }"></div> -->
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
    // 데이터를 사용하는 컴포넌트들 중 최상위 컴포넌트에 데이터를 만들어 놓는 게 좋음
    // 데이터는 위로 전송하는 게 복잡하고 추적이 어렵기 때문
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
    // create는 데이터 생성, mount는 index.html 파일에 장착
    // 데이터가 바뀌어서 컴포넌트가 재렌더링될 때는 update
    // 다른 페이지로 이동하는 등 컴포넌트가 삭제될 때는 unmount
    // 서버에서 데이터 가져올 경우 주로 created(), mounted()에 작성
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