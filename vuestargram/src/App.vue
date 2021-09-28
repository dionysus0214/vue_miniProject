<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :post="post"
    :step="step"
    :image="image"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
</template>

<script>
import data from './data.js'
import Container from './components/Container.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      post: data,
      seeMore: 0,
      step: 0,
      image: '',
    }
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.seeMore}.json`)
      .then((result) => { // GET 요청으로 가져온 데이터는 result 파라미터에 담겨있음
        this.post.push(result.data);
        this.seeMore++;
      })
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0].type);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
    publish() {
      let myPost = {
        name: "Kim Ji Eun",
        userImage: "https://placeimg.com/200/200/people",
        postImage: "",
        likes: 75,
        date: "Feb 14",
        liked: false,
        content: "ㅎㅇㅎㅇㅎㅇ",
        filter: "clarendon"
      };
      this.post.unshift(myPost); // unshift()는 array에 데이터 하나 더 추가하는 것
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
