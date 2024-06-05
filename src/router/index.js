import { createRouter, createWebHistory } from 'vue-router'

import CourseList from '@/views/CourseList.vue'
const routes = [
  {
    path: '/course_list',
    name: 'CourseList',
    component: CourseList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
