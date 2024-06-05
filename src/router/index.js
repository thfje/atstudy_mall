import {createRouter,createWebHistory} from 'vue-router'


import Home from '@/views/Home.vue'
import CourseList from '@/views/CourseList.vue'
const routes = [{
		path: '/course_list',
		name: 'CourseList',
		component: CourseList
	},
	{
		path: '/',
		name: 'Home',
		component: Home

	},

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
