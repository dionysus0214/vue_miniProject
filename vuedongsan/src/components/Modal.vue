<template>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <img :src="products[isClicked].image" style="width: 50%" />
      <h4>{{ products[isClicked].title }}</h4>
      <p>{{ products[isClicked].content }}</p>
      <input v-model="month" />
      <p>{{ month }}개월 선택함: {{ products[isClicked].price * month }}원</p>
      <!-- <button @click="modal = false">닫기</button>
      props는 read-only임 받아온 거 수정 불가 -->
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month: 1,
    }
  },
  watch: { // 데이터 감시하려면 vatch: { 감시할데이터(){} }
    month(a) {
      if(isNaN(a) == true) {
        alert('문자 입력 금지');
        this.month = 1;
      }
    }
  },
  props: {
    products: Object,
    isClicked: Number,
    modal: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
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