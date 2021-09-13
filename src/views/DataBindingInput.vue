<template>
  <div>
    <input type="text" v-model="valueModel" />
  </div>
  <br />
  <div>
    <input type="number" v-model.number="numberModel" />
  </div>
  <br />
  <div>
    <textarea v-model="message"></textarea>
  </div>
  <br />
  <div>
    <select v-model="food">
      <option value="01">피자</option>
      <option value="02">치킨</option>
      <option value="03">떡볶이</option>
    </select>
  </div>
  <br />
  <div>
    <label><input type="checkbox" value="서울" v-model="checked" />서울</label>
    <label><input type="checkbox" value="부산" v-model="checked" />부산</label>
    <label><input type="checkbox" value="제주" v-model="checked" />제주</label>
    <br />
    <span>체크한 지역: {{ checked }}</span>
  </div>
  <br />
  <div>
    <label
      ><input
        type="radio"
        v-bind:value="radioValue1"
        v-model="picked"
      />미국</label
    >
    <label
      ><input
        type="radio"
        v-bind:value="radioValue2"
        v-model="picked"
      />호주</label
    >
    <label
      ><input
        type="radio"
        v-bind:value="radioValue3"
        v-model="picked"
      />독일</label
    >
    <br />
    <span>체크한 나라: {{ picked }}</span>
  </div>
  <br />
  <div>
    <img v-bind:src="imgSrc" style="width: 200px" />
  </div>
  <div>
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue == ''">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueModel: "dionysus",
      numberModel: 74,
      message: "오늘 저녁엔 슬의생 보면서 치맥이닷!",
      food: "02",
      checked: [],
      picked: "",
      radioValue1: "미국",
      radioValue2: "호주",
      radioValue3: "독일",
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue: ""
    };
  }
};
</script>
