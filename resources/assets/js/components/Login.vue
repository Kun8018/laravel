<template>
  <a-form :model="loginForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item
      label="账户"
      has-feedback
      validate-status="{state1}"
      help="{msg1}""
    >
      <a-input v-model="loginForm.username" id="" placeholder="请输入账户名/邮箱/手机号" />
    </a-form-item>

    <a-form-item prop="password" v-model="loginForm.password" label="密码" has-feedback validate-status=""  help="请至少输入8位"> 
      <a-input-password allow-clear placeholder="请输入密码" />
    </a-form-item>
    
    <a-button link-to="register" @click="submit" type="primary">登录</a-button>
    
    <a-button @click="submit" type="primary"><a href="/register">点击跳转</a></a-button>
    
  </a-form>
  
</template>
<script>
export default {
  name:'Login',
  data() {
    return {
      
      loginForm:{
        username:'',
        password:''
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
      rules:{
         username:
         [ {required: true, message: '',state1:'error' }],
         password:
         [{min:3,max:10}]
      }
    };
  },
  methods:{
    submit(){
      
    },
    
  }
  
};
</script>