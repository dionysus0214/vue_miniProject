<template>
  <div class="post">
    <div class="post-header">
      <div 
        class="profile"
        :style="{ backgroundImage: `url(${post.userImage})` }"
      ></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div 
      :class="post.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${post.postImage})` }"
      @click="$store.commit('plusLikes')"
    ></div>
    <!-- vue에서 style 속성 데이터 바인딩 시 style=""에 object 데이터 형태로 css 속성 넣을 수 있음
        데이터 자료형이 object이므로 css 속성명은 - 대시기호를 사용할 수 없음(CamelCase 사용)
        자바스크립트에서 문자 중간에 변수를 넣으려면 `문자${변수}문자`
    -->
    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p><strong>{{ post.name }}</strong> {{ post.content }}</p>
      <p class="date">{{ post. date }}</p>
    </div>
</div> 
</template>

<script>
export default {
  props: {
    post: Object,
  }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>