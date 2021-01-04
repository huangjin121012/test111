<template>
  <div id="bdy" class="bdy">
    <el-card class="box-card">
      <h3 style="text-align: center;margin-bottom: 30px;">用户注册</h3>
      <el-steps
        :active="active"
        finish-status="success"
        process-status="finish"
        align-center
        style="margin-bottom: 30px;color: #409EFF;"
      >
        <el-step title="填写账户信息" icon="el-icon-edit"></el-step>
        <el-step title="填写单位信息" icon="el-icon-edit-outline"></el-step>
        <el-step title="上传附件" icon="el-icon-upload"></el-step>
        <el-step title="填写单位工作人员账户信息" icon="el-icon-edit"></el-step>
        <el-step title="提交资料" icon="el-icon-s-promotion"></el-step>
      </el-steps>
      <el-row :gutter="24">
        <el-col :span="active===4?24:16" :offset="active===4?0:4">
          <el-form
            ref="basic_info"
            :model="basic_info"
            label-width="175px"
            :rules="basic_infoRules"
            class="login-form"
          >
            <!-- 基本信息 -->
            <div class="info" v-if="active==0">
              <h6 style="color: red">情报说明:</h6>
              <h6 style="color: red">1、账户默认为单位统一社会信用代码。</h6>
              <h6 style="color: red;margin-bottom: 30px;">2、单位账户信息仅用于编辑单位信息和单位工作人员账户。</h6>
              <el-row :gutter="50">
                <el-col :span="15">
                  <el-form-item label="账户(统一社会信用代码)" prop="account">
                    <el-input v-model="basic_info.account"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="50">
                <el-col :span="15">
                  <el-form-item label="密码" prop="password">
                    <el-input show-password type="password" v-model="basic_info.password"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="50">
                
                <el-col :span="15">
                  <el-form-item label="确认密码" prop="confirm_password">
                    <el-input
                      show-password
                      type="password"
                      v-model="basic_info.confirm_password"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            
            <div class="info" v-if="active==1">
                <el-row :gutter="50">
                <el-col :span="15">
                  <el-form-item label="统一社会信用代码" prop="account">
                    <el-input v-model="basic_info.account"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="30">
                <el-col :span="12">
                  <el-form-item label="企业名称" prop="name">
                    <el-input v-model="basic_info.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="法定代表人" prop="legalPerson">
                    <el-input v-model="basic_info.legalPerson"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="50">
                <el-col :span="12">
                  <el-form-item label="单位级别" prop="level">
                    <el-input v-model.number="basic_info.level"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单位性质" prop="property">
                    <el-input v-model.number="basic_info.property"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="50">
                <el-col :span="12">
                  <el-form-item label="单位行业" prop="industry">
                    <el-input v-model="basic_info.industry"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单位委托人" prop="principal">
                    <el-input v-model="basic_info.principal"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="50">
                <el-col :span="12">
                  <el-form-item label="单位地址" prop="address">
                    <el-input type="textarea" v-model="basic_info.address"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单位所在地" prop="position">
                    <el-input type="textarea" v-model="basic_info.position"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <!-- 附件 -->
            <div class="info" v-if="active==2">
              <el-row :gutter="50">
                <el-col :span="24" >
                  <div style="hight:10px">
                  <el-form-item label="单位营业执照" prop="licenseFile1" >
                    <el-upload
                    :on-success="handleSuccess1"
                    accept="image/jpg, image/png, image/jpeg"
                    class="upload-demo"
                    action="http://localhost:8880/supplier/information/uploadImage"
                    :show-file-list="true"
                    name="image"
                    :headers='myHeaders'
                    :on-preview="handlePreview"
                    :before-upload="beforeUpload1"
                    :before-remove="beforeRemove"
                    multiple
                    list-type="picture"
                    :limit="1"
                  >
                    <el-button type="primary" size="medium">
                      上传
                      <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                  </el-upload>
                  </el-form-item>
                  </div>
                </el-col>
                
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="10">
                <el-col :span="8">
                  <el-form-item label="手持身份证和执照" prop="organizationFile1">
                    <el-upload
                  :on-success="handleSuccess3"
                    accept="image/jpg, image/png, image/jpeg"
                    class="upload-demo"
                    action="http://localhost:8880/supplier/information/uploadImage"
                    :show-file-list="true"
                    name="image"
                    :headers='myHeaders'
                    :on-preview="handlePreview"
                    :before-upload="beforeUpload3"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    list-type="picture"
                  >
                    <el-button type="primary" size="medium">
                      上传
                      <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                  </el-upload>
                  </el-form-item>
                </el-col>
                
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="10">
                <el-col :span="8">
                  <el-form-item label="单位签章" prop="openFile1">
                    <el-upload
                  :on-success="handleSuccess4"
                    accept="image/jpg, image/png, image/jpeg"
                    class="upload-demo"
                    action="http://localhost:8880/supplier/information/uploadImage"
                    :show-file-list="true"
                    name="image"
                    :headers='myHeaders'
                    :on-preview="handlePreview"
                    :before-upload="beforeUpload4"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    list-type="picture"
                  >
                    <el-button type="primary" size="medium">
                      上传
                      <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                  </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="info" v-if="active==3">
              <el-row :gutter="50">
                <el-col :span="15">
                  <el-form-item label="单位工作人员账户" prop="userId">
                    <el-input v-model="basic_info.userId"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="50">
                <!-- <el-col :span="12">
                  <el-form-item label="单位工作人员联系电话" prop="companyName">
                    <el-input v-model="form.companyName"></el-input>
                  </el-form-item>
                </el-col> -->
                <el-col :span="15">
                  <el-form-item label="单位工作人员邮箱" prop="email">
                    <el-input v-model="basic_info.email"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="info" v-if="active==4">
              <div class="submit" v-if="status === 0">
                <div style="margin-bottom: 20px;">
                  <i style="font-size: 100px;color:green;" class="el-icon-success"></i>
                </div>
                <div>资料已提交，请耐心等待管理员审核，审核时间大概1-2个小时</div>
              </div>
              <div class="submit" v-if="status === 1">
                <div style="margin-bottom: 20px;">
                  <i style="font-size: 100px;color:red;" class="el-icon-error"></i>
                </div>
                <div>资料提交失败，请检查格式</div>
              </div>
              <el-form-item>
                <el-button type="primary" style="margin-left: 225px;" @click="onSubmit">返回</el-button>
              </el-form-item>
            </div>
            <el-form-item>
              <el-button style="margin-top: 6px;" type="primary" @click="next" v-if="active===0">下一步</el-button>
              <el-button style="margin-top: 6px;" @click="pre" v-if="active>0&&active<4">上一步</el-button>
              <el-button style="margin-top: 6px;" type="primary" @click="next" v-if="active>0&&active<3">下一步</el-button>
              <el-button
                style="margin-top: 6px;"
                type="primary"
                @click="submit"
                v-if="active===3"
              >提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
