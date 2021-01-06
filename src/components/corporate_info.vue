<template>
  <div>
  
    <Head></Head>
    <Menu></Menu>
    <el-card>
      <el-table :data="list" style="width: 100%" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="year" label="申报年度"></el-table-column>
        <el-table-column prop="source" label="申报系列"></el-table-column>
        <el-table-column prop="jury" label="评审会名称"></el-table-column>
                <el-table-column prop="sign" label="状态">
          <template slot-scope="scope">
            <el-tag  v-if="scope.row.status === 0">待审核</el-tag>
            <el-tag type="info" v-if="scope.row.status === 2">未通过</el-tag>
            <el-tag type="success" v-if="scope.row.status === 1">已通过</el-tag>
          </template>
        </el-table-column>
   
          <el-table-column label="操作">
          <template v-if="scope.row.status === 0" slot-scope="scope">
            <el-button type="primary" size="mini"    @click="handleClick(scope.row.id)">审核</el-button>
        <!-- <el-button type="danger" size="mini"    @click="handleClick(scope.row,false)">驳回</el-button> -->
          </template>
        </el-table-column>
      </el-table>

    
    </el-card>
  </div>
</template>
<script>
import Menu from '../views/menu'
import Head from '../views/head'
import * as api from "../api/evaluation";
export default {
     components:{
        Head,
        Menu,
    },
  data () {
    return {      
      list:[],
      isPass :false
    }
  },
  created () {
    this.getList()
  },
  methods: {
   async  getList(){
      const res = await api.list(-1)
      if(res.code ==0){
        console.log(res);
        this.list = res.data.list
      }
    },   
    handleClick(id){
      localStorage.setItem("op",3)
      localStorage.setItem("evaluation_id",id)
      this.$router.push("agreement")
    }
 
    
  }
}
</script>
<style  scoped>
.el-table {
  margin-top: 15px;
}
.el-tag {
  margin: 10px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
.el-pagination {
  margin-top: 15px;
}
.el-divider--horizontal {
  margin: 25px 0;
  background: 0 0;
  border-top: 1px dashed #e8eaec;
  margin-top: 3px;
}
</style>
