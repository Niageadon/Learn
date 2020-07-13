import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloDecorator.vue'
import HelloTs from '../components/HelloTs.vue'
import dependencyInjection from '../components/dependencyInjection/index.vue'

Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/ts',
			name: 'HelloTs',
			component: HelloTs
		},
		{
			path: '/injection',
			name: 'dependencyInjection',
			component: dependencyInjection
		},
	]
})
