<template>
  <div>
    <!-- views/Form.vue -->
    <el-form :model="form" label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" placeholder="用户名"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" placeholder="密码"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone" placeholder="手机号"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">快速注册</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',     // 绑定姓名
        password: '', // 绑定密码
        phone: ''     // 绑定手机号
      }
    }
  },
  methods: {
    /** 处理点击提交按钮的事件 */
    onSubmit (){
      console.log('表单数据：', this.form);
    }
  }
}
</script>