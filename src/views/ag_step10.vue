<template>
  <div class="ag_step10 ">
    <div class="education">
      <h4>
        国（境）工作或研究材料
        <div class="add" @click="add_stu">新增</div>
      </h4>
      <!-- <table>
                <tr>
                    <th>开始时间</th>
                    <th>截止时间</th>
                    <th>工作单位</th>
                    <th>职务岗位</th>
                    <th>操作</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div class="edit">编辑</div>
                        <div class="del">删除</div>
                    </td>
                </tr>
            </table> -->
      <el-table :data="formdata.ag_10.list" style="width: 100%">
        <el-table-column prop="startTime" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="endTime" label="截止时间"> </el-table-column>
        <el-table-column prop="unit" label="工作单位"> </el-table-column>
        <el-table-column prop="job" label="职务岗位"> </el-table-column>

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
    <!-- <div class="add_stu scroll" ref="add_stu">

            <table>
                <tr>
                    <th>新增国（境）工作或研究材料</th>
                    <th>
                        <div @click="cancel_add">取消</div>
                    </th>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        开始时间
                    </td>
                    <td>
                        <span>*</span>
                        截止时间
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        工作单位
                    </td>
                    <td>
                        职务岗位
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <span>*</span>
                        工作内容
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea name="" id="" cols="30" rows="10" style="resize: vertical"></textarea>
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="2"> 辅助证明材料</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="npg">
                            <img src="" alt="">
                            <input type="file" style="display:none">
                        </div>
                        
                    </td>
                </tr>
               

            </table>
            <div class="confirme">确认</div>
            <div class="cancel" @click="cancel_add">取消</div>
        </div> -->
    <el-dialog
      title="新增国（境）工作或研究材料"
      :visible.sync="visible"
      width="45%"
    >
      <el-form :model="form" label-position="right" label-width="75px">
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="abroad.startTime"
            type="date"
            placeholder="开始时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="截止时间">
          <el-date-picker
            v-model="abroad.endTime"
            type="date"
            placeholder="截止时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="工作单位">
          <el-input v-model="abroad.unit" placeholder="工作单位"></el-input>
        </el-form-item>
        <el-form-item label="职务岗位">
          <el-input v-model="abroad.job" placeholder="职务岗位"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="abroad.content" placeholder="工作内容"></el-input>
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
import * as api from "../api/abroad";
import { Message } from "element-ui";
export default {
  name: "ag_step10",
  props: {
    formdata: Object
  },
  data() {
    return {
      form: {},
      abroad: {
        startTime: "",
        endTime: "",
        unit: "",
        job: "",
        content: ""
      },
      visible: false
    };
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
    async handleSubmit() {
      const res = await api.add(this.evaluation_id, this.abroad);

      if (res.code == 0) {
        Message({
          message: "添加成功",
          type: "success",
          duration: 2 * 1000
        });
        this.abroad = {
        startTime: "",
        endTime: "",
        unit: "",
        job: "",
        content: ""
        };
        this.visible = false;
        this.requestData();
      }
    },
    async requestData() {
      const res = await api.list(this.evaluation_id);
      if (res.code == 0) {
        this.formdata.ag_10.list = res.data;
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
.ag_step10 .add_stu table,
.ag_step10 .add_stu table tr,
.ag_step10 .add_stu table td {
  border: none;
}
.ag_step10 .add_stu table td {
  width: 50%;
}
.ag_step10 table {
  border-collapse: collapse;
  width: 98%;
  margin: 30px auto;
  text-align: center;
}
.ag_step10 table td,
.ag_step10 table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
}
.ag_step10 table th {
  /* background-color: #999; */
  font-size: 14px;
  background-color: #cce8eb;
  width: 100px;
}
/* .ag_step10  table tr td:nth-child(odd){
    background: #fff;
}
.ag_step10  table tr td:nth-child(even){
    background: #F5FAFA;
} */
.ag_step10 {
  padding: 10px;
  /* padding-bottom: 0; */
  /* background-color: pink; */
}
.ag_step10 table .edit,
.ag_step10 table .del {
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
.ag_step10 table .edit {
  background-color: rgb(142, 157, 241);
}
.ag_step10 table .del {
  background-color: rgb(241, 142, 142);
}
.ag_step10 .education {
  /* position: relative; */
  background-color: #fff;
  padding-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px #ccc;
}
.ag_step10 .education h4 {
  padding: 0 20px;
  display: block;
  height: 40px;
  line-height: 40px;
  background-color: #a6ccf3;
  border-bottom: 1px solid #ccc;
  color: #555;
}
.ag_step10 .education h4 div {
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
.ag_step10 .education h4 .get {
  background-color: #d9524e;
}
.ag_step10 .education h4 .add {
  background-color: rgb(136, 147, 241);
}
.ag_step10 .save {
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
.ag_step10 .mask {
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
.ag_step10 .add_stu {
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
.ag_step10 .add_stu th {
  background-color: #fff;
  border: none;
  text-align: left;
}
.ag_step10 .add_stu th:nth-child(2) {
  text-align: right;
  font-size: 13px;
  color: #111;
  cursor: pointer;
}

.ag_step10 .add_stu span {
  color: red;
}
.ag_step10 .add_stu td {
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}
.ag_step10 .add_stu input {
  height: 30px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px 0;
}
.ag_step10 .add_stu .npg {
  margin: 10px 5px 0 0;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.ag_step10 .add_stu .confirme,
.ag_step10 .add_stu .cancel {
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
.ag_step10 .add_stu .cancel {
  background: #fff;
}
.ag_step10 .add_stu .confirme {
  background: rgb(250, 142, 142);
}
</style>
