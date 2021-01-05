<template>
  <div class="ag_step06 ">
    <div class="education">
      <h4>
        业绩成果

        <div class="add" @click="add_stu">新增</div>
      </h4>

      <el-table :data="formdata.ag_06.list" style="width: 100%">
        <el-table-column prop="startTime" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="endTime" label="截止时间"> </el-table-column>
        <el-table-column prop="level" label="项目级别"> </el-table-column>
        <el-table-column prop="name" label="业绩名称"> </el-table-column>
        <el-table-column prop="dataUrl" label="项目材料扫描件"> 
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px" :src="scope.row.dataUrl"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="appointmentUrl" label="个人项目任职证明扫描件"> 
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px" :src="scope.row.appointmentUrl"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="awardUrl" label="项目获奖扫描件"> 
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px" :src="scope.row.awardUrl"></el-image>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleDelete(scope.row.id)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mask" ref="mask" @click="cancel_add"></div>

    <el-dialog title="新增业绩成果" :visible.sync="visible" width="45%">
      <el-form :model="form" label-position="right" label-width="75px">
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="achievement.startTime"
            type="date"
            placeholder="开始时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="截止时间">
          <el-date-picker
            v-model="achievement.endTime"
            type="date"
            placeholder="截止时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="项目级别">
          <el-input
            v-model="achievement.level"
            placeholder="项目级别"
          ></el-input>
        </el-form-item>
        <el-form-item label="业绩名称">
          <el-input
            v-model="achievement.name"
            placeholder="业绩名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="业绩内容">
          <el-input v-model="achievement.content" type="textarea" placeholder="业绩内容"></el-input>
        </el-form-item>
        <el-form-item label="作用">
          <el-input v-model="achievement.effect" type="textarea" placeholder="作用"></el-input>
        </el-form-item>
        <el-form-item label="项目材料扫描件">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8486/system/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="个人项目任职证明扫描件">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8486/system/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess1"
          >
            <img v-if="imageUrl1" :src="imageUrl1" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目获奖扫描件">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8486/system/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess2"
          >
            <img v-if="imageUrl2" :src="imageUrl2" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import * as api from "../api/achievement";
import { Message } from "element-ui";
export default {
  name: "ag_step06",
  props: {
    formdata: Object
  },
  data() {
      return {
          form: {},
          achievement: {
              name: '',
              startTime: '',
              endTime: '',
              level: '',
              content: '',
              situation: '',
              effect: '',
              dataUrl: '',
              appointmentUrl: '',
              awardUrl: ''
          },
          imageUrl: '',
          imageUrl1: '',
          imageUrl2: '',
          visible: false
      }
  },
  methods: {
    ban_scoall: function() {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    },
    start_scoall: function() {
      let body = document.querySelector("body");
      body.style.overflow = "auto";
    },
    cancel_add: function() {
      // alert(1);
      this.$refs.mask.style.display = "none";
      this.$refs.add_stu.style.display = "none";

      this.start_scoall();
    },
    add_stu: function() {
      this.visible = true;
    },
    handleAvatarSuccess(res) {
      if (res.code == 0) {
        this.imageUrl = "http://localhost:8486/show/" + res.data.path;
        this.achievement.dataUrl = "http://localhost:8486/show/" + res.data.path;
      }
    },
    handleAvatarSuccess1(res) {
      if (res.code == 0) {
        this.imageUrl1 = "http://localhost:8486/show/" + res.data.path;
        this.achievement.appointmentUrl = "http://localhost:8486/show/" + res.data.path;
      }
    },
    handleAvatarSuccess2(res) {
      if (res.code == 0) {
        this.imageUrl2 = "http://localhost:8486/show/" + res.data.path;
        this.achievement.awardUrl = "http://localhost:8486/show/" + res.data.path;
      }
    },
    async handleSubmit() {
      const res = await api.add(this.evaluation_id, this.achievement);

      if (res.code == 0) {
        Message({
          message: "添加成功",
          type: "success",
          duration: 2 * 1000
        });
        this.achievement = {
          name: '',
            startTime: '',
              endTime: '',
              level: '',
              content: '',
              situation: '',
              effect: ''
        };
        this.visible = false;
        this.requestData();
      }
    },
    async requestData() {
      const res = await api.list(this.evaluation_id);
      if (res.code == 0) {
        this.formdata.ag_06.list = res.data;
      }
    },
    async handleDelete(id) {
      const res = await api.deleteById(this.evaluation_id, id);
      if (res.code == 0) {
        Message({
          message: "删除成功",
          type: "success",
          duration: 2 * 1000
        });
        this.requestData();
      }
    }
  },
  created() {
    this.evaluation_id = localStorage.getItem("evaluation_id");
    this.requestData();
  }
    
  
};
</script>
<style scoped>
.ag_step06 .add_stu table,
.ag_step06 .add_stu table tr,
.ag_step06 .add_stu table td {
  border: none;
}
.ag_step06 .add_stu table td {
  width: 30%;
}
.ag_step06 table {
  border-collapse: collapse;
  width: 98%;
  margin: 30px auto;
  text-align: center;
}
.ag_step06 table td,
.ag_step06 table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
}
.ag_step06 table th {
  /* background-color: #999; */
  font-size: 14px;
  background-color: #cce8eb;
  width: 100px;
}
/* .ag_step06  table tr td:nth-child(odd){
    background: #fff;
}
.ag_step06  table tr td:nth-child(even){
    background: #F5FAFA;
} */
.ag_step06 {
  padding: 10px;
  /* padding-bottom: 0; */
  /* background-color: pink; */
}
.ag_step06 table .edit,
.ag_step06 table .del {
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
.ag_step06 table .edit {
  background-color: rgb(142, 157, 241);
}
.ag_step06 table .del {
  background-color: rgb(241, 142, 142);
}
.ag_step06 .education {
  /* position: relative; */
  background-color: #fff;
  padding-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px #ccc;
}
.ag_step06 .education h4 {
  padding: 0 20px;
  display: block;
  height: 40px;
  line-height: 40px;
  background-color: #a6ccf3;
  border-bottom: 1px solid #ccc;
  color: #555;
}
.ag_step06 .education h4 div {
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
.ag_step06 .education h4 .get {
  background-color: #d9524e;
}
.ag_step06 .education h4 .add {
  background-color: rgb(136, 147, 241);
}
.ag_step06 .save {
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
.ag_step06 .mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
.ag_step06 .add_stu {
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
.ag_step06 .add_stu textarea {
  height: 70px;
  padding: 10px;
  width: 90.5%;
}
.ag_step06 .add_stu th {
  background-color: #fff;
  border: none;
  text-align: left;
}
.ag_step06 .add_stu th:nth-child(2) {
  text-align: right;
  font-size: 13px;
  color: #111;
  cursor: pointer;
}

.ag_step06 .add_stu span {
  color: red;
}
.ag_step06 .add_stu td {
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}
.ag_step06 .add_stu input {
  height: 30px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px 0;
}
.ag_step06 .add_stu .npg {
  margin: 10px 5px 0 0;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.ag_step06 .add_stu .confirme,
.ag_step06 .add_stu .cancel {
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
.ag_step06 .add_stu .cancel {
  background: #fff;
}
.ag_step06 .add_stu .confirme {
  background: rgb(250, 142, 142);
}
</style>
