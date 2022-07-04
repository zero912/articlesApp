<template>
  <div>
    <!-- testing/Nav.vue -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <img src="/001.png" slot="icon" alt="">
        推荐</mt-tab-item>
      <mt-tab-item id="2">
        <img src="/004.png" slot="icon" alt="">
        科技</mt-tab-item>
      <mt-tab-item id="3">
        <img src="@/assets/007.png" slot="icon" alt="">
        数码</mt-tab-item>
      <mt-tab-item id="4">
        <img src="@/assets/025.png" slot="icon" alt="">
        军事</mt-tab-item>
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