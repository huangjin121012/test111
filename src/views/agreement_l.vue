<template>

    <div class="box"  >
        <ul class="left" ref="ul" @click="active($event)">
            <li v-for="(item ,index) in content" :data-index='index' :key="index" :class="{'li_active': index == num}">
                <span v-if="index==0||index==1||index==2||index==3||index==11" class="x">*</span>
                {{item}}
            </li>
        </ul>
    </div>


    
</template>
<script>
export default {
    name:'left',
    data:function(){
        return{
           content:['个人承诺','1.基本信息','2.学历情况','3.主要经历','4.人才引进相关材料','5.论文、著作','6.业绩成果','7.业绩奖项','8.业绩专利','9.从业或执业（职业）资格','10.国外工作经验或研究材料','11.工作总结','12.其他材料','审核报送'],
           num:0,
           
               
        }
    },
    methods:{
        active:function(event){
            
           console.log(event.target)
           if (event.target.nodeName.toLowerCase() === 'li') {
            const index = parseInt(event.target.dataset.index)
            // 获得引索后，只需要修改data数据就能改变UI了
            this.doSomething(index)
            this.$emit("child-index",index);
          }
           
        },
         doSomething(index) {
          this.num = index;
        }
    }
}
</script>
<style scoped>
.box{
    
    margin-top: 10px;
    display: flex;
    width: 250px;
     /* background-color: #fff; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: inline-block;

}
.left{
    width: 100%;
    list-style: none;
   background-color: #fff;

    
   
}
.left span{
    color: red;
    position: absolute;
    left: 10px;
    font-weight: 900;
    display: block;
    
}
.left li{
    position: relative;
    height: 20px;
    line-height: 20px;
    padding: 6px 0 6px 20px;
    font-size: 13px;
    display: flex;
    align-items: center;
    
}
.left li:hover{
    color: #1a56a8;
    background-color: #dfeaf5;
}
.li_active{
    color: #1a56a8;
    background-color: #d1dbe5;
    border-right: 5px solid rgb(163, 163, 235);
}

</style>