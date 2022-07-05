<template>
  <div>
    <!-- views/Me.vue -->
    <!-- 标题栏 -->
    <mt-header title="个人信息">
      <div slot="right">
        <router-link class="link" to="/login">登录</router-link>
        &nbsp;
        <router-link class="link" to="/register">注册</router-link>
      </div>
    </mt-header>
  </div>
</template>
<style scoped>
.link {
  color: white;
}
</style>