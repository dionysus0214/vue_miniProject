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