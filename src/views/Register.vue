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
      :state="nameState"
      @blur.native.capture="checkName"></mt-field>
    <mt-field 
      type="password" 
      placeholder="请输入密码" 
      label="密码"
      v-model="pwd"
      :state="pwdState"
      @blur.native.capture="checkPwd"></mt-field>
    <mt-field
      type="password"
      placeholder="请再次输入密码"
      label="确认密码"
      v-model="repwd"
      :state="repwdState"
      @blur.native.capture="checkRepwd"
    ></mt-field>
    <mt-button size="large" type="primary">立即注册</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',  // 绑定用户名
      nameState: '', // 用户名输入框的状态
      pwd: '',
      pwdState: '',
      repwd: '',
      repwdState: '',
    }
  },
  methods: {
    checkName(){  /** 验证用户名 */
      let exp = /^\w{3,15}$/;
      if(exp.test(this.name)){  // 验证通过
        this.nameState = 'success'
      }else {  // 验证失败
        this.nameState = 'error'
      }
    },
    checkPwd(){  /** 验证密码 6位数字 */
      let exp = /^\d{6}$/;
      if(exp.test(this.pwd)){  // 验证通过
        this.pwdState = 'success'
      }else {  // 验证失败
        this.pwdState = 'error'
      }
    },
    checkRepwd(){  /** 验证重复密码 与密码相同 */
      let exp = /^\d{6}$/;
      if(exp.test(this.repwd) && this.pwd===this.repwd){  // 验证通过
        this.repwdState = 'success'
      }else {  // 验证失败
        this.repwdState = 'error'
      }
    },
  }
}
</script>