// 表单js代码
// import Qs from 'qs'
export default {
  name:'register',
  data () {
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMobile.test(value)) {
        return callback()
      }
      callback(new Error('请输入正确的手机号'))
    }
    var isEmail = (rule, value, callback) => {
      const reg = /^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
      if (value === '' || value === undefined || value === null) {
        callback()
      } else {
        if (!reg.test(value)) {
          callback(new Error('请输入正确的邮箱地址'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.basic_info.confirm_password !== '') {
          this.$refs.form.validateField('confirm_password')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.basic_info.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      basic_infoRules: {
        account: [
          { required: true, trigger: 'blur', message: '请输入统一社会信用代码' }
        ],
        userId: [
          { required: true, trigger: 'blur', message: '请输入单位工作人员账户' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            validator: validatePass,
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '密码长度为6-15个字符',
            trigger: 'blur'
          }
        ],
        confirm_password: [
          {
            required: true,
            message: '请重新输入密码',
            trigger: 'blur'
          },
          {
            validator: validatePass2,
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '密码长度为6-15个字符',
            trigger: 'blur'
          }
        ],
        name: [
          { required: true, trigger: 'blur', message: '请输入企业名称' }
        ],
        legalPerson: [
          { required: true, trigger: 'blur', message: '请输入法定代表人' }
        ],
        level: [
          { required: true, trigger: 'blur', message: '请输入单位级别' }
        ],
        property: [
          { required: true, trigger: 'blur', message: '请输入单位性质' }
        ],
        industry: [
          { required: true, trigger: 'blur', message: '请输入单位行业' }
        ],
        principal: [
          { required: true, trigger: 'blur', message: '请输入单位行业' }
        ],
        address: [
          { required: true, trigger: 'blur', message: '请输入单位行业' }
        ],
        position:[
          { required: true, trigger: 'blur', message: '请输入单位行业' }
        ],
        secretQuestion: [
          { required: true, trigger: 'blur', message: '请选择密保问题' }
        ],
        secretAnswer: [
          { required: true, trigger: 'blur', message: '请输入密保答案' }
        ]
      },
      formRules: {
        companyName: [
          {
            required: true,
            message: '请输入企业名称',
            trigger: 'blur'
          }
        ],
        companyAbbreviation: [
          {
            required: true,
            message: '请输入法定代表人',
            trigger: 'blur'
          }
        ],
        registeredCaptical: [
          {
            required: true,
            message: '请输入单位级别',
            trigger: 'blur'
          }
        ],
        postalCode: [
          {
            required: true,
            message: '请输入单位性质',
            trigger: 'blur'
          }
        ],
        contacePerson: [
          {
            required: true,
            message: '请输入单位行业',
            trigger: 'blur'
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: '请输入单位委托人',
            trigger: 'blur'
          }
        ],
        detailedAddress: [
          {
            required: true,
            message: '请输入详细地址',
            trigger: 'blur'
          }
        ],

        businessLicense: [
          {
            required: true,
            message: '请输入营业执照号',
            trigger: 'blur'
          }
        ],
        licenseFile1: [
          {
            required: true,
            message: '请上传证明文件',
            trigger: 'blur'
          }
        ],
        // hidcard: [
        //   { required: true, message: '请填写证件号码', trigger: 'blur' },
        //   { pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/, message: '证件号码格式有误！', trigger: 'blur' }],
        licenseValid: [
          {
            required: true,
            message: '请输入有效期',
            trigger: 'blur'
          }
        ],
        taxRegistration: [
          {
            required: true,
            message: '请输入税务登记号',
            trigger: 'blur'
          }
        ],
        taxFile: [
          {
            required: true,
            message: '请上传证明文件',
            trigger: 'blur'
          }
        ],
        organizationCode: [
          {
            required: true,
            message: '请输入组织机构代码证号',
            trigger: 'blur'
          }
        ],
        organizationFile1: [
          {
            required: true,
            message: '请上传证明文件',
            trigger: 'blur'
          }
        ],
        organizationValid: [
          {
            required: true,
            message: '请输入有效期',
            trigger: 'blur'
          }
        ],
        bankAccount: [
          {
            required: true,
            message: '请输入开户银行',
            trigger: 'blur'
          }
        ],
        openAccount: [
          {
            required: true,
            message: '请输入开户银行卡账号',
            trigger: 'blur'
          }
        ],
        openFile1: [
          {
            required: true,
            message: '请上传证明文件',
            trigger: 'blur'
          }
        ],
        legalCode: [
          {
            required: true,
            message: '请输入法人代表身份证',
            trigger: 'blur'
          },
          {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: '证件号码格式有误！',
            trigger: 'blur'
          }
        ],
        legalFile1: [
          {
            required: true,
            message: '请上传证明文件',
            trigger: 'blur'
          }
        ],
        legalValid: [
          {
            required: true,
            message: '请输入有效期',
            trigger: 'blur'
          }
        ]
      },
      active: 0,
      status: 0,
      form: {

        companyName: '', // 企业名称
        companyAbbreviation: '', // 企业简称
        registeredCaptical: '', // 注册资金
        postalCode: '', // 邮政编码
        contacePerson: '', // 联系人
        phoneNumber: '', // 电话号码
        fax: '', // 传真
        email: '', // 电子邮件
        detailedAddress: '', // 详细地址
        resourceSituation: '', // 可控煤炭资源情况
        transportCapacity: '', // 运输保障能力

        businessLicense: '', // 营业执照
        licenseFile: '', // 营业执照文件
        licenseFile1: '', // 营业执照文件
        licenseValid: '', // 营业执照有效期
        taxRegistration: '', // 税务登记号
        taxFile: '', // 税务登记文件
        taxFile1: '', // 税务登记文件
        organizationCode: '', // 组织机构代码证号
        organizationFile: '', // 组织机构代码文件
        organizationFile1: '', // 组织机构代码文件
        organizationValid: '', // 组织机构代码有效期
        bankAccount: '', // 开户银行
        openAccount: '', // 开户银行账号
        openFile: '', // 开户银行账号文件
        openFile1: '', // 开户银行账号文件
        legalCode: '', // 法人代表身份证
        legalFile: '', // 法人代表身份证文件
        legalFile1: '', // 法人代表身份证文件
        legalValid: '' // 法人代表身份证有效期
      },
      basic_info: {
        name: '',
        email: '',
        account: '',
        userId: '',
        password: '',
        confirm_password: '',
        legalPerson: '',
        level: '',
        property: '',
        industry: '',
        principal: '',
        address: '',
        position: '',
        secretQuestion: '',
        secretAnswer: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      token: '',
      url: '',
      fileName: '',
      fileList: [],
      myHeaders: { Authentication: '' }
    }
  },
  methods: {
    handleSuccess1 (res, file, fileList) {
      this.form.licenseFile = res.data
    },
    handleSuccess2 (res, file, fileList) { this.form.taxFile = res.data },
    handleSuccess3 (res, file, fileList) { this.form.organizationFile = res.data },
    handleSuccess4 (res, file, fileList) { this.form.openFile = res.data },
    handleSuccess5 (res, file, fileList) { this.form.legalFile = res.data },
    async registered () {
      this.loginForm.username = this.basic_info.username
      this.loginForm.password = this.basic_info.password
      const res = await apis.register(this.basic_info)
      console.log(res)
      if (res.code === 0) {
        this.open()
      } else {
        this.$router.push('/login')
      }
    },
    beforeRemove (file, fileList) {
      this.fileList = []
      // return this.$confirm(`确定移除 ${this.fileName}？`)
    },
    beforeUpload1 (file) {
      this.fileList = file
      this.fileName = file.name
      console.log(this.fileName)
      this.form.licenseFile1 = this.fileName
    },
    beforeUpload2 (file) {
      this.fileList = file
      this.fileName = file.name
      console.log(this.fileName)
      this.form.taxFile1 = this.fileName
    },
    beforeUpload3 (file) {
      this.fileList = file
      this.fileName = file.name
      console.log(this.fileName)
      this.form.organizationFile1 = this.fileName
    },
    beforeUpload4 (file) {
      this.fileList = file
      this.fileName = file.name
      console.log(this.fileName)
      this.form.openFile1 = this.fileName
    },
    beforeUpload5 (file) {
      this.fileList = file
      this.fileName = file.name
      console.log(this.fileName)
      this.form.legalFile1 = this.fileName
    },
    handlePreview (file) {
      console.log(file)
    },
    open () {
      this.$confirm('已注册成功，您可以返回登录或者完善信息', '小提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '完善信息',
        cancelButtonText: '返回登录'
      })
        .then(() => {
          apis.login(this.loginForm).then(res => {
            window.sessionStorage.setItem('token', res.data.token)
            this.token = res.data.token
            this.myHeaders.Authentication = res.data.token
          })
          this.next()
        })
        .catch(action => {
          this.$router.push('/login')
        })
    },
    submit () {
      const self = this
      // 表单数据进行验证
      self.$refs.form.validate(async (valid) => {
        if (valid) {
          // 请求 store 中的方法，向后台提交数据
          const res = await apis.register(this.form)
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
      this.next()
    },
    onSubmit () {
      if (this.status === 0) {
        this.$router.push('/home')
      }
    },
    handleAvatarSuccess (res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    next () {
      if (this.active++ > 2) this.active = 0
    },
    pre () {
      if (this.active-- < 2) this.active = 0
    }
  }
}
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
.info1 {
    width: 800px;
    margin: 0 auto;
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
  width: 80%;
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
  /* margin: 0 auto; */
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
