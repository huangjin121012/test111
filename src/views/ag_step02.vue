<template>
  <div class="ag_stpe02">
    <div class="education">
      <h4>
        学历情况
        <div class="add" @click="add_edu">新增</div>
      </h4>
      <el-table :data="formdata.ag_02.list" style="width: 100%">
        <el-table-column prop="graduationTime" label="毕业时间" width="180">
        </el-table-column>
        <el-table-column prop="project" label="学历项目" width="180">
        </el-table-column>
        <el-table-column prop="quality" label="学历"> </el-table-column>
        <el-table-column prop="level" label="学位"> </el-table-column>
        <el-table-column prop="school" label="毕业学校"> </el-table-column>
        <el-table-column prop="profession" label="专业"> </el-table-column>
        <el-table-column prop="certificateNumber" label="毕业证编号">
        </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="新增学历"
      :visible.sync="educationDialogVisible"
      width="45%"
    >
      <el-form :model="form" label-position="right" label-width="75px">
        <el-form-item label="毕业时间">
          <el-date-picker
            v-model="study.graduationTime"
            type="date"
            placeholder="毕业时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="学术项目">
          <el-input v-model="study.project" placeholder="学术项目"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="study.level" placeholder="学位"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校">
          <el-input v-model="study.school" placeholder="毕业院校"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="study.quality" placeholder="学历"></el-input>
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
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import * as api from "../api/study";
import { Message } from 'element-ui'
export default {
  name: "ag_step02",
  props: {
    formdata: Object,
  },
  data() {
    return {
      form: {},
      evaluation_id: -1,
      study: {
        graduationTime: "",
        project: "",
        level: "",
        quality: "",
        school: "",
        profession: "",
        certificateNumber: "",
      },
      educationDialogVisible: false,
    };
  },
  methods: {
    ban_scoall: function () {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    },
    start_scoall: function () {
      let body = document.querySelector("body");
      body.style.overflow = "auto";
    },
    cancel_add: function () {
      this.$refs.mask.style.display = "none";
      this.$refs.add_stu.style.display = "none";

      this.start_scoall();
    },
    add_edu: function () {
      this.educationDialogVisible = true;
    },
    async handleSubmit() {
      const res = await api.add(this.evaluation_id, this.study);
    
      if (res.code == 0) {
        Message({
          message: "添加成功",
          type: "success",
          duration: 2 * 1000,
        });
        this.study = {
        graduationTime: "",
        project: "",
        level: "",
        quality: "",
        school: "",
        profession: "",
        certificateNumber: "",
      }
      this.educationDialogVisible = false
        this.requestData()
      }
    },
    async requestData() {
      const res = await api.list(this.evaluation_id);
      if (res.code == 0) {
        this.formdata.ag_02.list = res.data;
      }
    },
    async handleDelete(id) {
      const res = await api.deleteById(this.evaluation_id,id);
      if (res.code == 0) {
            Message({
          message: "删除成功",
          type: "success",
          duration: 2 * 1000,
        })
          this.requestData()
      }
    },
  },
  created() {
       this.evaluation_id = localStorage.getItem("evaluation_id")
    this.requestData();
     
  },
};
</script>
<style scoped>
.ag_stpe02 .add_stu table,
.ag_stpe02 .add_stu table tr,
.ag_stpe02 .add_stu table td {
  border: none;
}
.ag_stpe02 table {
  border-collapse: collapse;
  width: 95%;
  margin: 30px auto;
  text-align: center;
}
.ag_stpe02 table td,
.ag_stpe02 table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
}
.ag_stpe02 table th {
  /* background-color: #999; */
  background-color: #cce8eb;
  width: 100px;
}
/* .ag_stpe02 table tr td:nth-child(odd){
    background: #fff;
}
.ag_stpe02 table tr td:nth-child(even){
    background: #F5FAFA;
} */
.ag_stpe02 {
  padding: 10px;
  /* padding-bottom: 0; */
  /* background-color: pink; */
}
.ag_stpe02 table .edit,
.ag_stpe02 table .del {
  height: 25px;
  line-height: 25px;
  width: 50px;
  /* margin-left: 50%; */
  transform: translateX(-50%);
  margin: 10px 0 10px 50%;
  /* border: 1px solid #ccc; */
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
}
.ag_stpe02 table .edit {
  background-color: rgb(142, 157, 241);
}
.ag_stpe02 table .del {
  background-color: rgb(241, 142, 142);
}
.ag_stpe02 .education {
  background-color: #fff;
  padding-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px #ccc;
}
.ag_stpe02 .education h4 {
  padding: 0 20px;
  display: block;
  height: 40px;
  line-height: 40px;
  background-color: #a6ccf3;
  border-bottom: 1px solid #ccc;
  color: #555;
}
.ag_stpe02 .education h4 div {
  float: right;
  margin-right: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  font-weight: 900;
  padding: 0 10px;
  /* border: 1px solid #fff; */
  color: #fff;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.ag_stpe02 .education h4 .get {
  background-color: #d9524e;
}
.ag_stpe02 .education h4 .add {
  background-color: rgb(136, 147, 241);
}
.ag_stpe02 .save {
  margin-top: 50px;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 3px;
  background-color: rgb(136, 147, 241);
  border: 1px solid;
  color: #fff;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}

.ag_stpe02 .mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
.ag_stpe02 .add_stu {
  display: none;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 800px;
  /* height: 100px; */
  background-color: #fff;
  border-radius: 5px;
  z-index: 999;
}
.ag_stpe02 .add_stu th {
  background-color: #fff;
  border: none;
  text-align: left;
}
.ag_stpe02 .add_stu th:nth-child(2) {
  text-align: right;
  font-size: 13px;
  color: #111;
  cursor: pointer;
}

.ag_stpe02 .add_stu span {
  color: red;
}
.ag_stpe02 .add_stu td {
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}
.ag_stpe02 .add_stu input {
  height: 30px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px 0;
}
.ag_stpe02 .add_stu .npg {
  margin: 10px 5px 0 0;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.ag_stpe02 .add_stu .confirme,
.ag_stpe02 .add_stu .cancel {
  float: right;
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 3px;
  color: #111;
  font-weight: 700;
  box-shadow: 0px 4px 10px #ccc;
}
.ag_stpe02 .add_stu .cancel {
  background: #fff;
}
.ag_stpe02 .add_stu .confirme {
  background: rgb(250, 142, 142);
}
</style>