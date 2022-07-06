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
      v-model="selected" fixed v-if="cats">
      <mt-tab-item 
        :id="item.id+''" 
        v-for="item in cats" :key="item.id">
        {{item.category_name}}
      </mt-tab-item>
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
    
    <!-- 
      遍历生成每一个列表项，同时向子组件传参：将当前对象传给
      article-item组件的article自定义属性
     -->
    <article-item :article="item" v-for="item in articleList" :key="item.id">
    </article-item>

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
      selected: '1',
      cats: null,       // 绑定类别列表
      articleList: [],  // 绑定文章列表
    }
  },
  mounted(){
    // 发送http请求， 加载类别列表
    this.axios.get('/category').then(res=>{
      console.log('加载类别列表：', res)
      // 把 res.data.results 存入 data.cats 变量中
      this.cats = res.data.results
    })

    // 发送http请求，加载UI类别下首页文章列表
    this.axios.get(`/articles?cid=1&page=1`).then(res=>{
      console.log('加载UI类别首页文章列表', res)
      // 将res.data.results 数组存入 data的articleList变量中
      this.articleList = res.data.results
    })
  },

  watch:{
    selected(newval, oldval){ // 监听顶部导航选中项的变化
      console.log(`顶部导航选中项从：${oldval} 变成了${newval}`);
      // newval就是选中项的id值   发送http请求，访问当前类别的首页
      this.axios.get(`/articles?cid=${newval}&page=1`).then(res=>{
        console.log('当前选中类别的首页数据：', res);
        // 替换当前列表
        this.articleList = res.data.results
      })
    }
  }
}
</script>

<style scoped>
.link {
  color: white;
}
</style>

