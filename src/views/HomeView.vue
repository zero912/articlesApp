<template>
  <div>
    <!-- 二级路由占位符 -->
    <router-view />

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
      tabSelected: this.$route.path.split('/').pop()
    }
  },
  watch: {
    tabSelected(newval, oldval){
      console.log(`tabSelected从 ${oldval} 变成了 ${newval} `)
      // this.$router.push(`/home/${newval}`)
      if(newval=='me'){
        this.$router.push('/home/me')
      }else if(newval=='index'){
        this.$router.push('/home/index')
      } 
    }
  }
}
</script>
