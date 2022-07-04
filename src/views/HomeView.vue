<template>
  <div>
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

    <!-- 底部选项卡 -->
    <mt-tabbar v-model="tabSelected">
      <mt-tab-item id="index">
        <img :src="require(
          `@/assets/index_${tabSelected=='index'?1:0}.png`)" slot="icon" alt="">             
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img v-show="tabSelected=='me'" src="@/assets/me_1.png" slot="icon" alt="">
        <img v-show="tabSelected!='me'" src="@/assets/me_0.png" slot="icon" alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: '1',
      tabSelected: 'index'
    }
  },
}
</script>
<style scoped>
.link {
  color: white;
}
</style>
