<template>
<div>
    <Menu></Menu>
    
    <div class="box">
        
        <div class="btn" @click="start_btn" ref="btn">+我要申报</div>
      
         <div class="add_msg">
            <h4>职称认定</h4>
        
            <div class="load clearfix">
            <div class="container" >
                <div class="skills ht" :style="{'--progress':progress}">&nbsp;</div>
            </div>
            <ul>
                <li>个人申报</li>
                <li>单位审核</li>
                <li>主管单位/职改办推荐</li>
                <li>报送的职改办</li>
                <li>成功</li>
            </ul>
            </div>
              
        <table>
            <tr>
                <th colspan="4">
                  职称认定
                  <div class="edit iconfont">&#xe67f;编辑</div> 
                  <div class="reset iconfont">&#xe66d;重置职改办</div>  
                  
                </th>
            </tr>
            <tr>
                <td>申报年度</td>
                <td>{{year}}</td>
                <td>报送职改办</td>
                <td>
                    {{msg}}
                </td>
            </tr>

             <tr>
                <td>拟申报资格名称</td>
                <td>{{level}}</td>
                <td>创建时间</td>
                <td>
                    {{time}}
                </td>
            </tr>
             <tr>
                <td>材料报送时间段</td>
                <td colspan="3">时间区间</td>
                
            </tr>
            
        </table>
        
        
        </div>
      
        <div class="start_btn" ref="start_btn">
            <h3>重置职该办</h3>
            <h4>申报年度：2020</h4>
            <div class="slect_start" ref="slect_start" >
                <span class="start1 " ref="start1" @click="changeLevel('初级',$event,1)" :class="{'slect_start_active':1==current}">初级</span>
                <span class="start2" ref="start2" @click="changeLevel('中级',$event,2)" :class="{'slect_start_active':2==current}">中级</span>
                <span class="start3" ref="start3" @click="changeLevel('副高级',$event,3)" :class="{'slect_start_active':3==current}">副高级</span>
            </div>
            <input type="text" class="office" v-model="msg">
            <div class="chose">
                <router-link to="step"><div class="confirm" @click="over">确认</div></router-link>
                
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
    name:'evaluation',
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
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
div{
    box-sizing: border-box;
}
.add_msg{
    display: block;
}

.clearfix:after{
     content:".";        
     display:block;        
     height:0;        
     clear:both;        
     visibility:hidden;        

}
table
        {
            border-collapse: collapse;
            
            text-align: center;
            
            width: 100%;
            /* margin: 0 auto; */
            margin-bottom: 50px;
            border-radius:10px ;
            overflow: hidden;
            box-shadow: 0 4px 4px #ccc;
            
        }
table th{
    color: #fff;
    height: 30px;
    line-height: 30px;
    background-color: #999;
}
table td, table th
{
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
}
/* table thead th
{
    background-color: #CCE8EB;
    width: 100px;
} */
    table td{
        padding: 5px;
    }
/* table tr:nth-child(odd)
{
    background: #fff;
}
table tr:nth-child(even)
{
    
    background: #ddd;
} */
table tr th{
    color: #fff;
}

table {
    text-align: center;
}
table tr td:nth-child(3),
table tr td:first-child{
    background-color: #eef1f6;
    text-align: right;
}
table tr .edit,
table tr  .reset{
    
    height: 20px;
    line-height: 18px;
    text-align: center;
    padding: 2px;
    font-size: 10px;
    float: right;
    border: 1px solid #ccc;
    margin-right: 10px;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 3px;
    color: #666;
}
table tr .edit:hover,
table tr .reset:hover{
    background-color: #ddd;
}
.edit{
    background-color: #fff;
    
}
.reset{
    background-color: #fff;
}

.box{
    /* width: 100%; */
    padding: 10px;
    margin: 10px;
    margin-top: 100px;
    border-radius: 10px;
    background-color: #FFF;
    overflow: hidden;
    box-shadow: 0 8px 8px #ccc;
}
.box h4{
    text-align: center;
    background-color: #666666;
    color: #ddd;
}
.btn{
    height: 44px;
    width: 134px;
    background-color: #7dc77d;
    line-height: 44px;
    text-align: center;
    /* font-weight: 200px; */
    /* float: right; */
    
    margin: 10px 0 20px 90% ;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 2px 5px #ccc;
}
.btn:hover{
    background-color: #7db66f;
}
.load{
margin-top: 30px;
    margin-bottom: 40px;
    margin-left: 20px;
    width: 98%;
    /* background-color: pink; */
}
.load ul{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    list-style: none;
}
 .load ul li{
     float: left;
 }
.loading{
    border: 2px solid #ccc;
    width: 100%;
    
    
    background-image: linear-gradient(to right ,#7dc77d var(--x), #fff calc(100% - var(--x)));
    
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
}
.container {
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

.skills {
    height: 10px;
    line-height: 10px;
    text-align: right;
    padding-right: 10px;
    line-height: 10px;
    color: white;

   /* border-radius: 5px 0 0 5px; */
   overflow: hidden;
}
.ht {
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
    height: 300px;
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
    margin-top: 50px;
    margin-left: 50%;
    transform: translateX(-50%);
}
.mask{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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