<template>
    <div class="menu">
        <div class="center">
            <ul>
            
            <router-link to="main"> <li>首页</li> </router-link>
            
            <li>个人资料</li>
            <li>证书管理</li>
            <li class="drop_down">
               职称申报
                <ul class="item">
                    <router-link to="Evaluation"><li>职称认定</li></router-link>
                    <router-link to="comeva"><li>职称评审</li></router-link>
                     <router-link to="corporate_info"><li>职称审核</li></router-link>
                </ul>
                
            </li>
            <li>报表下载</li>
            <li>费用管理</li>
            <li>帮助中心</li>
            <li>意见建议</li>
            </ul>
        </div>
        
    
    </div>
</template>
<script>
export default {
    name:'Menu'
    
}
</script>
<style scoped>
.menu {
    position: relative;
    background-color: #444444;
    /* overflow: hidden; */
    /* z-index: 1; */
  
}
.menu ul{
    display: flex;
    
    justify-content: space-between;
    flex-direction: row;
}
.menu ul li{
    height: 20px;
    line-height: 20px;
    list-style: none;
    float: left;
    /* background-color: pink; */
    padding: 2px 5px;
    margin-right: 10px;
    color: #ddd;
    font-size: 14px;
    cursor: pointer;
}
.menu .item{
    
    width: 150px;
    color: #ddd;
    position: absolute;
    top: -58px;
    /* top: 24px; */
    /* left: 646px; */
    background: #222;
    display: flex;
    flex-direction: column;
   justify-content: center;
   z-index: -1;
   
}
.menu .item li{
    width: 93.3%;
    padding: 3px 0 3px 10px;
    margin: 3px 0 0;
    background-color: #666;
}
.menu .item li:hover{
    background-color: #777;
    color: #fff;
}
.drop_down{
    /* z-index: -1; */
    position: relative;
}

.drop_down:hover .item{
    top: 24px;
    z-index: 1;
}
</style>