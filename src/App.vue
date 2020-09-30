<!--
 * @Author: your name
 * @Date: 2020-09-29 14:16:04
 * @LastEditTime: 2020-09-30 16:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloudFilm-vue\cloud-film-vue\src\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <VuxUseDemo />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import VuxUseDemo from './components/VuxUseDemo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    VuxUseDemo
  }
}

// let app = new Vue({
//   el:"app",
//   data:{
//     list:[
//       { id: 0, text: '蔬菜' },
//       { id: 1, text: '奶酪' },
//       { id: 2, text: '随便其它什么人吃的东西' }
//     ]
//   }
// })
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
