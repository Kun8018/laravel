<template>
  <a-form :model="loginForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item
      label="账户"
      has-feedback
      
      help="{msg1}""
    >
      <a-input v-model="loginForm.username" id="" placeholder="请输入账户名/邮箱/手机号" />
    </a-form-item>

    <a-form-item prop="password" v-model="loginForm.password" label="密码" has-feedback   help="请至少输入8位"> 
      <a-input-password allow-clear placeholder="请输入密码" />
    </a-form-item>
    
    
    <a-button @click="submit" type="submit">注册</a-button>
  </a-form>
  
</template>
<script>
export default {
  name:'registeer',
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
      this.$axios.post("php.com/user")
           .then(function (response) {
             console.info(response.data);
           })
    }
  }
  
};
</script>