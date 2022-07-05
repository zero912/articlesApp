<template>
  <div>
    <!-- views/Index.vue -->
    <!-- 标题栏 -->
    <mt-header title="学前端，到达内" fixed>
      <div slot="right">
        <router-link class="link" to="/login">登录</router-link>
        &nbsp;
        <router-link class="link" to="/register">注册</router-link>
      </div>
    </mt-header>
    <!-- 导航 -->
    <mt-navbar
      style="margin-top:40px;"
      v-model="selected" fixed>
      <mt-tab-item id="1">UI</mt-tab-item>
      <mt-tab-item id="2">电商</mt-tab-item>
      <mt-tab-item id="3">网页</mt-tab-item>
      <mt-tab-item id="4">交互</mt-tab-item>
    </mt-navbar>
    <!-- 轮播图 -->
    <mt-swipe  
      :speed="150"
      :auto="4000"
      style="height:56.2vw; margin-top: 90px;">
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
    <!-- 列表项 -->
    <article-item v-for="i in 10" :key="i"></article-item>
    <div style="height:60px;"></div>
  </div>
</template>
<script>
import ArticleItem from '@/components/ArticleItem.vue'
export default {
  components: {
    ArticleItem
  },
  data() {
    return {
      selected: '1'
    }
  },
  mounted(){
    // 发送http请求， 加载类别列表
    this.axios.get('/category').then(res=>{
      console.log('加载类别列表：', res)
    })
  }
}
</script>

<style scoped>
.link {
  color: white;
}
</style>