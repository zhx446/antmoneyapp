import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'
import Optional from '../views/Optional.vue'
import Fund from '../components/Fund.vue'
import Stock from '../components/Stock.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/find',
		name: 'Find',
		component: Find
	},
	{
		path: '/optional', //主路由
		name: 'Optional',
		redirect: "/optional/stock", //重定向到第一个子路由
		component: Optional,
		// 注意：
		// 主路由使用"redirect"重定向到第一个子路由，实现点击父级进入第一个子路由；
		// 所有子路由都要加上主路由
		children: [{
				path: '/optional/fund', //子路由
				component: Fund
			},
			{
				path: '/optional/stock', //子路由
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
		path: '/',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import('../views/Search.vue')
	},
	{
		path: '/articledetail',
		name: 'Articledetail',
		component: () => import('../views/Articledetail.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	linkActiveClass:'active',
	routes
})

export default router
