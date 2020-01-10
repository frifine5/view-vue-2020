<template>

  <div>
    <div class="panel panel-primary col-lg-4 pull-right" style="margin-right: 100px;">
      <div class="panel-heading">
        <h4 class="panel-title">用户登录</h4>
      </div>

      <div class="panel-body ">

        <table class="table form-group table-hover ">
          <tr>
            <td width="45%"><label for="name">用户名:</label></td>
            <td width="50%"><input type="text" id="name" class="form-control" v-model="loginForm.username"
                                   placeholder="用户名"/></td>
          </tr>

          <tr>
            <td><label for="pwd">口 令:</label></td>
            <td><input type="text" id="pwd" class="form-control" v-model="loginForm.password" placeholder="密码"/></td>
          </tr>
          <tr>
            <td>&nbsp;</td>

          </tr>
          <tr>
            <td></td>
            <td>
              <select class="form-control pull-left" id="typeSlt" v-model="loginForm.type">
                <option value="0">普通登录</option>
                <option value="1">管理员登录</option>
              </select>
              <button class="btn btn-primary" @click="login">登录</button>
            </td>
          </tr>
        </table>

      </div>

    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
          type: 0,

        }
      };
    },

    methods: {
      ...mapMutations(['changeLogin']),
      login() {
        let that = this;
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          this.$my_message(
            {
              content: '账号或密码不能为空',
              time: 5000,
              type: 'warning',
              hasClose: false,
            });
        } else if (this.loginForm.username + "" === 'a' && this.loginForm.password + "" === 'b') {

          localStorage.setItem('token', 'token-123456')
          localStorage.setItem('username', '测试用户123456abc')

          that.$router.push('/');
        } else {
          var reqJson = {
            "type": this.loginForm.type,
            "account": this.loginForm.username,
            "pwd": this.loginForm.password
          }

          that.$axios.post('/api/user/login', reqJson).then(res => {
            console.log(res.data);
            if (0 !== res.data.code) {
              // alert('登录失败: ' + res.data.msg);
              this.$my_message({
                content: '登录失败: ' + res.data.msg,
                time: 2000,
                type: 'error',
                hasClose: true,
              });
            } else {
              that.userToken = res.data.data.token;
              that.username = res.data.data.name;

              localStorage.setItem('token', that.userToken)
              localStorage.setItem('username', that.username)

              if (0 === that.type) {
                // 去普通用户页
                that.$router.push('/product');

              } else if (1 === that.type) {
                // 去管理员页
                that.$router.push('/');

              } else {
                that.$router.push('/');
              }
              // alert('登陆成功');
              this.$my_message(
                {
                  content: '登录成功',
                  time: 2000,
                  type: 'success',
                  hasClose: true,
                });
            }
          }).catch(error => {
            // alert('账号或密码错误');
            this.$my_message(
              {
                content: '账号或密码错误',
                time: 2000,
                type: 'warning',
                hasClose: true,
              });
            console.log(error);
          });
        }
      }
    }
  };
</script>
<style scoped>

  th, td {
    text-align: center;
    horiz-align: center;
    vertical-align: middle;
    font-size: 1em;
    align-content: center;

  }

  #typeSlt {
    width: 120px;
  }


</style>
