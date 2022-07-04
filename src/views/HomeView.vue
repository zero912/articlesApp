<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="学前端，到达内">
      <div slot="right">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </mt-header>
    <!-- 导航 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">UI</mt-tab-item>
      <mt-tab-item id="2">电商</mt-tab-item>
      <mt-tab-item id="3">网页</mt-tab-item>
      <mt-tab-item id="4">交互</mt-tab-item>
    </mt-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: '1'
    }
  },
}
</script>

