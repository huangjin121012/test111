<template>
  <div>
    <div class="form1">
      <form action="">
        <div class="company">
          <div></div>
        </div>
        <div class="table">

          <el-form :inline="true" label-width="100px">
            <el-card class="demo-form-inline">
              <!--  -->
              <el-form-item label="评审年度">
                <el-input placeholder="评审年度"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="单位级别">
                <el-input
                  v-model="formdata.ag_01.unitLevel"
                  placeholder="单位级别"
                ></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input
                  v-model="formdata.ag_01.name"
                  placeholder="姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="曾用名">
                <el-input
                  v-model="formdata.ag_01.oldname"
                  placeholder="曾用名"
                ></el-input>
              </el-form-item>
              <el-form-item label="身份证件号码">
                <el-input
                  v-model="formdata.ag_01.idcard"
                  placeholder="身份证件号码"
                ></el-input>
              </el-form-item>
              <el-form-item label="民族">
                <el-input
                  v-model="formdata.ag_01.nation"
                  placeholder="民族"
                ></el-input>
              </el-form-item>
              <el-form-item label="参加评审会">
                <el-input
                  v-model="formdata.ag_01.jury"
                  placeholder="参加评审会"
                ></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="籍贯">
                <el-input placeholder="籍贯"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="联系电话">
                <el-input
                  v-model="formdata.ag_01.phone"
                  placeholder="联系电话"
                ></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="评审专业系列">
                <el-input placeholder="评审专业系列"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="拟评专业">
                <el-input placeholder="拟评专业"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="政治面貌">
                <el-input
                  v-model="formdata.ag_01.political"
                  placeholder="政治面貌"
                ></el-input>
              </el-form-item>
              <el-form-item label="个人身份性质">
                <el-input
                  v-model="formdata.ag_01.property"
                  placeholder="个人身份性质"
                ></el-input>
              </el-form-item>
              <el-form-item label="出生年月">
                <el-date-picker
                  v-model="formdata.ag_01.birthDay"
                  placeholder="出生年月"
                  style="width:205px"
                  type="month"
                ></el-date-picker>
              </el-form-item>
              <!--  -->
              <el-form-item label="填表时间">
                <el-date-picker
                  placeholder="填表时间"
                  style="width:205px"
                ></el-date-picker>
              </el-form-item>
              <!--  -->
              <el-form-item label="参加工作时间">
                <el-date-picker
                  v-model="formdata.ag_01.workTime"
                  placeholder="参加工作时间"
                  style="width:205px"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="工作年限">
                <el-input
                  v-model="formdata.ag_01.skillAge"
                  placeholder="工作年限"
                ></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input
                  v-model="formdata.ag_01.email"
                  placeholder="邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="档案所在机构">
                <el-input
                  v-model="formdata.ag_01.filePlace"
                  placeholder="档案所在机构"
                ></el-input>
              </el-form-item>
              <el-form-item label="行政职务">
                <el-input
                  v-model="formdata.ag_01.position"
                  placeholder="行政职务"
                ></el-input>
              </el-form-item>
              <el-form-item label="职务任命时间">
                <el-date-picker
                  v-model="formdata.ag_01.posTime"
                  placeholder="行政职务任命时间"
                  style="width:205px"
                ></el-date-picker>
              </el-form-item>
              <!--  -->
              <el-form-item label="联系地址">
                <el-input placeholder="联系地址"></el-input>
              </el-form-item>
              <!--  -->
            </el-card>
          </el-form>
        </div>
        <div class="npg">
          <ul>
            <li style="margin-left: 100px;">
              <h4>
                <span>*</span>
                身份证正面图片（限1张）
                <el-upload
                  style="margin-left: 40px;margin-top: 12px;"
                  class="avatar-uploader"
                  action="http://localhost:8486/system/upload"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </h4>
            </li>
            <li>
              <h4>
                <span>*</span>
                身份证反面图片（限1张）
                <el-upload
                  style="margin-left: 40px;margin-top: 12px;"
                  class="avatar-uploader"
                  action="http://localhost:8486/system/upload"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess1"
                >
                  <img v-if="imageUrl1" :src="imageUrl1" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </h4>
            </li>
            <li>
              <h4>
                <span>*</span>
                手持身份证照片（限1张）
                <el-upload
                  style="margin-left: 40px;margin-top: 12px;"
                  class="avatar-uploader"
                  action="http://localhost:8486/system/upload"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess1"
                >
                  <img v-if="imageUrl2" :src="imageUrl1" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </h4>
            </li>
          </ul>
        </div>
        <div @click="test" class="btn">保存</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ag_step01",
  props: {
    formdata: Object
  },
  data() {
    return {
          imageUrl: '',
          imageUrl1: '',
          imageUrl2: ''
    };
  },

  created() {
    // console.log(this.formdata);
  },
  methods: {
    test() {
      this.$emit("printf", "sada");
    },
     handleAvatarSuccess(res) {
      if (res.code == 0) {
        this.imageUrl = "http://localhost:8486/show/" + res.data.path;
        this.formdata.ag_01.frontUrl = "http://localhost:8486/show/" + res.data.path;
      }
    },
    handleAvatarSuccess1(res) {
      if (res.code == 0) {
        this.imageUrl1 = "http://localhost:8486/show/" + res.data.path;
        this.formdata.ag_01.reverseUrl = "http://localhost:8486/show/" + res.data.path;
      }
    },
    handleAvatarSuccess2(res) {
      if (res.code == 0) {
        this.imageUrl2 = "http://localhost:8486/show/" + res.data.path;
        this.formdata.ag_01.image = "http://localhost:8486/show/" + res.data.path;
      }
    },
  }
};
</script>
<style scoped>
.form1 {
  padding: 10px;
  width: 100%;
  /* background-color: pink; */
}
.form1 .table table,
.form1 .table table .company {
  width: 100%;
  font-size: 14px;

  font-weight: 800;
}

.form1 input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form1 .company input {
  width: 80%;
  margin: 20px 0 15px 15px;
}
.form1 .company span {
  color: red;
}
.form1 form .table {
  /* background-color: #ccc; */
  margin: 20px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 10px #ccc;
  border-radius: 10px;
}
.form1 .table table {
  width: 100%;
  font-size: 14px;
  border: 0;
  
}
.form1 .table table .cols input {
  width: 85%;
}
.form1 .table table tr td {
  padding: 10px 0;
  /* background: #000; */
}
.form1 .table table input {
  margin-left: 5px;
  width: 70%;
}
.form1 .table table span {
  color: red;
}
.form1 .npg {
  width: 100%;
}
.form1 .npg ul {
  display: flex;
  flex-direction: row;
}
.form1 .npg ul li {
  list-style: none;
  margin: 40px 20px;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  /* border: 1px solid #a6ccf3; */
  /* border-top: none; */
  box-shadow: 2px 2px 10px #ccc;
}
.form1 .npg ul li h4 {
  padding: 0 20px;
  position: relative;
  display: block;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #a6ccf3;
  border-bottom: 1px solid #ccc;
  color: #555;
}
.form1 .npg ul li .pg {
  margin-top: 30px;
  height: 150px;
  width: 150px;
  border: 1px solid;
  border-radius: 10px;
}
.form1 .npg ul li input {
  display: none;
}
.form1 .btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  font-weight: 800;
  background-color: rgb(76, 77, 179);
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
