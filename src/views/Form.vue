<template>
  <div>
    <!-- views/Form.vue -->
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="用户名"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="密码"/>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
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
      },
      rules: {
        name: [
          // required:true 要求必填， message 异常消息  
          {required:true, message:'用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required:true, message:'密码不能为空', trigger: 'blur'},
          {pattern:/^\d{6}$/, message:'6位数字', trigger: 'blur'}
        ],
        phone: [
          {required:true, message:'手机号不能为空', trigger: 'blur'},
          {pattern:/^1[3-9]\d{9}$/, message:'手机号格式不正确', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    /** 处理点击提交按钮的事件 */
    onSubmit (){
      console.log('表单数据：', this.form);
      // 找到form对象，调用form对象的validate方法，验证表单
      // 验证结果将会通过回调方法返回，通过valid参数接收验证结果
      // 如果验证通过：valid=true   如果验证失败： valid=false
      this.$refs['form'].validate((valid)=>{
        if(valid){
          console.log('验证通过');
        }else{
          console.log('验证失败，请检查表单项');
        }
      })
    }
  }
}
</script>