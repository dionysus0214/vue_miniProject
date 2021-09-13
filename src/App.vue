<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
      <!-- insertTodo에 전달되는 text 값은 header에 있는 input의 value 값 
            부모와 자식 사이에 이벤트를 이용해 데이터를 주고받을 수 있어야
            -> 부모는 on을 이용해 event를 등록하고 자식은 emit를 이용해 해당 이벤트를 발생시킴
            
            Header.vue가 자식, App.vue가 무도
            @insertTodo라는 custom event를 등록
      -->
      <Todo 
        :todos="todos" 
        @removeTodo="removeTodo" 
        @updateDone="updateDone"
        @updateTodo="updateTodo"
      />
      <Footer 
        :filterType="filterType" 
        :size="filteredList.length"
        @onFilterType="handleFilterType"
      />
    </section>
  </div>
</template>

<script>
import "./assets/css/main.css";

import Header from "./components/Header";
import Todo from "./components/Todo"; // 상대 경로
import Footer from "@/components/Footer"; // 절대 경로

export default {
  components: {
    Header,
    Todo,
    Footer
  },
  data() {
    return {
      todos: [
        {
          id: new Date(), // 클라이언트에서 고유한 값을 나타낼 수 있는 수단으로 date 사용
          text: "Vue.js 공부", // todo의 내용
          isDone: true // 일이 마무리되었는지 판단할 수 있는 값
        },
        {
          id: new Date() + 1,
          text: "그룹PT",
          isDone: false
        }
      ],
      filterType: 'All'
    };
  },
  methods: {
    insertTodo(text) {
      this.todos = [
        ...this.todos, // 기존의 배열에 새로운 todo를 추가
        {
          // id, isDone의 경우 같은 포맷을 유지하기 때문에 새로 받지 않음
          id: new Date().getTime(), // 고유한 값을 주기 위해 date를 사용
          text, // 유동적인 text 값만 받음
          isDone: false
        }
      ]
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    updateDone(id) {
      const todos = [...this.todos];
      const todo = todos.find(todo => todo.id === id);
      // find(): 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환, 없으면 undefined 반환

      if (todo) {
        todo.isDone = !todo.isDone;
        this.todos = todos;
      }
    },
    updateTodo({ id, text }) {
      const todos = [...this.todos];
      const todo = todos.find(todo => todo.id === id);

      if (todo) {
        todo.text = text;
        this.todos = todos;
      }
    },
    handleFilterType(type) {
      this.filterType = type
    }
  },
  computed: {
    filteredList () {
      switch(this.filterType) {
        case "All": {
          return this.todos
        }
        case "Active": {
          return this.todos.filter((todo) => !todo.isDone)
        }
        case "Completed": {
          return this.todos.filter((todo) => todo.isDone)
        }
        default: {
          return []
        }
      }
    }
  },
};
</script>