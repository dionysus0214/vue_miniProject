<template>
  <div
    :class="`${filter} filter-item`" 
    :style="`background-image:url(${image})`"
    @click="fire"
  >
    <slot></slot>
    <!-- props는 src, style 속성 등에서도 사용 가능하지만
        slot은 HTML 태그이기 때문에 HTML 태그처럼만 사용 가능
    -->
  </div> 
</template>

<script>
export default {
  props: {
    image: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit('isClicked', this.filter);
    }
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>