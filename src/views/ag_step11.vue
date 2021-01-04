<template>
    <div class="ag_step11">
        <h3>工作总结</h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div class="btn">保存</div>
    </div>
</template>
<script>
export default {
    name:'ag_step11'
}
</script>
<style scoped>
.ag_step11{

    margin: 20px 10px;
    width: 90%;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
    margin-left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}
.ag_step11 h3{
    padding-left:20px ;
    position: relative;
    display: block;
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    background-color: #a6ccf3;
    color: #fff;
    

}
.ag_step11 textarea{
    margin: 50px 0;
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 180px;
}
.ag_step11 .btn{
    cursor: pointer;
   height: 50px;
   line-height: 50px;
   border-radius: 10px;
   background-color:  rgb(186, 186, 236);
   color: #fff;
    width: 70px;
    border: 1px solid #ccc;
    text-align: center;
    margin-left: 50%;
    margin-bottom: 50px;
    transform: translateX(-50%);
   
   
}
</style>