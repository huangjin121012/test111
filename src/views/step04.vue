<template>
<div class="step4">
    <form action="">
        <div class="id">
        <h4>
            <span>*</span>
            身份证正反扫描件
        </h4>
        <div class="png">
            +
        </div>
        <input type="file" id="file" multiple="multiple" >
    </div>
     <div class="doctor">
        <h4>
            <span>*</span>
            博士后证书扫描件
        </h4>
        <div class="png">
            +
        </div>
        <input type="file" id="file" multiple="multiple" >
    </div>
    <div class="doctor_pro">
        <h4>
            <span>*</span>
            博士研究生毕业证书扫描件
        </h4>
        <div class="png">
            +
        </div>
        <input type="file" id="file" multiple="multiple" >
    </div>
    <div class="work_con">
        <h4>
            <span>*</span>
           现劳动合同（入编证明）
        </h4>
        <div class="png">
            +
        </div>
        <input type="file" id="file" multiple="multiple" >
    </div>
    <div class="btn">
        保存
    </div>
    <input type="submit">
    </form>
</div>
    
</template>
<script>
export default {
    name:'step04',

}
</script>
<style scoped>

.step4 span{
    color: red;
}
.step4 .work_con,
.step4 .doctor_pro,
.step4 .doctor,
.step4 .id{
    width: 95%;
    margin: 50px auto; 
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 2px 2px 10px #ccc;
}


.step4 h4{
   display: block;
    padding-left:20px;
    width: 100%;
    position: relative;
    height: 50px;
    /* border-radius: 10px 10px 0 0; */
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    background-color: #babaec;
    color: #fff;
    
    
}
.step4 .png{
    width: 180px;
    height: 180px;
    border: 1px solid #ccc;
    margin: 20px ;
    font-size: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #ccc;
    cursor: pointer;
    border-radius: 20px;

}
.step4 input{
    display: none;
}
.step4 .btn{
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
    margin-bottom: 50px;
}


</style>