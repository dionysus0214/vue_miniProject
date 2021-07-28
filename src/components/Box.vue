<template>
  <div 
    v-bind:class="['box', color]" 
    v-bind:style="{ width: width + 'px', height: height + 'px' }">
    <!-- props나 state를 바탕으로 class를 적용해주기 위해서는 v-bind:class 이용 -->
  </div>
</template>

<script>
  export default {
    props: { // props(부모(App.vue)로부터 받는 data)
      color: {type: String, default: ""}
    },
    data() { // Box의 state(나의 데이터) 
      return {
        width: 80,
        height: 40
      }
    }
  };
</script>

<style scoped>
.box {
  border: 1px solid #000;
}
.blue {
  background: #009bff;
}
.purple {
  background: #8f46ff;
}
.green {
  background: #00bcac;
}
</style>
