<template>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <img :src="products[isClicked].image" style="width: 50%" />
      <h4>{{ products[isClicked].title }}</h4>
      <p>{{ products[isClicked].content }}</p>
      <p>{{ products[isClicked].price }}원</p>
      <!-- <button @click="modal = false">닫기</button>
      props는 read-only임 받아온 거 수정 불가 -->
      <button @click="!modal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    products: Object,
    isClicked: Number,
    modal: Boolean,
  }
}
</script>

<style>
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
</style>