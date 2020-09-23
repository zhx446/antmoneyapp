import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goodNum: 0
	},
	mutations: {
		addGoodNum(state,commentId) {
			if(commentId.commentId == 1) {
				state.goodNum = 1;
			}
			
		}
	},
	actions: {},
	modules: {}
})
