<template>
    <div class="ag_step08 ">
        <div class="education">
            <h4>
               业绩专利
               <div class="add" @click="add_stu">新增</div> 
            </h4>
            <table>
                <tr>
                    <th>专利名称</th>
                    <th>专利类型</th>
                    <th>取得时间</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
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
        <div class="add_stu scroll" ref="add_stu">

            <table>
                <tr>
                    <th>新增业绩专利</th>
                    <th>
                        <div @click="cancel_add">取消</div>
                    </th>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        专利名称
                    </td>
                    <td>
                        <span>*</span>
                       专利类型
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
                        取得时间
                    </td>
                   
                </tr>
                <tr>
                    <td>
                        <input type="text">
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="2">
                        <span>*</span>
                        专利介绍
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
        </div>
    </div>
</template>
<script>
export default {
    name:'ag_step08',
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
.ag_step08 .add_stu table,
.ag_step08  .add_stu table tr,
.ag_step08  .add_stu table td{
    border: none;
}
.ag_step08  .add_stu table td{
    width: 50%;
}
.ag_step08  table{
    border-collapse: collapse;
    width: 98%;
    margin: 30px auto;
    text-align: center;
}
.ag_step08  table td, .ag_step08  table th{
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
    
}
.ag_step08  table  th{
    /* background-color: #999; */
    font-size: 14px;
    background-color: #CCE8EB;
    width: 100px;
}
/* .ag_step08  table tr td:nth-child(odd){
    background: #fff;
}
.ag_step08  table tr td:nth-child(even){
    background: #F5FAFA;
} */
.ag_step08 {
    padding: 10px;
    /* padding-bottom: 0; */
    /* background-color: pink; */
    
}
.ag_step08  table .edit,
.ag_step08  table .del{
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
.ag_step08  table .edit{
    background-color: rgb(142, 157, 241);
}
.ag_step08  table .del{
   background-color: rgb(241, 142, 142);
}
.ag_step08  .education{
    /* position: relative; */
    background-color: #fff;
    padding-bottom: 5px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 10px #ccc;
}
.ag_step08  .education h4{
    padding: 0 20px  ;
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #a6ccf3;
    border-bottom: 1px solid #ccc;
    color: #555;
}
.ag_step08  .education h4 div{
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
.ag_step08  .education h4 .get{
    background-color: #d9524e;
}
.ag_step08  .education h4 .add{
    background-color: rgb(136, 147, 241);
}
.ag_step08 .save{
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
.ag_step08  .mask{
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
.ag_step08  .add_stu{
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
.ag_step08  .add_stu textarea{
    height: 70px;
    padding: 10px;
    width:87.5%;
}
.ag_step08  .add_stu th{
    background-color: #fff;
    border: none;
    text-align: left;
}
.ag_step08  .add_stu th:nth-child(2){
    text-align: right;
    font-size: 13px;
    color: #111;
    cursor: pointer;
}

.ag_step08  .add_stu span{
    color: red;
}
.ag_step08  .add_stu td{
    font-weight: 600;
    font-size: 14px;
     text-align: left;
}
.ag_step08  .add_stu input{
    height: 30px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px 0;
}
.ag_step08  .add_stu .npg{
    margin: 10px 5px  0 0 ;
    width: 140px;
    height: 140px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.ag_step08  .add_stu .confirme,
.ag_step08  .add_stu .cancel{
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
.ag_step08  .add_stu .cancel{
    background: #fff;
}
.ag_step08  .add_stu .confirme{
    background: rgb(250, 142, 142)
}



</style>