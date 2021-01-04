<template>
<div>
    <Head></Head>
    <Menu></Menu>
    <div class="by">
        <div class="left">
            <Left @child-index='changeCurrentpage'></Left>
        </div>
        
        <div class="right">
            <component :is="currentpage"></component>
           
        </div>
        
    </div>
    
    
</div>
    
</template>
<script>
import Menu from '../views/menu'
import Head from '../views/head'
import Left from '../views/left'
import Promise from '../views/promise'
import Step01 from '../views/step01'
import Step02 from '../views/step02'
import Step03 from '../views/step03'
import Step04 from '../views/step04'
import Comit from '../views/comit'
export default {
    name:'Step',
    components:{
        Head,
        Menu,
        Left,
        Promise,
        Step01,
        Step02,
        Step03,
        Step04,
        Comit
    },
    data:function(){
        return{
            currentpage:'Step01'
        }
    },
    methods:{
        changeCurrentpage:function(data){
           
            if(data%10==data){
                data = '0'+data;
            }else{
                // nothing
            }
            console.log(data.toString());
            if(data.toString() == '00'){
                this.currentpage = 'Promise';
                return;
            }
            if(data.toString() == '05'){
                this.currentpage = 'Comit';
                return;
            }
            this.currentpage = "Step"+data;
            //  console.log(data);
            // this.currentpage
            console.log(this);
        }
    }
}
</script>
<style scoped>
.right,
.left{
    display: inline-block;
}
.right{
    /* position: absolute; */
    /* top: 10px; */
    margin-top: 10px;
    margin-left: 70px;
    width: 80%;
    background-color: #fff;
    
}
.by{
    display: flex;
    flex-direction: row;
}
</style>