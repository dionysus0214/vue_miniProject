<template>
  <div>
    <img :src="product.image" class="room-img" />
    <h4 @click="openModal">{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: Object,
  },
  methods: {
    openModal() {
      // $로 시작하는 것은 vue에 내장된 특별한 변수
      this.$emit('openModal', this.product.id);
    }
  }
}

// custom event 문법을 이용해 부모가 가진 데이터를 변경하는 방법
// 1. 자식은 $emit(작명, 전달할자료) 이렇게 부모에게 메시지를 보낼 수 있음
// 2. 부모는 @작명="데이터변경하는JS코드" 이렇게 메시지를 수신해서 원하는 데이터를 변경하도록 코드를 짬
</script>

<style>
.room-img {
  width: 90%;
  margin-top: 40px;
}
h4 {
  cursor: pointer;
}
</style>