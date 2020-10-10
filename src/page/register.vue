<template>
  <div>
    <p>用户名：</p><input type="text"/>
    <p>密码：</p><input type="text" />
    <input type="button" value="注册"/>
    <router-link to='/login'>去登录</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
