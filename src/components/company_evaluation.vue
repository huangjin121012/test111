<template>
  <div class="com_eva">
    <Menu></Menu>
    <div class="bd">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>职称评审</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="educationDialogVisible = true"
            >新建数据</el-button
          >
        </div>
        <el-card>
          <h3 style="color:red">填报说明</h3>
          <br />
          <div style="color:red">
            欢迎您参加广西壮族自治区专业技术资格的申报，为使您更为准确的掌握申报评审的相关政策，减少因政策原因导致的申报障碍，敬请认真阅读并掌握评审相关的政策规定。主要包括以下政策：
            1.国家、自治区职称管理方面的政策文件；
            2.关于专业技术资格评审的一般程序规定及要求；
            3.个人所选择申报系列的专业技术资格评审条件；
            4.相关专项职称评审政策；
            5.当年度的自治区评审部署文件及所选择申报系列的评审部署文件；
            6.其他根据个人情况需要掌握的职称政策；
            以上政策均可在广西壮族自治区人力资源和社会保障厅网站上“年度职称评审工作专题”查询到；如网站查询不到或对政策文件把握不准，您也可根据我们在该网站提供的联系方式选择到您申报的评委会咨询了解。
          </div>
        </el-card>
        <br />
        <el-card
          class="box-card"
          v-for="item in data"
          :key="item.id"
          :offset="1"
          style="margin-top:15px"
        >
          <div slot="header" class="clearfix">
            
            <el-row :gutter="20">
              
              <el-col :span="22"><span>职称评审</span></el-col>
              <!-- <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
              <el-col :span="1"><el-button style="float: right; padding: 3px 0" type="text" @click="edit">编辑</el-button></el-col>
              <el-col :span="1"><el-button style="float: right; padding: 3px 0" type="text" @click="Details">详情</el-button></el-col>
            </el-row>
          </div>
          <table>
            <tr>
              <td>申报年度</td>
              <td>2021</td>
              <td>评委会所属职改办</td>
              <td>桂林电子科技大学职称改革工作领导小组办公室</td>
            </tr>
            <tr>
              <td>拟申报资格名称</td>
              <td>{{ item.source }}/{{ item.level | award }}</td>
              <td>评审会名称</td>
              <td>{{ item.jury }}</td>
            </tr>
            <tr>
              <td>评审等级</td>
              <td>{{ item.level | award }}</td>
              <td>创建时间</td>
              <td>{{ item.createTime }}</td>
            </tr>
          </table>
        </el-card>
      </el-card>

      <div class="mask" ref="mask"></div>
    </div>
    <el-dialog
      title="选择评审会"
      :visible.sync="educationDialogVisible"
      width="55%"
    >
      <el-form label-position="right" label-width="125px">
        <el-form-item label="申报等级">
          <el-radio-group v-model="form.level" style="width:100%">
            <el-radio-button label="初级"></el-radio-button>
            <el-radio-button label="中级"></el-radio-button>
            <el-radio-button label="副高级"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="申报系列">
          <el-select
            v-model="form.source"
            @change="selectChanged"
            style="width:100%"
            placeholder="请选择申报系列"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申报评审会">
          <el-select
            v-model="form.jury"
            style="width:100%"
            placeholder="请选择申报评审会"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
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
import Menu from "../views/menu";
import * as api from "../api/evaluation";
import { Message } from "element-ui";
export default {
  name: "company_evaluation",
  components: {
    Menu
  },
  data: function() {
    return {
      educationDialogVisible: false,
      msg: "",
      office: "",
      level: "",
      time: "",
      year: "",
      current: 1,
      progress: "25%", //进度
      form: {
        level: "初级",
        jury: "",
        source: ""
      },
      data: {},
      options: [
        {
          value: "1",
          label: "播音系列"
        },
        {
          value: "2",
          label: "档案系列"
        },
        {
          value: "3",
          label: "翻译系列"
        },
        {
          value: "4",
          label: "高等学校教师系列"
        },
        {
          value: "5",
          label: "工程系列"
        }
      ],
      options1: [],
      value: "",
      value1: ""
    };
  },
  filters: {
    award: function(value) {
      switch (value) {
        case 0:
          return "初级";
          break;
        case 1:
          return "中级";
          break;
        case 2:
          return "副高级";
          break;
        default:
          return "其他";
      }
    }
  },
  created() {
    this.getData();
  },
  methods: {
    selectChanged(value) {
      if (value == "播音系列") {
        this.options1 = [
          {
            value1: "1",
            label:
              "崇左市播音系列评审委员会【崇左市新闻播音系列职称改革工作领导小组办公室】"
          },
          {
            value1: "2",
            label:
              "桂林市播音系列评审会【桂林市新闻社科系列职称改革工作领导小组】"
          }
        ];
      } else if (value == "档案系列") {
        this.options1 = [
          {
            value1: "1",
            label:
              "百色市档案系列初级评委会【百色市档案系列职称改革工作领导小组办公室】"
          },
          {
            value1: "2",
            label:
              "档案系列桂林理工大学评委会【桂林理工大学职称改革工作领导小组办公室】"
          },
          {
            value1: "3",
            label:
              "桂林市档案系列职称评委会【桂林市档案系列职称改革工作领导小组】"
          }
        ];
      } else if (value == "翻译系列") {
        this.options1 = [
          {
            value1: "1",
            label:
              "自治区翻译系列评委会【广西壮族自治区翻译系列职称改革工作领导小组办公室】"
          }
        ];
      } else if (value == "高等学校教师系列") {
        this.options1 = [
          {
            value1: "1",
            label:
              "自治区翻译系列评委会【广西壮族自治区翻译系列职称改革工作领导小组办公室】"
          },
          {
            value1: "2",
            label:
              "高等学校教师系列广西科技大学职称评审委员会【广西科技大学职称改革工作领导小组办公室】"
          },
          {
            value1: "3",
            label:
              "高等学校教师系列桂林理工大学评委会【桂林理工大学职称改革工作领导小组办公室】"
          }
        ];
      } else if (value == "工程系列") {
        this.options1 = [
          {
            value1: "1",
            label:
              "崇左市工程系列专业技术职务资格评审委员会【崇左市工程技术专业职称改革工作领导小组办公室】"
          },
          {
            value1: "2",
            label:
              "工程系列百色市评委会【百色市工程系列职称改革工作领导小组办公室】"
          },
          {
            value1: "3",
            label:
              "工程系列北海市市政管理行业职称评审委员会【北海市工程系列市政管理行业职称改革工作领导小组]"
          }
        ];
      }
    },
    edit() {

    },
    Details() {

    },
    async handleSubmit() {
      let level = this.form.level;
      let form = this.form;
      if (level == "初级") level = 0;
      else if (level == "中级") level = 1;
      else level = 2;
      const res = await api.add({
        level: level,
        jury: form.jury,
        source: form.source,
        userId: localStorage.getItem("user_id")
      });
      if (res.code == 0) {
        localStorage.setItem("evaluation_id", res.data.id);
        this.$router.push("agreement");
      }
    },
    async getData() {
      const res = await api.list(-1);
      if (res.code == 0) {
        this.data = res.data.list;
        console.log(this.data);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 95%;
  border-collapse: collapse;
  margin: 10px auto;
  text-align: center;
}

table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 50px;
}
table thead th {
  background-color: #cce8eb;

  width: 100px;
}

table tr td:nth-child(even) {
  background: #fff;
}

table tr td:nth-child(odd) {
  background: #eef1f6;
}
.bd {
  /* background-color: pink; */
  width: 100%;
  /* margin-top: 50px; */
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  padding: 20px;
}

.bd .add {
  cursor: pointer;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  background-color: #5cb95c;
  font-weight: 800;
  color: #fff;
  float: right;
  margin-bottom: 50px;
}
.bd .pace {
  width: 95%;
  background-color: #fff;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  overflow: hidden;
}
.bd .pace h4 {
  display: block;

  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  background-color: #555;
  color: #fff;
}
.bd .pace h4 span {
  cursor: pointer;
  display: block;
  height: 17px;
  padding: 2px;
  margin-top: 3px;
  line-height: 20px;
  float: right;
  margin-right: 20px;
  /* border: 1px solid rgb(146, 173, 228); */
  border-radius: 5px;
  font-weight: 200;
  font-size: 14px;
  background-color: rgb(131, 165, 233);
}

.bd .proccess {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 100px;
  flex-direction: column;
  width: 95%;
  /* background-color: pink; */
  margin-left: 50%;
  transform: translateX(-50%);
}
.bd .proccess .container2 {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
}

.bd .pace .container {
  height: 10px;
  line-height: 10px;
  border: 2px solid #ccc;
  width: 100%;
  margin-bottom: 10px;
  background-color: #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  overflow: hidden;
}

.bd .pace .skills {
  height: 10px;
  line-height: 10px;
  text-align: right;
  padding-right: 10px;
  line-height: 10px;
  color: white;

  /* border-radius: 5px 0 0 5px; */
  overflow: hidden;
}
.bd .pace .ht {
  height: 10px;
  border-radius: 2px 0;
  width: var(--progress);
  background-color: #4caf50;
}

/* .start_btn {
  display: none;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: 15px;
  width: 55%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}
.start_btn h4 {
  background-color: #fff;
  color: #111;
  font-weight: 700;
} */

.slect_start {
  display: flex;
  width: 50%;
  height: 35px;
  line-height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 50px;
}
.slect_start span {
  font-weight: 800;
  text-align: center;
  border-right: 1px solid #ccc;
  flex: 1;
  cursor: pointer;
}
.slect_start span:hover {
  color: #7db66f;
}
.slect_start:nth-child(3) {
  border-right: none;
}
.slect_start_active {
  background-color: #7dc77d;
  color: #fff;
}
.office {
  height: 30px;
  width: 90%;
  padding: 5px;
  outline: none;

  border: 1px solid #ccc;
  /* margin-top: 50px; */
  /* margin-left: 50%;
    transform: translateX(-50%); */
}
.input_pace {
  margin: 20px;
}
.input_pace span {
  display: block;
  margin-bottom: 20px;
}
.mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 998;
  background: rgba(0, 0, 0, 0.5);
}

.chose {
  margin-top: 50px;
  float: right;
}

.chose .cancel,
.chose .confirm {
  padding: 5px;
  width: 70px;
  text-align: center;
  display: inline-block;
  margin-left: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.chose .confirm {
  background-color: #7dc77d;
  color: #fff;
}
.chose .cancel {
  background-color: #ccc;
}
</style>
