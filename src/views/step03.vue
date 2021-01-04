<template>
    <div class="step3">
        <h3>工作总结</h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div class="btn">保存</div>
    </div>
</template>
<script>
export default {
    name:'step03'
}
</script>
<style scoped>
.step3{

    margin: 20px 10px;
    width: 90%;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
    margin-left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}
.step3 h3{
    padding-left:20px ;
    position: relative;
    display: block;
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    background-color: #babaec;
    color: #fff;
    

}
.step3 textarea{
    margin: 50px 0;
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 180px;
}
.step3 .btn{
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
    transform: translateX(-50%);
   
   
}
</style>