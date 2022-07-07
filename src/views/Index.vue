<template>
  <div>
    <!-- views/Index.vue -->
    <!-- 标题栏 -->
    <mt-header title="学前端，到达内" fixed>
      <div slot="right" v-if="$store.state.username">
        欢迎：{{$store.state.username}}
      </div>
      <div slot="right" v-else>
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
    <div v-infinite-scroll="loadMore"
         infinite-scroll-distance="50"
         :infinite-scroll-immediate-check="true">
      <article-item 
        @click.native="$router.push(`/article?id=${item.id}`)"  
        :article="item" v-for="item in articleList" :key="item.id">
      </article-item>
      <div style="height:60px;"></div>
    </div>

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
      selected: '1',    // 绑定顶部导航选中项的类别ID
      cats: null,       // 绑定类别列表
      articleList: [],  // 绑定文章列表
      page: 1,          // 绑定当前页码
      isLoading: false, // 绑定是否正在加载中
    }
  },

  methods: {

    /** 通过cid与page查询文章列表
     *  cid：类别ID
     *  page： 页码
     *  通过callback的方式返回查询到的文章列表
     */
    loadArticles(cid, page, callback){
      this.$indicator.open({
        text:'加载中...',
        spinnerType: 'snake',
      })

      this.axios.get(
        `/articles?cid=${cid}&page=${page}`).then(res=>{
          let articles = res.data.results // 接收查询结果数组
          callback(articles) // 调用callback方法，执行后续业务
          this.$indicator.close()
      })
    },

    /** 当滚动到底部，自动加载下一页 */
    loadMore(){
      if(this.isLoading) return;

      this.isLoading = true   // 上锁
      console.log('到底了....');
      // 准备参数，发送http请求
      let cid = this.selected   // 当前选中项的类别ID
      let page = ++this.page    // 目标页码
      console.log(`加载类别：${cid}  的第 ${page} 页数据.`)
      this.loadArticles(cid, page, (articles)=>{
        this.articleList.push(...articles)  // 追加到旧数组末尾
        this.isLoading = false   // 开锁
      })
    }
  },

  /** 页面保活后，解锁该生命周期方法。 当页面被激活时执行 */
  activated(){
    console.log('activited...')
    this.isLoading = false  // 启用无限滚动
  },

  /** 页面保活后，解锁该生命周期方法。 当页面隐藏到后台时执行 */
  deactivated(){
    console.log('deactivited...')
    this.isLoading = true // 禁用无限滚动
  },

  mounted(){
    // 发送http请求， 加载类别列表
    this.axios.get('/category').then(res=>{
      console.log('加载类别列表：', res)
      // 把 res.data.results 存入 data.cats 变量中
      this.cats = res.data.results
    })

    // 发送http请求，加载UI类别下首页文章列表
    this.loadArticles(1, 1, (articles)=>{
      this.articleList = articles  // 替换旧数组即可
    })
  },

  watch:{
    selected(newval, oldval){ // 监听顶部导航选中项的变化
      this.page = 1
      window.scrollTo(0, 0)

      console.log(`顶部导航选中项从：${oldval} 变成了${newval}`);
      // newval就是选中项的id值   发送http请求，访问当前类别的首页
      this.loadArticles(newval, 1, (articles)=>{
        this.articleList = articles
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

