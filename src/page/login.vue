<template>
  <div>
    <p>用户名：</p><input type="text"/>
    <p>密码：</p><input type="text" />
    <input type="button" value="登录" />
    <router-link to='/register'>去注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    
  }
}
</script>

<style scoped>

</style>
