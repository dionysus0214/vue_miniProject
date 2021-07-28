<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap">
      <li class="item" v-for="(item, idx) in items" :key="{idx}">
      <!-- 리스트 렌더링되는 component에는 key라는 props 값이 필요
          가상 DOM에서 리스트 component에서 변경된 부분을 감지할 때 key 값을 활용하기 때문
      -->
        <a :href="item.link" target="_blank">
          <img :src="item.img">
          <span class="tit">제목: {{item.name}}</span>
        </a>
        <!-- 기본 태그에 :가 붙으면 "" 영역이 JS 영역으로 변경되어 item 객체에 접근 가능 -->
        <span class="tag" v-if="item.isUpdate">N</span>
        <!-- v-if: 조건이 성립하지 않을 경우 태그 자체를 렌더링하지 않음
            v-show: 조건이 성립하지 않아도 렌더링은 하되 display:none 처리
            state에 따라 보였다 안보였다하는 빈도가 많다면 v-show를 이용하는 것이 용이(v-if는 태그를 지웠다 해야하므로 브라우저가 부담을 느낌)
        -->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: {type: Array, default: () => []}
    }
  };
</script>

<style scoped>
h2 {
  text-align: center;
}

a {
  list-style: none;
  text-decoration: none;
}

li {
  list-style: none;
}

.wrap {
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}

.item {
  position: relative;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 25px;
}

.tit {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding: 20px 15px;
}

img {
  width: 100%;
  background: #ebebeb;
  border-radius: 4px;
}

.tag {
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px 10px;
  color: #fff;
  border-radius: 4px;
  background: #fc2332;
  font-weight: bold;
}
</style>