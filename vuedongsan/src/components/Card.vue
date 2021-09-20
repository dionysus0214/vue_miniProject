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
      this.$emit('openModal', this.product.id);
    }
  }
}
</script>

<style>
.room-img {
  width: 90%;
  margin-top: 40px;
}
</style>