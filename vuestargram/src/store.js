import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      likes: 0,
      clikedLikes: false,
    }
  },
  mutations: {
    plusLikes(state) {
      if (state.clikedLikes == false) {
        state.likes++;
        state.clikedLikes = true;
      } else {
        state.likes--;
        state.clikedLikes = false;
      }
    }
  }
})

export default store;