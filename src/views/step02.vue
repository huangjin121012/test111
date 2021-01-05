<template>
  <div class="step2">
    <el-form :inline="true" label-width="100px">
      <div class="a">
        <el-card class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="person.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份证件号码">
            <el-input
              v-model="person.idcard"
              placeholder="身份证件号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="民族">
            <el-input v-model="person.nation" placeholder="民族"></el-input>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-input
              v-model="person.political"
              placeholder="政治面貌"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="person.sex" placeholder="性别"></el-input>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="person.status" placeholder="籍贯"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-date-picker
              placeholder="出生年月"
              style="width:209px"
              v-model="person.birthDay"
              type="month"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="出生地">
            <el-input
              v-model="person.birthPlace"
              placeholder="出生地"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="person.phone" placeholder="联系电话"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="person.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="档案所在机构">
            <el-input
              v-model="person.filePlace"
              placeholder="档案所在机构"
            ></el-input>
          </el-form-item>
          <el-form-item label="外语掌握程度">
            <el-input placeholder="外语掌握程度"></el-input>
          </el-form-item>
          <el-form-item label="奖惩情况">
            <el-input
              type="textarea"
              placeholder="奖惩情况"
              style="width:209px"
            ></el-input>
          </el-form-item>
          <el-form-item label="社会经验">
            <el-input
              type="textarea"
              placeholder="参加何种学术团体，担任何职，有何社会兼职"
              style="width:209px"
            ></el-input>
          </el-form-item>
        </el-card>
      </div>
      <div class="b">
        <div>
          <h4>
            <span>*</span> 学历情况
            <div class="add" @click="educationDialogVisible = true">+新增</div>
          </h4>
          <el-card>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="毕业时间"> </el-table-column>
              <el-table-column prop="name" label="学历项目"> </el-table-column>
              <el-table-column prop="province" label="学历水平">
              </el-table-column>
              <el-table-column prop="city" label="学历性质"> </el-table-column>
              <el-table-column prop="address" label="毕业院校">
              </el-table-column>
              <el-table-column prop="zip" label="所学专业"> </el-table-column>
              <el-table-column prop="zip" label="证书编号"> </el-table-column>
              <el-table-column label="操作">
                <template >
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
      <div class="c">
        <div>
          <h4>
            <span>*</span> 主要工作经历及成绩
            <div class="add" @click="jobsDialogVisible = true">+新增</div>
          </h4>
          <el-card>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="事件"> </el-table-column>
              <el-table-column prop="name" label="工作单位"> </el-table-column>
              <el-table-column prop="province" label="任何职">
              </el-table-column>
              <el-table-column prop="city" label="取得成绩"> </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >编辑
                  </el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
      <div class="d">
        <h4>
          <span>*</span>
          请上传近期免冠2寸照片一张
        </h4>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
      <div class="save">
        保存
      </div>

      <el-dialog
        title="新增学历"
        :visible.sync="educationDialogVisible"
        width="45%"
        :before-close="handleClose">
        <el-form :model="form" :label-position="right" label-width="75px">
          <el-form-item label="毕业时间">
            <el-date-picker
              v-model="study.graduationTime"
              type="date"
              placeholder="毕业时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="项目">
            <el-input v-model="study.project" placeholder="项目"></el-input>
          </el-form-item>
          <el-form-item label="学历水平">
            <el-input v-model="study.level" placeholder="学历水平"></el-input>
          </el-form-item>
          <el-form-item label="毕业院校">
            <el-input v-model="study.school" placeholder="毕业院校"></el-input>
          </el-form-item>
          <el-form-item label="学历性质">
            <el-input v-model="study.quality" placeholder="学历性质"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="study.profession" placeholder="专业"></el-input>
          </el-form-item>
          <el-form-item label="证书编号">
            <el-input
              v-model="study.certificateNumber"
              placeholder="证书编号"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="educationDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="educationDialogVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog
        title="新增工作经历及成绩"
        :visible.sync="jobsDialogVisible"
        width="45%"
        :before-close="handleClose"
      >
        <el-form :model="form" :label-position="right" label-width="75px">
          <el-form-item label="入职时间">
            <el-date-picker type="date" placeholder="入职时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="事件">
            <el-input v-model="experience.event" placeholder="事件"></el-input>
          </el-form-item>
          <el-form-item label="工作单位">
            <el-input
              v-model="experience.unit"
              placeholder="工作单位"
            ></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input
              v-model="experience.position"
              placeholder="职位"
            ></el-input>
          </el-form-item>
          <el-form-item label="成就">
            <el-input
              v-model="experience.achievement"
              placeholder="成就"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="jobsDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="jobsDialogVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "step02",
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      educationDialogVisible: false,
      jobsDialogVisible: false,
      person: {
        name: "",
        idcard: "",
        status: "",
        phone: "",
        email: "",
        nation: "",
        political: "",
        sex: "",
        birthDay: "",
        birthPlace: "",
        file_place: ""
      },
      experience: {
        event: "",
        unit: "",
        position: "",
        achievement: "",
        deadline: ""
      },
      study: {
        graduationTime: "",
        project: "",
        level: "",
        quality: "",
        school: "",
        profession: "",
        certificateNumber: ""
      }
    };
  },

  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    ban_scoall: function() {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    },
    start_scoall: function() {
      let body = document.querySelector("body");
      body.style.overflow = "auto";
    },
    cancel_add: function() {
      this.$refs.mask.style.display = "none";
      this.$refs.add_ed.style.display = "none";
      this.$refs.add_work_p.style.display = "none";
      this.start_scoall();
    },
    add_edu: function() {
      this.ban_scoall();
      this.$refs.mask.style.display = "block";
      this.$refs.add_ed.style.display = "block";
    },
    add_work_p: function() {
      this.ban_scoall();
      this.$refs.mask.style.display = "block";
      this.$refs.add_work_p.style.display = "block";
    }
  }
};
</script>
<style scoped>
textarea {
  resize: vertical;
  width: 91%;
  padding: 10px;
}
.a {
  /* display: flex; */
  width: 100%;
}
.step2 {
  height: 100%;
}
.step2 .save {
  float: right;
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 80px;
  border: 1px solid;
  background-color: #7dc77d;
  color: #fff;
  border-radius: 4px;
  margin: 40px;
  font-weight: 800;
}

