import VModel from '../Pages/v-model/Parent'
import Drum from '../Pages/drum/index'
import VueRouter from 'vue-router'
const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/vmodel', component: VModel }, // Пример приввязки v-model для кастомных компонентов
		{ path: '/drum', component: Drum }, // Пример приввязки v-model для кастомных компонентов
		
	]
})
export default router
