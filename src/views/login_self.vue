<template>
 <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="right"
      label-width="80px"
    >
    <center position: relative>
      <el-card class="box-card">
          <h4>用户登陆</h4>
          <br/>
          <el-form-item prop="username" label="账号：">
          <el-input
            style="width:85%"
            ref="username"
            v-model="loginForm.username"
            placeholder="username"
            type="text"
            tabindex="1"
            auto-complete="on">
          </el-input>
          </el-form-item>

          <el-form-item prop="password" label="密码：">
            <el-input
              type="password"
              show-password
              prop="password"
              style="width:85%"
              ref="password"
              v-model="loginForm.password"
              placeholder="password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
        </el-form-item>
        <div class="rt">
           <el-checkbox v-model="checked" style="color:#a0a0a0;">记住密码</el-checkbox>
           <span   @click="forgetPassword()" style="cursor: pointer;color: #f19149;font-size: 0.85rem;margin-left: 120px;">忘记密码？</span>
           <!-- <span  style="cursor: pointer;color: #409EFF;font-size: 0.85rem;margin-left: 10px;"> -->
             <router-link to="/userRegister1"> 注册</router-link>
            <!-- </span> -->
           
          </div>
        <el-button
        :loading="loading"
        type="primary"
        style="width:87%;center"
        @click="handleLogin('loginForm')"
        >登录</el-button
      >
      </el-card>
    </center>
    </el-form>
  </div>
</template>
<script>
// export default {
//     name:'loginUnit'
// }
import * as api from "@/api/api";

export default {
  name: 'loginUnit',
  data () {
    const validateRno = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      // msg: "首页",
      loginForm: {
        personId: "",
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateRno }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      redirect: undefined,
      msg: '',
      checked: true
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin (formName) {
      const self = this
      // 表单数据进行验证
      self.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          api.login(this.loginForm).then(res => {
          const resp = res.data;
        //  1.保存token，用户信息
          localStorage.setItem("msm-user", JSON.stringify(resp));
          localStorage.setItem("msm-token", resp.token);
            // window.sessionStorage.setItem('token', res.data.token)
            console.log(res)
            if (res.code === 0) {
              this.loginSuccess()
            } 
            // else {
            //   this.msg = res.data.msg
            //   this.$message({
            //     message: this.msg,
            //     type: 'error',
            //     duration: 1500,
            //     onClose: () => {
            //       this.visible = false
            //     }
            //   })
            // }
          })
            .catch(() => {
              this.loading = false
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          setTimeout(() => {
            this.loading = false
          }, 600)
        }
      })
    },
    loginSuccess (res) {
      this.$router.push({ path: '/main' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notify({
          title: '欢迎',
          message: '欢迎回来',
          type: 'success'
        })
      }, 1000)
      this.isLoginError = false
      this.loading = true
    },
    logout () {
      this.isForGet = true
      this.$router.push('/forget_password')
    },
    registered () {
      this.$router.push('/userRegister1')
    },
    forgetPassword () {
      this.$router.push('/forget_password')
    },
    
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container{
  background-color: #2b4b6b;
  height: 100%;
}
canvas {
            z-index: -1;
            position: absolute;
        }
.login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 200px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 15px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 450px;
  /* height: 300px; */
}

.el-button {
  margin-top: 20px;
}
#particles-js{
        width: 100%;
        height: calc(100% - 100px);
         position: absolute;
    }
</style>
