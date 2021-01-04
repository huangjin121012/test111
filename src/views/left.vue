<template>

    <div class="box"  >
        <ul class="left" ref="ul" @click="active($event)">
            <li v-for="(item ,index) in content" :data-index='index' :key="index" :class="{'li_active': index == num}">{{item}}</li>
        </ul>
    </div>


    
</template>
<script>
export default {
    name:'left',
    data:function(){
        return{
           content:['个人承诺','1.申报信息','2.基本情况','3.工作小结','4.资料上传','审核报送'],
           num:0
               
        }
    },
    methods:{
        active:function(event){
            
        //    console.log(event.target)
           if (event.target.nodeName.toLowerCase() === 'li') {
            const index = parseInt(event.target.dataset.index)
            // 获得引索后，只需要修改data数据就能改变UI了
            this.num = index;
            this.$emit("child-index",index);
          }
           
        },
        //  doSomething(index) {
          
        // }
    }
}
</script>
<style scoped>
.box{
    
    margin-top: 10px;
    display: flex;
    width: 180px;
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
.left li{
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