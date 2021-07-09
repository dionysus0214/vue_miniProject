import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBindingInput from '../views/DataBindingInput.vue'
import DataBindingList from '../views/DataBindingList.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ChildComponent from '../views/ChildComponent.vue'
import SlotUseModalLayout from '../views/SlotUseModalLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/databindingInput',
    name: 'DataBindingInput',
    component: DataBindingInput
  }, 
  {
    path: '/databindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedComponent
  },
  {
    path: '/childComponent',
    name: 'ChildComponent',
    component: ChildComponent
  },
  {
    path: '/slotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
