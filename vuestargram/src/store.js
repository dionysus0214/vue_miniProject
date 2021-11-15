import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      likes: 0,
      clikedLikes: false,
      more: {},
    }
  },
  mutations: {
    // state 수정은 store.js에서만 가능하게 코드를 짜야 -> vuex는 상태 관리 라이브러리
    // mutations에 데이터 수정방법 정의
    setMore(state, data) {
      state.more = data;
    },
    plusLikes(state) {
      if (state.clikedLikes == false) {
        state.likes++;
        state.clikedLikes = true;
      } else {
        state.likes--;
        state.clikedLikes = false;
      }
    }
  },
  actions: {
    // state를 수정하는 mutations는 순수하게 state 변경만 하는 함수 넣고
    // ajax처럼 비동기식 처리를 지원하는 코드는 actions에 넣는 게 좋음
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((a) => {
          context.commit('setMore', a.data);
      })
    }
  }
})

export default store;

// ajax은 actions에서
// state 변경은 mutations에서

// Vuex 쓰는 이유
// 1. props, custom event로 데이터 주고 받기 힘들 때: js 파일 하나에 모든 데이터 저장 가능
// 2. vue 파일과 데이터가 많을 때: 데이터 수정도 한 곳에서 가능