<template>
  <div>
    <!-- views/Index.vue -->
    <!-- 标题栏 -->
    <mt-header title="学前端，到达内">
      <div slot="right">
        <router-link class="link" to="/login">登录</router-link>
        &nbsp;
        <router-link class="link" to="/register">注册</router-link>
      </div>
    </mt-header>
    <!-- 导航 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">UI</mt-tab-item>
      <mt-tab-item id="2">电商</mt-tab-item>
      <mt-tab-item id="3">网页</mt-tab-item>
      <mt-tab-item id="4">交互</mt-tab-item>
    </mt-navbar>
    <!-- 轮播图 -->
    <mt-swipe  style="height:200px;">
      <mt-swipe-item>
        <img style="width:100%;" src="/1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img style="width:100%;" src="/2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img style="width:100%;" src="/3.jpg">
      </mt-swipe-item>
    </mt-swipe>

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

<style scoped>
.link {
  color: white;
}
</style>