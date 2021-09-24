import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
      {
        path: "comment", // 상대경로로 적어줘야 함
        component: Comment,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 