form {
  /* display: flex; */
  width: 100%;
}
.d,
.a,
.b,
.c {
  margin-top: 50px !important;
  border: 0;
  box-shadow: 2px 2px 10px #ccc;
}
.d span,
.c span,
.b span,
.a span {
  color: red;
}
.step2 .right,
.step2 .left {
  flex: 1;
}
.a table {
  width: 100%;
}

.a table tr {
  width: 100%;
}

.a table td {
  padding: 5px;
  width: 50%;
  /* border: 1px solid #ccc; */
}
.a table input {
  width: 90%;
  height: 20px;
  padding-left: 15px;
  margin: 8px 0 15px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #111;
  outline-color: #d1dbe5;
}
.d,
.c,
.b {
  /* padding: 10px; */
  margin: 10px;
  /* width: 100%; */
  background-color: rgb(223, 223, 240);
  /* border: 1px solid rgb(205, 205, 236) ; */
  border-radius: 10px;
  overflow: hidden;
}
.d h4,
.c h4,
.b h4 {
  /* padding: 20px; */
  position: relative;
  display: block;
  position: relative;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  background-color: #babaec;
}
.d h4 .add,
.c h4 .add,
.b h4 .add {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  height: 30px;
  width: 60px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  background-color: #7dc77d;
  border-radius: 5px;
  color: #fff;
}
.c table,
.b table {
  border-collapse: collapse;
  width: 95%;
  margin: 10px auto;
  text-align: center;
}
.c table td,
.c table,
.b table td,
.b table {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
}
.c table thead th,
.b table thead th {
  background-color: #cce8eb;
  width: 100px;
}
.c table tr:nth-child(odd),
.b table tr:nth-child(odd) {
  background: #d1dbe5;
}
.c table tr:nth-child(even),
.b table tr:nth-child(even) {
  background: #f5fafa;
}
.step2 .mask {
  display: none;
  position: fixed;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.step2 .add_work_p,
.step2 .add_edu {
  /* display: block; */
  /* position: absolute; */
  /* top: 50%; */
  margin-top: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  /* height: 100px; */
  /* height: auto; */
  width: 570px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  overflow: auto;
  position: relative;
  height: 90vh;
  overflow: auto;
}
.step2 .add_edu {
  display: none;
}
.step2 .add_work_p {
  display: none;
}
.step2 .add_work_p table,
.step2 .add_edu table {
  width: 100%;
}
.step2 .add_work_p table textarea,
.step2 .add_work_p table input,
.step2 .add_edu table input {
  width: 95%;
  padding: 7px 0px 7px 10px;
  border: 2px solid rgba(187, 187, 187, 0.5);
  outline-color: rgba(187, 187, 187, 1);
  border-radius: 5px;
}

.step2 .add_work_p table span,
.step2 .add_edu table span {
  color: red;
}
.step2 .add_work_p table tr td,
.step2 .add_edu table tr td {
  padding: 10px 0 10px 10px;
  font-size: 14px;
  font-weight: 700;
}
.step2 .add_work_p .confirme,
.step2 .add_work_p .cancel,
.step2 .add_edu .confirme,
.step2 .add_edu .cancel {
  float: right;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  width: 70px;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 5px;
}
.step2 .add_work_p .confirme:hover,
.step2 .add_edu .confirme:hover {
  background-color: rgba(26, 86, 168, 0.8);
}
.step2 .add_work_p .cancel:hover .step2 .add_edu .cancel:hover {
  border: 1px solid #1a56a8;
  color: #1a56a8;
}
.step2 .add_work_p .confirme .step2 .add_edu .confirme {
  background-color: #1a56a8;

  color: #fff;
}
/* .demo-form-inline{
    margin-top: 1%;
} */
</style>
