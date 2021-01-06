<template>
  <div class="comit">
    <div class="parent" >
      <div v-if="op == 0" @click="handleGo" class="btn">同意并报送</div>
      <div v-if="op == 1" @click="handleGo" class="btn">修改并报送</div>
      <div class="child">
        <el-button @click="handleClick(1)" v-if="op == 3" type="success" plain>审核通过</el-button>
        <el-button @click="handleClick(2)" v-if="op == 3" type="danger" plain>审核驳回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from "../api/evaluation";
import { Message } from "element-ui";
export default {
  name: "Comit",
  props: {
    formdata: Object
  },
  data() {
    return {
      op: 0,
      evaluation_id: -1
    };
  },
  methods: {
    async handleClick(value) {
      const res = await api.updateById(this.evaluation_id, { status: value });
      if (res.code == 0) {
        this.$router.push("corporate_info");
      }
    },
    handleGo() {
      localStorage.setItem(
        "evaluation_id_" + this.evaluation_id,
        JSON.stringify(this.formdata.ag_01)
      );
      this.$router.push("comeva");
    }
  },
  created() {
    this.evaluation_id = localStorage.getItem("evaluation_id");
    this.op = localStorage.getItem("op");
  }
};
</script>
<style scoped>
.comit .btn {
  margin: 50px;
  width: 100px;
  padding: 10px;
  background-color: #d9524e;
  color: #fff;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  cursor: pointer;
}

.parent{
    width: 400px;
    height: 400px;
    position: relative;
    margin:0 auto;
    /* background-color: pink; */
   
}
.child{
    width: 220px;
    height: 50px;
    position:absolute;
    left:50%;
    top:50%;
    margin-top: -30px;
    margin-left: -95px;
    /* background-color: red; */
   
}
</style>
