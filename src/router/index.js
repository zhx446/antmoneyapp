import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'
import Fund from '../views/Fund.vue'
import Optional from '../views/Optional.vue'
import Stock from '../components/Stock.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Find',
		component: Find
	},
	{
		path: '/optional/:id',
		name: 'Optional',
		component: Optional,
		// component: () => import('../views/Optional.vue'),
		children: [{
			// 当 /user/:id/profile 匹配成功，
			// UserProfile 会被渲染在 User 的 <router-view> 中
			path: 'fund',
			component: Fund
		},
		{
			path: 'stock',
			component: Stock
		}
		]
	},
	{
		path: '/community',
		name: 'Community',
		component: () => import('../views/Community.vue')
	},
	{
		path: '/asset',
		name: 'Asset',
		component: () => import('../views/Asset.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
