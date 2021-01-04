<template>
<div class="com_eva">
    
    <Menu></Menu>
    <div class="bd">
        <div class="add"  @click="start_btn">+新建数据</div>
        <div class="pace">
            <h4>
                职称评审
                <span>编辑</span>
            </h4>
            <div class="proccess">
                <div class="container" >
                    <div class="skills ht" :style="{'--progress':progress}">&nbsp;</div>
                </div>
                <div class="container2">
                    <span>个人申报</span>
                    <span>单位审核</span>
                    <span>主管单位/职改办推荐</span>
                    <span>评委会所在职改办</span>
                    <span>材料报送成功</span>
                </div>
                
            </div>
            
            <table>
                <tr>
                    <td>申报年度</td>
                    <td>2020</td>
                    <td>评委会所属职改办</td>
                    <td>办公室占位</td>
                </tr>
                <tr>
                    <td>拟申报资格名称</td>
                    <td>{{msg}}/{{level}}</td>
                    <td>评审会名称</td>
                    <td>{{office}}</td>
                </tr>
                <tr>
                    <td>评审等级</td>
                    <td>{{level}}</td>
                    <td>创建时间</td>
                    <td> {{time}}</td>
                </tr>
                <tr>
                    <td>材料报送时间段</td>
                    <td colspan="3">（占位）</td>
                    
                </tr>
            </table>


           
        </div>
         <div class="start_btn" ref="start_btn">
            <h3>选择评审会</h3>
            <h4>申报年度：2020</h4>
            <div class="slect_start" ref="slect_start" >
                <span class="start1 " ref="start1" @click="changeLevel('初级',$event,1)" :class="{'slect_start_active':1==current}">初级</span>
                <span class="start2" ref="start2" @click="changeLevel('中级',$event,2)" :class="{'slect_start_active':2==current}">中级</span>
                <span class="start3" ref="start3" @click="changeLevel('副高级',$event,3)" :class="{'slect_start_active':3==current}">副高级</span>
            </div>
            <div class="input_pace">
                <span>申报系列：</span>
                <input type="text" class="office" v-model="msg">
            </div>
            <div class="input_pace">
                <span>申报评审会：</span>
                <input type="text" class="office" v-model="office">
            </div>
            
            <div class="chose">
                <router-link to="agreement"><div class="confirm" @click="over">确认</div></router-link>
                
                <div class="cancel"  @click="over">取消</div>
            </div>
        </div>
        <div class="mask" ref="mask"></div>
        
    </div>

</div>
    
</template>


<script>

import Menu from '../views/menu'
export default {
    name:'company_evaluation',
    components:{
        
        Menu
    },
         created: function() {
    var aData = new Date();
    console.log(aData) 
    
    this.value =
      aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate();
    console.log(this.value) 
    this.time = this.value;
    this.year =  aData.getFullYear();
    console.log(this.time);
  },
    data:function(){
        return{
            msg:'',
            office:'',
            level:'初级',
            time:'',
            year:'',
            current:1,
            progress:'25%'//进度
        }
        
    },
    methods:{
        start_btn:function(){
           console.log(this.$refs.btn);
           this.$refs.mask.style.display = 'block';
           this.$refs.start_btn.style.display = 'block';
        },
        over:function(){
           this.$refs.mask.style.display = 'none';
           this.$refs.start_btn.style.display = 'none';
        },
        
        changeLevel:function(level,event,index){
           
            // console.log(event.currentTarget)
            this.level = level;
            this.current = index;
        },

    }
}
</script>

<style scoped>

table{
    
    width: 95%;
    border-collapse: collapse;
    margin: 10px auto;
    text-align: center;
}

table td, table th{
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
}
table thead th{

    background-color: #CCE8EB;

    width: 100px;

}

table tr td:nth-child(even){

    background: #fff;

}

table tr td:nth-child(odd){

    background: #eef1f6;

}
.bd{
    /* background-color: pink; */
    width: 100%;
    /* margin-top: 50px; */
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 20px;
}

.bd .add{
   cursor: pointer;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 10px;
    background-color:#5cb95c;
    font-weight: 800;
    color: #fff;
    float: right;
    margin-bottom: 50px;
}
.bd .pace{
    
    width: 95%;
    background-color: #fff;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
}
.bd .pace h4{
    display: block;
    
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    background-color: #555;
    color: #fff;
}
.bd .pace h4 span{
    cursor: pointer;
    display: block;
    height: 17px;
    padding: 2px;
    margin-top: 3px;
    line-height: 20px;
    float: right;
    margin-right: 20px;
    /* border: 1px solid rgb(146, 173, 228); */
    border-radius: 5px;
    font-weight: 200;
    font-size: 14px;
    background-color: rgb(131, 165, 233);
}

.bd .proccess {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    height: 100px;
    flex-direction: column;
    width: 95%;
    /* background-color: pink; */
    margin-left: 50%;
    transform: translateX(-50%);
}
.bd .proccess  .container2{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    width: 100%;

}

.bd .pace .container {
    height: 10px;
    line-height: 10px;
    border: 2px solid #ccc;
    width: 100%;
    margin-bottom:10px ;
    background-color: #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
    overflow: hidden;
}

.bd .pace .skills {
    height: 10px;
    line-height: 10px;
    text-align: right;
    padding-right: 10px;
    line-height: 10px;
    color: white;

   /* border-radius: 5px 0 0 5px; */
   overflow: hidden;
}
.bd .pace .ht {
    height: 10px;
    border-radius: 2px 0;
    width:var(--progress) ;
    background-color: #4CAF50;
}

.start_btn{
    display: none;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    padding: 15px;
    width: 55%;
    border: 1px solid #ccc;
    border-radius: 10px;
    /* height: 300px; */
    background-color: #fff;
}
.start_btn h4{
    background-color: #fff;
    color: #111;
    font-weight: 700;
}

.slect_start{
    display: flex;
    width: 50%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 50px;
}
.slect_start span{
    font-weight: 800;
    text-align: center;
    border-right: 1px solid #ccc;
    flex: 1;
    cursor: pointer;
}
.slect_start span:hover{
    color: #7db66f;
}
.slect_start:nth-child(3){
    border-right: none;
}
.slect_start_active{
    background-color: #7dc77d;
    color: #FFF;
}
.office{
    height: 30px;
    width: 90%;
    padding: 5px;
    outline: none;
    
    border: 1px solid #ccc;
    /* margin-top: 50px; */
    /* margin-left: 50%;
    transform: translateX(-50%); */
}
.input_pace{
    margin: 20px;
}
.input_pace span{
    display: block;
    margin-bottom: 20px;
}
.mask{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 998;
    background: rgba(0,0,0,.5);
}

.chose{
    margin-top: 50px;
    float: right;
}

.chose .cancel,
.chose .confirm{
    padding: 5px;
    width: 70px;
    text-align: center;
    display: inline-block;
    margin-left: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.chose .confirm{
    background-color: #7dc77d;
    color: #FFF;
}
.chose .cancel{
    background-color: #ccc;
}

</style>
