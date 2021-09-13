<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <div>
    <h1 v-if="type == 'A'">A</h1>
    <h2 v-else-if="type == 'B'">B</h2>
    <h3 v-else>C</h3>
  </div>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The counter is {{ counter }}</p>
  </div>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="피자">피자</option>
      <option value="치킨">치킨</option>
      <option value="떡볶이">떡볶이</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 25000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "무선마우스",
          price: 12000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "아이패드",
          price: 725000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "태블릿거치대",
          price: 32000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "무선충전기",
          price: 42000,
          category: "노트북/태블릿",
          delivery_price: 5000
        }
      ],
      type: "B",
      counter: 0,
      selectedValue: ""
    };
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    changeSelect() {
      alert("오늘 저녁은 " + this.selectedValue);
    }
  }
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
