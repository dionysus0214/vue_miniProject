<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input
      placeholder="🔍"
      @input="search($event.target.value)"
    />
    <div
      class="post-header"
      v-for="(a, i) in follower"
      :key="i"
    >
      <div
        class="profile"
        :style="`background-image:url(${a.image})`"
      ></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  name: 'mypage',
  setup() {
    let follower = ref([]); 
    // let 데이터이름 = ref(데이터) 안에 데이터를 저장하지 않으면 데이터 변경시 실시간 재렌더링이 안 됨
    // return {데이터이름} 해줘야 HTML에서 {{데이터이름}} 이렇게 사용 가능
    let followerOriginal = ref([]);

    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data; // .value로 object 안의 데이터를 수정해줘야 함
        followerOriginal.value = [...a.data];
      })
    })

    function search(keyword) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(keyword) != -1
      });
      follower.value = [...newFollower];
    }

    return {
      follower,
      search,
    }
  }
}
</script>
