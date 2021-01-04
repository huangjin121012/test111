<template>
    <div>
        <Head></Head>
        <Menu></Menu>
        <form action="#" class="BranchOffice">
            <table>
                <tr>
                    <th colspan="2">添加分公司</th>
                </tr>
                <tr>
                    <td>
                        <span>请输入分公司名称</span>
                    </td>
                    <td>
                        <input type="text" ref="name">
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>分公司签章URL</span>
                    </td>
                    <td>
                        <input type="text" ref="signature">
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>分公司id</span>
                    </td>
                    <td>
                        <input type="text" ref="unitId">
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>用户的id</span>
                    </td>
                    <td>
                        <input type="text" ref="userId">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="add" @click="addBranchOffice">添加</div>
                    </td>
                </tr>

                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td colspan="2">删除用户</td>
                </tr>
                <tr>
                    <td>
                        <input type="text" ref="branchOffice_id">
                    </td>
                    <td>
                        <div class="del" @click="del">删除</div>
                    </td>
                </tr>

            </table>

        </form>

    </div>
</template>
<style scoped>
.BranchOffice{
    width: 50%;
    background-color: #fff;
    margin: 50px 0 50px 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    padding-bottom: 30px;
    box-shadow: 0 2px 10px #999;
}
.BranchOffice table{
    
    width: 100%;
}
.BranchOffice table input{
    width: 80%;
    padding-left: 20px;
    height: 25px;
    border: 1px solid #555;
    border-radius: 5px;

}
.BranchOffice table tr{
   height: 40px;
}
.BranchOffice table tr td:nth-child(1){
    padding-left: 30px;
}

.BranchOffice .del,
.BranchOffice .add{
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
<script>
import Head from '../views/head';
import axios from 'axios';
import Menu from '../views/menu.vue';
export default {
    name:'Main',
    components:{
        Head,
        Menu
    },
    data:function(){
        return{
            baseUrl:'',
            name:'',
            signature:'',
            unitId:0,
            userId:0,
            branchOffice_id:0,
            list:{
                data:{
                    id:'',
                    name:'',
                    unit_id:'',
                    user_id:'',
                    signature:'',
                    create_time:'',
                    updata_time:''
                },
                message:"",
            }
            
        }
    },
    created:function (){
        //  console.log(123);
        //  console.log(this.$store.state.baseUrl);
        this.baseUrl = this.$store.state.baseUrl;
       
        
    },
    methods:{

        updata:function(){

        },

        list:function () {
            axios.get(this.baseUrl+'/branch-office/list').then(
                function(response){
                    // get到的list
                    console.log(response);
                },
                function (err) {
                    console.log(err);
                }
            )
            
        },


        del:function () {
            this.branchOffice_id = parseInt(this.$refs.branchOffice_id.value);
            axios.delete(this.baseUrl+'/branch-office/delete/'+this.branchOffice_id).then(function (response) {
                console.log(response);
                //删除分公司相应内容
            },function (err) {
                console.log(err);
            })

        },
        addBranchOffice:function(){
            this.name = this.$refs.name.value;
            
            this.signature = this.$refs.signature.value;
            
            this.unitId = parseInt(this.$refs.unitId.value);

            this.userId = parseInt(this.$refs.userId.value);
            // console.log(JSON.parse(this.data));
            // alert(this.userId+' '+typeof(parseInt(this.$refs.userId.value))  );
            
            console.log(this.userId);
            
            axios.post(this.baseUrl+'/branch-office/add',
            {
                "name" : this.name,
                "signature" : this.signature,
                "unitId" : this.unitId,
                "userId" : this.userId
            }).then(function (response) {
                console.log(response);
                //添加分公司相应内容
            },function (err) {
                console.log(err);
            })
            
            
        }
    }
}
</script>