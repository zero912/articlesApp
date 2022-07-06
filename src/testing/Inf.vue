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
      n: 30
    }
  },
  methods:{
    loadMore(){
      // 模拟异步耗时请求， 3秒后得到数据，追加到列表末尾
      console.log('到底了......')
      setTimeout(()=>{
        this.n += 20
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



