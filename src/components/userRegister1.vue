<template>
  <div id="bdy" class="bdy">
    <el-card class="box-card">
      <h3 style="text-align: center;margin-bottom: 30px;">用户注册</h3>

      <el-row :gutter="20">
        <el-col :span="active===2?24:16" :offset="active===2?0:4">
          <el-form
            ref="loginForm"
            :model="basic_info"
            label-width="140px"
            :rules="basic_infoRules"
            class="login-form">

            <center position: relative>

              <br/>

              <el-form-item prop="eMail" label="E-Mail：">
                <el-input
                  style="width:85%"
                  ref="eMail"
                  v-model="basic_info.eMail"
                  placeholder="请输入邮箱"
                  type="text"
                  tabindex="1"
                  auto-complete="on"/>
              </el-form-item>

              <el-form-item label="证件类型：" prop="certificateType">
                <el-select v-model="basic_info.certificateType" style="width:85%">
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                  <el-option label="港澳居民来往内地通行证" value="港澳居民来往内地通行证"></el-option>
                  <el-option label="台湾居民来往内地通行证" value=" 台湾居民来往内地通行证"></el-option>
                  <el-option label="外国人永久居留身份证" value="外国人永久居留身份证"></el-option>
                  <el-option label="护照" value="护照"></el-option>
                  <el-option label="其他类型" value="其他类型"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item prop="certificateNumber" label="证件号码：">
                <el-input
                  style="width:85%"
                  ref="certificateNumber"
                  v-model="basic_info.certificateNumber"
                  placeholder="请输入证件号码"
                  type="text"
                  tabindex="1"
                  auto-complete="on"/>
              </el-form-item>

              <el-form-item prop="sex" label="性别：">
                <el-select v-model="basic_info.sex" style="width:85%">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item prop="username" label="姓名：">
                <el-input
                  style="width:85%"
                  ref="username"
                  v-model="basic_info.username"
                  placeholder="请输入姓名"
                  type="text"
                  tabindex="1"
                  auto-complete="on"/>
              </el-form-item>

              <el-form-item prop="password" label="密码：">
                <el-input
                  type="password"
                  show-password
                  prop="password"
                  style="width:85%"
                  ref="password"
                  v-model="basic_info.password"
                  placeholder="请输入密码"
                  name="password"
                  tabindex="2"
                  auto-complete="on"/>
              </el-form-item>

              <el-form-item label="确认密码：" prop="confirm_password">
                <el-input
                  show-password
                  style="width:85%"
                  placeholder="请确认密码"
                  type="password"
                  v-model="basic_info.confirm_password">
                </el-input>
              </el-form-item>

              <el-form-item label="电话号码：" prop="phoneNumber">
                <el-input v-model="basic_info.phoneNumber" style="width:85%" placeholder="请输入电话号码"></el-input>
              </el-form-item>

              <el-form-item label="密保问题：" prop="secretQuestion">
                <el-select v-model="basic_info.secretQuestion" style="width:85%">
                  <el-option label="你父亲的姓名？" value="你父亲的姓名？"></el-option>
                  <el-option label="您高中班主任的名字是？" value="您高中班主任的名字是？"></el-option>
                  <el-option label="对您影响最大的人名字是？" value=" 对您影响最大的人名字是？"></el-option>
                  <el-option label="您最熟悉的学校宿舍舍友名字是？" value="您最熟悉的学校宿舍舍友名字是？"></el-option>
                  <el-option label="您母亲的生日是？" value="您母亲的生日是？"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item prop="secretAnswer" label="密保答案：">
                <el-input
                  style="width:85%"
                  ref="secretAnswer"
                  v-model="basic_info.secretAnswer"
                  placeholder="请输入密保答案"
                  type="text"
                  tabindex="1"
                  auto-complete="on"/>
              </el-form-item>
              
              <el-button
                type="primary"
                style="width:87%;center"
                @click="submit">创建用户
              </el-button>
            </center>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
