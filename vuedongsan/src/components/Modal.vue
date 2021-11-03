<template>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <img :src="products[isClicked].image" style="width: 50%" />
      <h4>{{ products[isClicked].title }}</h4>
      <p>{{ products[isClicked].content }}</p>
      <!-- <input @input="month = $event.target.value" /> 
      v-model은 '여기 입력된 값을 data로 바로 저장해달라'는 문법 -->
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
    // data(){}를 react에서는 state라고 함
    // 정보를 저장하기도, UI 현재 상태를 저장하기도 하기 때문
    return {
      month: 1,
    }
  },
  watch: {
    // 데이터 감시하려면 vatch: { 감시할데이터(){} }
    // 특정 데이터가 변경될 때마다 실행되는 코드를 여기에 적을 수 있음
    month(notNumber) {
      // 함수명은 내가 감시하고 싶은 데이터명으로 작명해야 함
      if(isNaN(notNumber) == true) {
        // isNaN() 안에 숫자를 입력하면 false, 글자를 입력하면 true
        alert('문자 입력 금지');
        this.month = 1;
      }
    }
  },
  props: {
    // 자식 컴포넌트가 부모가 갖고 있는 데이터 쓰려면 props로 데이터를 전송해야
    products: Object,
    isClicked: Number,
    modal: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  },
  beforeUpdate() {
    // 데이터가 변경되고 HTML(컴포넌트)가 재렌더링되기 전에 실행되어야 하므로 beforeUpdate()
    if(this.month == 2) {
      alert('2개월은 너무 짧음');
      this.month = 3;
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