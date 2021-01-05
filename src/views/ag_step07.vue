<template>
    <div class="ag_step07 ">
        <div class="education">
            <h4>
               业绩奖项
              
               <div class="add" @click="add_edu">新增</div> 
            </h4>
        <el-table :data="formdata.ag_07.list" style="width: 100%">
        <el-table-column prop="name" label="项目名称" width="180">
        </el-table-column>
        <el-table-column prop="level" label="奖励等级" width="180">
            <template slot-scope="scope">
           {{ scope.row.level | award }}
              </template>
        </el-table-column>
        <el-table-column prop="agrantTime" label="授予时间"> </el-table-column>
        <el-table-column prop="awardAgrent" label="授予机构"> </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
      </el-table>
        </div>

        <el-dialog
      title="新增业绩奖项"
      :visible.sync="educationDialogVisible"
      width="45%"
    >
      <el-form :model="form" label-position="right" label-width="75px">
        <el-form-item label="授予时间">
          <el-date-picker
            v-model="study.agrantTime"
            type="date"
            placeholder="授予时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="study.name" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item label="奖励等级">
          <el-select v-model="study.level" placeholder="奖励等级">
                <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="授予机构">
          <el-input v-model="study.awardAgrent" placeholder="授予机构"></el-input>
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
import * as api from "../api/award";
import { Message } from 'element-ui'
export default {
    name:'ag_step07',
         props:{
       formdata: Object
    },
     data() {
    return {
      form: {},
      evaluation_id: -1,
      study: {
        name: "",
        agrantTime: "",
        level: "",
        awardAgrent: "",
      },
          options: [
        {
          value: "1",
          label: "国家级"
        },
        {
          value: "2",
          label: "省部级"
        },
        {
          value: "3",
          label: "市厅级"
        },
        {
          value: "4",
          label: "县区级"
        },
        {
          value: "5",
          label: "单位级"
        }, {
          value: "0",
          label: "其他"
        },
      ],
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
        this.formdata.ag_07.list = res.data;
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
     
  },filters: {
  award: function (value) {
      switch(value){
          case 1: return "国家级";break;
          case 2: return "省部级";break;
          case 3: return "市厅级";break;
          case 4: return "县区级";break;
          case 5: return "单位级";break;
          default: return "其他" ;
       
      }
  }
}
}
</script>
<style scoped>
.ag_step07 .add_stu table,
.ag_step07  .add_stu table tr,
.ag_step07  .add_stu table td{
    border: none;
}
.ag_step07  .add_stu table td{
    width: 50%;
}
.ag_step07  table{
    border-collapse: collapse;
    width: 98%;
    margin: 30px auto;
    text-align: center;
}
.ag_step07  table td, .ag_step07  table th{
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
    
}
.ag_step07  table  th{
    /* background-color: #999; */
    font-size: 14px;
    background-color: #CCE8EB;
    width: 100px;
}
/* .ag_step07  table tr td:nth-child(odd){
    background: #fff;
}
.ag_step07  table tr td:nth-child(even){
    background: #F5FAFA;
} */
.ag_step07 {
    padding: 10px;
    /* padding-bottom: 0; */
    /* background-color: pink; */
    
}
.ag_step07  table .edit,
.ag_step07  table .del{
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
.ag_step07  table .edit{
    background-color: rgb(142, 157, 241);
}
.ag_step07  table .del{
   background-color: rgb(241, 142, 142);
}
.ag_step07  .education{
    /* position: relative; */
    background-color: #fff;
    padding-bottom: 5px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 10px #ccc;
}
.ag_step07  .education h4{
    padding: 0 20px  ;
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #a6ccf3;
    border-bottom: 1px solid #ccc;
    color: #555;
}
.ag_step07  .education h4 div{
    float: right;
    margin-right: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-weight: 900;
    padding: 0 10px;
    /* border: 1px solid #fff; */
    color: #FFF;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.ag_step07  .education h4 .get{
    background-color: #d9524e;
}
.ag_step07  .education h4 .add{
    background-color: rgb(136, 147, 241);
}
.ag_step07 .save{
    margin-top:50px ;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    background-color:  rgb(136, 147, 241);
    border: 1px solid;
    color: #fff;
    cursor: pointer;
    margin-left: 50%;
    transform: translateX(-50%);
}
.ag_step07  .mask{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0, .5);
    z-index: 998;
}
.ag_step07  .add_stu{
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
.ag_step07  .add_stu textarea{
    height: 70px;
    padding: 10px;
    width:87.5%;
}
.ag_step07  .add_stu th{
    background-color: #fff;
    border: none;
    text-align: left;
}
.ag_step07  .add_stu th:nth-child(2){
    text-align: right;
    font-size: 13px;
    color: #111;
    cursor: pointer;
}

.ag_step07  .add_stu span{
    color: red;
}
.ag_step07  .add_stu td{
    font-weight: 600;
    font-size: 14px;
     text-align: left;
}
.ag_step07  .add_stu input{
    height: 30px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px 0;
}
.ag_step07  .add_stu .npg{
    margin: 10px 5px  0 0 ;
    width: 140px;
    height: 140px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.ag_step07  .add_stu .confirme,
.ag_step07  .add_stu .cancel{
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
.ag_step07  .add_stu .cancel{
    background: #fff;
}
.ag_step07  .add_stu .confirme{
    background: rgb(250, 142, 142)
}



</style>