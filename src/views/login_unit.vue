<template>
 <div class="login-container"  >

    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="right"
    >
    <center position: relative>
      <el-card class="box-card">
          <h4>单位用户登陆</h4>
          <br/>

          <el-form-item prop="unit" label="">
            单位：
            <el-input
              style="width:85%"
              ref="unitId"
              v-model="loginForm.unitId"
              placeholder="请输入单位名称"
              type="text"
              tabindex="1"
              auto-complete="on">
            </el-input>
          </el-form-item>

          <el-form-item prop="username" label="">
            账号：
            <el-input
              style="width:85%"
              ref="name"
              v-model="loginForm.username"
              placeholder="请输入个人账号"
              type="text"
              tabindex="1"
              auto-complete="on">
            </el-input>
          </el-form-item>

          <el-form-item prop="password" label="">
            密码：
            <el-input
              type="password"
              show-password
              prop="password"
              style="width:85%"
              ref="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
          <div>
          <el-button
            :loading="loading"
            type="primary"
            style="width:40%;margin-bottom:30px;"
            @click="handleLogin">登录
          </el-button>
          <el-button
            :loading="loading"
            type="danger"
            style="width:40%;margin-bottom:30px;">
            <router-link to="/Register"> 注册</router-link>
          </el-button>
          </div>
      </el-card>
      <br/>
      <!-- <div class="tips">
        <span style="margin-right:20px;">姓名: admin</span>
        <span> 密码: 123456</span>
      </div> -->
    </center>
    </el-form>
  </div>
</template>

<script>
import * as api from "@/api/api";
export default {
  name: 'login',
  data () {
    const validateunit = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入单位名称'))
      } else {
        callback()
      }
    }
    const validatename = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户账号'))
      } else {
        callback()
      }
    }
    const validatepwd = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        unitId: "1",
        username: '',
        password: ''
      },
      loginRules: {
        unitId: [
          { required: true, trigger: 'blur', validator: validateunit }
        ],
        username: [
          { required: true, trigger: 'blur', validator: validatename }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatepwd }
        ]
      },
      loading: false,
      redirect: undefined,
      msg: ''
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
    handleLogin () {
      const self = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          api.loginUnit(this.loginForm).then(res => {
              const resp = res.data;
        //  1.保存token，用户信息
              localStorage.setItem("msm-user", JSON.stringify(resp));
              localStorage.setItem("msm-token", resp.token);
              console.log(res.data)
              if (res.code === 0) {
                this.msg = res.data.msg
                this.$router.push('/main')
                console.log(this.msg)
                this.loading = false
              }
              else {
                this.msg = res.data.msg
                this.$message({
                  message: this.msg,
                  type: 'error',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                  }
                })
                console.log(this.msg)
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container{
  background: url('~../assets/bg.jpg') center center no-repeat;
  width: 100%;
  height: 100%;
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
  margin-bottom: 18px;
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
}
</style>
