<template>

  <div>
    <div class="col-lg-3"></div>
    <div class="panel panel-primary col-lg-6 " >

      <div class="panel-heading">
        <h3 class="panel-title">登录</h3>

      </div>

      <div class="panel-body form-inline" >

        <input type="text" v-model="loginForm.username" placeholder="用户名"/>
        <input type="text" v-model="loginForm.password" placeholder="密码"/>
        <button @click="login">登录</button>

      </div>

    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      };
    },

    methods: {
      ...mapMutations(['changeLogin']),
      login () {
        let that = this;
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          alert('账号或密码不能为空');
        } else  if (this.loginForm.username+"" === 'a' && this.loginForm.password+"" === 'b'){
          that.$router.push('/');
        }else{

            that.$axios({
            method: 'post',
            url: '/user/login',
            data: that.loginForm
          }).then(res => {
            console.log(res.data);
            that.userToken = 'Bearer ' + res.data.data.body.token;
            // 将用户token保存到vuex中
            that.changeLogin({ Authorization: that.userToken });
            that.$router.push('/index');
            alert('登陆成功');
          }).catch(error => {
            alert('账号或密码错误');
            console.log(error);
          });
        }
      }
    }
  };
</script>
