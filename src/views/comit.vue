<template>
<div class="comit">
    <div v-if="op==0" class="btn">同意并报送</div>
    <div v-if="op==1" class="btn">修改并报送</div>
    <el-button @click="handleClick(1)" v-if="op==3" type="success" plain>审核通过</el-button>
    <el-button  @click="handleClick(2)" v-if="op==3" type="danger" plain>审核驳回</el-button>
</div>

</template>
<script>
import * as api from "../api/evaluation";
import { Message } from "element-ui";
export default {
    name:'Comit',
    data(){
        return{ 
            op : 0 ,
             evaluation_id:-1,   
        };
    },
    methods:{
     async  handleClick(value){
            const res = await api.updateById(this.evaluation_id,{status:value})
            if(res.code == 0){
              Message({
          message: "操作成功",
          type: "success",
          duration: 2 * 1000
        });
                this.$router.push("corporate_info")
            }
        }
    },
    created(){
         this.evaluation_id = localStorage.getItem("evaluation_id")
         this.op = localStorage.getItem("op")
    }
};
</script>
<style scoped>
.comit .btn{
    margin:50px ; 
    width: 100px;
    padding: 10px;
    background-color: #d9524e;
    color: #FFF;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    cursor: pointer;
    
}
</style>
