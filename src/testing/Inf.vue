<template>
  <div>
    <!-- testing/Inf.vue -->
    <div v-infinite-scroll="loadMore"
         infinite-scroll-distance="50">
      <p v-for="i in n" :key="i">列表项：{{i}}</p> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 30,
      isLoading: false,  // 声明变量描述是否正在加载下一页
    }
  },
  methods:{
    loadMore(){
      if(this.isLoading){   // 如果正在加载中，那么方法直接结束
        return;
      }
      // 如果不是正在加载中，那么就可以发请求，在这之前先上锁
      this.isLoading = true
      // 模拟异步耗时请求， 3秒后得到数据，追加到列表末尾
      console.log('到底了......')
      setTimeout(()=>{
        this.n += 20
        this.isLoading = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
p {
  margin: 0px 10px; border-bottom: 1px solid #999;
  height: 50px; line-height: 50px; text-align: center;
}
</style>



