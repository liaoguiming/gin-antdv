import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// 持久化
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
// 状态存储
export const store = new Vuex.Store({
  state: {
    url: 'https://www.imliaogm.com'
  },
  plugins: [vuexLocal.plugin]
})

export default store
