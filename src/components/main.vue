<template>
  <div>
    <Head></Head>
    <Menu></Menu>
    <form action="#" class="BranchOffice">
      <h3 style="text-align: center;">全区工程师大数据统计 </h3>
      <br />
      <el-row :gutter="12">
        <el-col :span="12">
          <el-card shadow="always">
            <div id="main" style="width: 450px;height:450px;"></div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always">
            <div id="main1" style="width: 450px;height:450px;"></div>
          </el-card>
        </el-col>
      </el-row>
    </form>
  </div>
</template>
<style scoped>
.BranchOffice {
  width: 60%;
  background-color: #fff;
  margin: 50px 0 50px 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  padding-bottom: 30px;
  box-shadow: 0 2px 10px #999;
}
.BranchOffice table {
  width: 100%;
}
.BranchOffice table input {
  width: 80%;
  padding-left: 20px;
  height: 25px;
  border: 1px solid #555;
  border-radius: 5px;
}
.BranchOffice table tr {
  height: 40px;
}
.BranchOffice table tr td:nth-child(1) {
  padding-left: 30px;
}

.BranchOffice .del,
.BranchOffice .add {
  line-height: 30px;
  text-align: center;
  height: 30px;
  width: 60px;
  background-color: #060606;
  color: #fff;
  border-radius: 5px;
  margin-left: 45%;
  margin-top: 20px;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
<script type="text/javascript">
let echarts = require("echarts/lib/echarts");
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require("echarts/lib/chart/pie");
import Head from "../views/head";
import axios from "axios";
import Menu from "../views/menu.vue";
export default {
  name: "Main",
  components: {
    Head,
    Menu
  },

  data: function() {
    return {
      baseUrl: "",
      name: "",
      signature: "",
      unitId: 0,
      userId: 0,
      branchOffice_id: 0
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      var myChart1 = echarts.init(document.getElementById("main1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "地区分布",
          left: "center"
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   bottom: "bottom",
        //   data: ["南宁", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        // },
        series: [
          {
            name: "地区分布",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 2148, name: "南宁市" },
              { value: 1548, name: "玉林市" },
              { value: 1248, name: "钦州市" },
              { value: 1258, name: "桂林市" },
              { value: 1120, name: "梧州市"},
              { value: 1120, name: "百色市"},
              { value: 1120, name: "贵港市"},
              { value: 1000, name: "贺州市"},
              { value: 880, name: "来宾市"},
              { value: 850, name: "崇左市"},
              { value: 842, name: "河池市"},
              { value: 800, name: "北海市"},
              { value: 800, name: "防城港市"},
              { value: 800, name: "柳州市"},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });

      myChart1.setOption({
        title: {
          text: "年龄分布", //主标题
          left: "center"

        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   bottom: "bottom",
        //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        // },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 100, name: "24以下" },
              { value: 1448, name: "25-30" },
              { value: 1548, name: "31-35" },
              { value: 1588, name: "36-40" },
              { value: 1648, name: "41-45"},
              { value: 1748, name: "45-50"},
              { value: 2148, name: "51以上"},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>
