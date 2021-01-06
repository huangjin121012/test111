<template>
    <div class="m">
        <Head></Head>
        <Menu></Menu>
        <div class="bd">

            <div class="left">
                <Left @child-index='changeCurrentpage'></Left>
            </div>
            
            <div class="right">
                <component :is="currentpage" :formdata="formdata" @printf="printfData"  ></component>
            </div>
        </div>
    </div>
</template>
<style  scoped>

.bd{
    display: flex;
    overflow: visible;

}
.right{
    flex: 1;
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 20px;
    background-color: #fff;
}

</style>
<script>
import Menu from '../views/menu'
import Left from '../views/agreement_l'
import Head from '../views/head'
import Promise from '../views/promise'
import Ag_step01 from '../views/ag_step01'
import Ag_step02 from '../views/ag_step02'
import Ag_step03 from '../views/ag_step03'
import Ag_step04 from '../views/ag_step04'
import Ag_step05 from '../views/ag_step05'
import Ag_step06 from '../views/ag_step06'
import Ag_step07 from '../views/ag_step07'
import Ag_step08 from '../views/ag_step08'
import Ag_step09 from '../views/ag_step09'
import Ag_step10 from '../views/ag_step10'
import Ag_step11 from '../views/ag_step11'
import Ag_step12 from '../views/ag_step12'
import Comit from '../views/comit'
export default {
    name:'agreement',
    components:{
        Head,
        Menu,
        Left,
        Promise,
        Ag_step01,
        Ag_step02,
        Ag_step03,
        Ag_step04,
        Ag_step05,
        Ag_step06,
        Ag_step07,
        Ag_step08,
        Ag_step09,
        Ag_step10,
        Ag_step11,
        Ag_step12,
        Comit
    },
    data:function(){
        return{
            currentpage:'Promise' ,
            formdata : {
                ag_01:{
                   person_name: '', 
                   idcard: '',
                   phone: '',
                   email: '',
                   nation: '',
                   political: '',
                   birthDay: '',
                   filePlace: '',
                   property: '',
                   workTime: '',
                   skillAge: '',
                   oldname: '',
                   position: '',
                   posTime: '',
                   frontUrl: '',
                   reverseUrl: '',
                   image: '',
                   jury: '',
                   unitLevel: '',
                   summarize: ''
                },
                 ag_02:{
                   list:[]
                },
                 ag_03:{
                     list:[]
                },
                 ag_04:{
                   list:[]
                },
                 ag_05:{
                   list:[]
                },
                 ag_06:{
                   list:[]
                },
                 ag_07:{
                     list:[]
                },
                 ag_08:{
                     list:[]
                },
                 ag_09:{
                     list:[]
                },
                 ag_10:{
                   list:[]
                },
                 ag_11:{
                   
                },
                 ag_12:{
                   list:[]
                }
            }
        }
    },
    methods:{
        changeCurrentpage:function(data){
           
            if(data%10==data){
                data = '0'+data;
            }else{
                // nothing
            }
            if(data.toString() == '00'){
                this.currentpage = 'Promise';
                return;
            }
            if(data.toString() == '13'){
                this.currentpage = 'Comit';
                return;
            }
            this.currentpage = "Ag_step"+data;
        } ,
        printfData(data){
               console.log(2222)
            console.log(data)
        }
    }
    
}
</script>