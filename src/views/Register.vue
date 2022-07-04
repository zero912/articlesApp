<template>
  <div>
    <!-- views/Register.vue -->
    <!-- 标题栏 -->
    <mt-header title="用户注册">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="#" slot="right">登录</router-link>
    </mt-header>
    <!-- 表单 -->
    <mt-field type="text" placeholder="请输入用户名" label="用户名"></mt-field>
    <mt-field type="password" placeholder="请输入密码" label="密码"></mt-field>
    <mt-field
      type="password"
      placeholder="请再次输入密码"
      label="确认密码"
    ></mt-field>
    <mt-button size="large" type="primary">立即注册</mt-button>
  </div>
</template>