// 表单js代码
// import Qs from 'qs'
import * as api from "@/api/api";
export default {
  name: "userRegister1",
  data() {
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        return callback();
      }
      callback(new Error("请输入正确的手机号"));
    };
    var isEmail = (rule, value, callback) => {
      const reg = /^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (value === "" || value === undefined || value === null) {
        callback();
      } else {
        if (!reg.test(value)) {
          callback(new Error("请输入正确的邮箱地址"));
        } else {
          callback();
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.basic_info.confirm_password !== "") {
          this.$refs.form.validateField("confirm_password");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.basic_info.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      basic_infoRules: {
        eMail: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
          {
            validator: isEmail,
            trigger: "blur",
          },
        ],
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            validator: validatePass,
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "密码长度为6-15个字符",
            trigger: "blur",
          },
        ],
        confirm_password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            validator: validatePass2,
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "密码长度为6-15个字符",
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: "请输入电话号码",
            trigger: "blur",
          },
          {
            validator: checkMobile,
            trigger: "blur",
          },
        ],
        sex: [
          { required: true, trigger: "blur", message: "请选择性别" },
        ],
        certificateType: [
          { required: true, trigger: "blur", message: "请选择证件类型" },
        ],
        certificateNumber: [
          { required: true, trigger: "blur", message: "请输入证件号码" },
          {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: "证件号码格式有误！",
            trigger: "blur",
          },
        ],
        secretQuestion: [
          { required: true, trigger: "blur", message: "请选择密保问题" },
        ],
        secretAnswer: [
          { required: true, trigger: "blur", message: "请输入密保答案" },
        ],
      },
      active: 0,
      status: 0,
      basic_info: {
        eMail: "",
        certificateType: "",
        certificateNumber: "",
        sex: "",
        username: "",
        password: "",
        confirm_password: "",
        secretQuestion: "",
        secretAnswer: "",
        phoneNumber: ""
      },
      loginForm: {
        username: "",
        password: "",
        status: 1
      },
      token: "",
      url: "",
      fileName: "",
      fileList: [],
      myHeaders: { Authentication: "" },
    };
  },
    methods: {
      // async registered () {
      //   this.loginForm.username = this.basic_info.username
      //   this.loginForm.password = this.basic_info.password
      //   const res = await apis.register(this.loginForm)
      //   if (res.code === 200) {
      //     this.open()
      //   } else {
      //     this.$router.push('/userRegister1')
      //   }
      // },
      beforeRemove (file, fileList) {
        this.fileList = []
      },
      open () {
        this.$confirm('您已注册成功，可以返回登录', '小提示', {
          distinguishCancelAndClose: true,
          cancelButtonText: '返回登录'
        })
        this.$router.push('/login')
      },
      submit () {
        const self = this
        // 表单数据进行验证
          this.loginForm.username = this.basic_info.username
          this.loginForm.password = this.basic_info.password
          self.$refs.loginForm.validate(async (valid) => {
          if (valid) {
            // 请求 store 中的方法，向后台提交数据
            const res = await apis.register(this.loginForm)
            // const res = await apis.changePassword(this.changeThePasswordFrom)
            if (res.code === 0) {
              this.msg = res.message
              this.$message({
                message: this.msg,
                type: 'success'
              })
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      onSubmit () {
        if (this.status === 0) {
          this.$router.push('/')
        }
      },
      handleAvatarSuccess (res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw)
      },
    }
};
// 表单js代码
</script>

<style>
.tbody {
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}
.bdy {
  /* background-color: #fafcfd; */
  /* padding: 100px 35px 0; */
  height: 100%;
}
/* 表单 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.box-card {
  width: 45%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 30px;
}
.login-form {
  /* position: relative; */
  width: 100%;
  max-width: 100%;
  /* margin-left: 100px; */
  /* padding: 35px 145px 0; */
  margin: 0 auto;
  overflow: hidden;
}

.submit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
}
</style>
