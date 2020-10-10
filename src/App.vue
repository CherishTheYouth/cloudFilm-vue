<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <VuxUseDemo /> -->
    <p>
      <router-link to="/login">Go to Foo1</router-link>
      <router-link to="/register">Go to Foo2</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
// import VuxUseDemo from './components/VuxUseDemo.vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)
// // 1.定义路由组件
// const Foo_1 = { template: '<div>foo_1</div>' }
// const Foo_2 = { template: '<div>foo_2</div>' }
// const Foo_3 = { template: '<div>foo_3</div>' }

// // 2.定义路由
// const routes = [
//   { path: 'foo_1', component: Foo_1 },
//   { path: 'foo_2', component: Foo_2 },
//   { path: 'foo_3', component: Foo_3 }
// ]

// 3. 创建router实例，然后传'routes'配置
// const router = new VueRouter({
//   routes:routes
// })

// 4. 创建和挂载根实例
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // VuxUseDemo
  }
  // routes: routes
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
