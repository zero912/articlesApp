<template>
  <div>
    <!-- views/Components.vue -->
    <el-container>
      <el-header style="background: #444;">
        <el-menu 
          mode="horizontal" 
          default-active="2"
          background-color="#444"
          text-color="#bbb"
          active-text-color="#fff">
          <el-menu-item index="1">指南</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">主题</el-menu-item>
          <el-menu-item index="4">资源</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside-menu scroll">
          <el-menu 
            default-active="1"
            background-color="#444"
            text-color="#bbb"
            active-text-color="#fff">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              Container容器
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              Form表单
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              table表格
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <!-- 占位符匹配二级路由 -->
          <router-view />  
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.main {
  height: calc(100vh - 60px);
}
.aside-menu{
  height: calc(100vh - 60px);
  padding-left: 15px;
  background-color: #444;
}
/* 修改滚动条样式 */
.scroll::-webkit-scrollbar {
	width: 3px;
	/*设置滚动条的宽度*/
}
/* 滚动区域的样式 */
.scroll::-webkit-scrollbar-thumb {
	border-radius: 10px;
	/*设置滚动条的圆角*/
	background: #aaa;
	/*设置滚动条的颜色*/
}
/* 滚动条的背景样式 */
.scroll::-webkit-scrollbar-track {
	border-radius: 0;
  background-color: #fff;
}
</style>    
