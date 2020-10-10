import Vue from 'vue'
import App from './App.vue'
import routes from './router/router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// 安装 Vuex
Vue.use(Vuex)
// 安装 VueRouter
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes
})
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increasement (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increasement')
    }
  }
})
store.commit('increasement')
console.log(store.state.count, 'state.count')
// 创建一个Counter组件
const Counter = {
  template: '<div>{{ count }}</div>',
  computed: {
    count () {
      return store.state.count
    }
  }
}

new Vue({
  router,
  // 把store对象提供给 store 选项，这可以把 store 的实例注入所有子组件
  store,
  // render 是字符串模板（ template ）的替代方案，允许你发挥 JavaScript 最大的编程能力，
  // Vue 选项中 render 函数若存在，则Vue构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数
  render: h => h(App)
}).$mount('#app')
