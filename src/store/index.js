import mutation from './mutation'
import action from './action'
import state from './state'
import Vuex from 'vuex'
// Vuex 状态管理的完整使用模式
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutation,
  action
}) 

export default store