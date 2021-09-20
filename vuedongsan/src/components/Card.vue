<template>
  <div>
    <img :src="product.image" class="room-img" />
    <h4>{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: Object,
  }
}
</script>

<style>
.room-img {
  width: 90%;
  margin-top: 40px;
}
</style>