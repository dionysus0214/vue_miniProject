<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="text"
      @keypress="handelTodo"
    />
    <!-- input의 value를 v-model을 사용해 양방향 바인딩
          v-model을 이용하면 input의 value가 바뀔 때 text state를 변경하고 변경된 값은 다시 input의 value가 됨
    -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    handelTodo({ keyCode }) {
      const { text } = this;
      if(keyCode === 13 & text !== "") {
        this.$emit("insertTodo", text); // 이벤트 발생은 컴포넌트의 통신 방법 중 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식
        this.text = "";
      }
    }
  }
}
</script>

<style scoped>
h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>