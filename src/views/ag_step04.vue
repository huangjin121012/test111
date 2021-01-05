<template>
    <div class="ag_step04">
        <div class="box">
            <h4>
                人才引进相关材料
                <div class="add" @click="add_stu">新增</div>
            </h4>
            <table>
                <tr>
                    <th >材料名称</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div class="edit">编辑</div>
                        <div class="del">删除</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="save">保存</div>
        <div class="mask" ref="mask" @click="cancel_add"></div>
        <div class="add_stu" ref="add_stu">
            <table>
                <tr>
                    <td>新增人才引进相关材料</td>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        材料名称
                    </td>
                </tr>
                <tr>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        材料附件
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="png">
                            <img src="" alt="">
                            <input type="file">
                        </div>
                    </td>
                </tr>
            </table>
            <div class="confirme">确认</div>
            <div class="cancel" @click="cancel_add">取消</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ag_step04',
         props:{
       formdata: Object
    },
    methods:{
        ban_scoall:function(){
            let body = document.querySelector('body');
            body.style.overflow='hidden';
        },
        start_scoall:function(){
            let body = document.querySelector('body');
            body.style.overflow='auto';
        },
        cancel_add:function(){
            // alert(1);
            this.$refs.mask.style.display = 'none';
            this.$refs.add_stu.style.display = 'none';
            
            this.start_scoall();
        },
        add_stu:function(){
            this.ban_scoall();
            this.$refs.mask.style.display = 'block';
            this.$refs.add_stu.style.display = 'block';
            
        }
        
    }
}
</script>
<style scoped>
.ag_step04{
    padding: 10px;
    /* background-color: pink; */
}
.ag_step04 .box{
    width: 99%;
    background-color: #fff;
    margin: 40px 0 40px 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 10px #ccc;
}
.ag_step04 .box h4{
    padding: 0 20px  ;
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #a6ccf3;
    border-bottom: 1px solid #ccc;
    color: #555;
}
.ag_step04 .box .add{
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
    background-color: rgb(84, 199, 7);
}
.ag_step04 .box table{
border-collapse: collapse;
width: 99%;
margin: 20px auto;
text-align: center;
}


.ag_step04  table tr th:nth-child(1),
.ag_step04  table tr td:nth-child(1){
    width: 85%;
}
.ag_step04  table .edit,
.ag_step04  table .del{
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
.ag_step04  table .edit{
    background-color: rgb(142, 157, 241);
}
.ag_step04  table .del{
   background-color: rgb(241, 142, 142);
}

.ag_step04 .box table td, table th{
border: 1px solid #cad9ea;
color: #666;
height: 30px;
}

.ag_step04 .box table thead th{
background-color: #CCE8EB;
width: 100px;
}

.ag_step04 .box table tr:nth-child(odd){
background: #fff;
}

.ag_step04 .box table tr:nth-child(even){
background: #F5FAFA;
}

.ag_step04 .save{
    margin-top: 50px;
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
.ag_step04 .mask{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0, .5);
    z-index: 998;
}

.ag_step04  .add_stu{
    display: none;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 800px;
    /* height: 100px; */
    background-color: #fff;
    border-radius: 5px;
    z-index: 999;
}





.ag_step04  .add_stu table{
    width: 90%;
}
.ag_step04  .add_stu span{
    color: red;
}
.ag_step04  .add_stu td{
    padding: 10px 0;
    font-weight: 600;
    font-size: 14px;
     text-align: left;
}
.ag_step04  .add_stu input{
    /* display: none; */
    height: 30px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px 0;
}
.ag_step04  .add_stu .png{
    margin: 10px 5px  0 0 ;
    width: 140px;
    height: 140px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.ag_step04  .add_stu .confirme,
.ag_step04  .add_stu .cancel{
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
.ag_step04  .add_stu .cancel{
    background: #fff;
}
.ag_step04  .add_stu .confirme{
    background: rgb(250, 142, 142)
}


</style>