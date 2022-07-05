<template>
  <div>
    <!-- 单一文章信息开始 -->
    <div class="articleItem">
      <!-- 文章标题开始 -->
      <div class="articleItem-header">文章标题</div>
      <!-- 文章标题结束 -->
      <!-- 文章图文信息开始 -->
      <div class="articleItem-wrapper">
        <!-- 文章图像开始  -->
        <div class="articleImg">
          <img src="../assets/logo.png" />
        </div>
        <!-- 文章图像结束 -->
        <!-- 文章简介开始 -->
        <div class="articleDes">
          文章描述文章描述文章描述文章描述文章描述
          文章描述文章描述文章描述文章描述文章描述
          文章描述文章描述文章描述文章描述文章描述
          文章描述文章描述文章描述文章描述文章描述
        </div>
        <!-- 文章简介结束 -->
      </div>
      <!-- 文章图文信息结束 -->
    </div>
    <!-- 单一文章信息结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      navactive: "1",
    };
  },
};
</script>
<style scoped>
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>
