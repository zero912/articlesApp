<template>
  <div>
    <!-- views/Register.vue -->
    <!-- 标题栏 -->
    <mt-header title="用户注册">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="#" slot="right">登录</router-link>
    </mt-header>
    <!-- 表单 -->
    <mt-field 
      type="text" 
      placeholder="请输入用户名" 
      label="用户名"
      v-model="name"
      @blur.native="checkName"></mt-field>
    <mt-field type="password" placeholder="请输入密码" label="密码"></mt-field>
    <mt-field
      type="password"
      placeholder="请再次输入密码"
      label="确认密码"
    ></mt-field>
    <mt-button size="large" type="primary">立即注册</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',  // 绑定用户名
    }
  },
  methods: {
    checkName(){  /** 验证用户名 */
      let exp = /^\w{3,15}$/;
      if(exp.test(this.name)){  // 验证通过
        console.log('通过..');
      }else {  // 验证失败
        console.log('失败..');
      }
    }
  }
}
</script>



