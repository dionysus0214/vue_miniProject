<template>
  <h1>Full name: {{ fullName }}</h1>
</template>

<script>
export default {
  data() {
    return {
      firstName: "JiEun",
      lastName: "Kim"
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>
