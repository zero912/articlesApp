<template>
  <div>
    <!-- views/Nav.vue -->
    <el-menu mode="horizontal" default-active="2"
      text-color="#333" active-text-color="#33f">
      <el-menu-item index="1">指南</el-menu-item>
      <el-menu-item index="2">组件</el-menu-item>
      <el-submenu index="3">
        <template slot="title">主题</template>
        <el-menu-item index="3-1">炫酷黑</el-menu-item>
        <el-menu-item index="3-2">中国红</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">资源</el-menu-item>
    </el-menu>
    <!-- 垂直导航 -->
    <el-menu class="menu" default-active="2"
      text-color="#0f0" active-text-color="#f00">
      <el-menu-item index="1">指南</el-menu-item>
      <el-menu-item index="2">组件</el-menu-item>
      <el-submenu index="3">
        <template slot="title">主题</template>
        <el-menu-item index="3-1">炫酷黑</el-menu-item>
        <el-menu-item index="3-2">中国红</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">资源</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-item.is-active{
  color: red;
}
.menu {
  width: 200px;
}
</style>




