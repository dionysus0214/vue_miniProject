<template>
  <h1>Full name: {{ fullName }}</h1>
  <button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
  data() {
    return {
      firstName: "JiEun",
      lastName: "Kim",
      fullName: "",
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
  methods: {
    changeName() {
      this.firstName = "YoonHo";
    },
  },
};
</script>
