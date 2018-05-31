import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '南阳'
	},
	actions: {
		changeCity(ctx, city) {
			// this.commit('cityName', city);
			ctx.commit('changeCity', city);
		}
	},
	mutations: {
		changeCity (state, city) {
			state.city = city;
		}
	}
})

// 可以通过dispatch来触发actions里面的方法，然后通过commit来触发mutations
// 也可以通过commit来直接触发mutations