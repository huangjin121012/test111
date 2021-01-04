<template>
<div>
    <header>
        <div class="center">
            <a href="javascript:;">
                <span class="logo">&#xe74d;</span>
                <div class="tit">职 称 网</div>
            </a>
            <div class="return">
                <div class="btn">返回</div>
            </div>

        </div>

    </header>
    <div class="bd ">
        <div class="center">
            <div class="chose ">
                <span>职称管理</span>

                <div class="tit">这里是一些口号，优势之类的东西展示</div>



                <router-link to="/self">   
                    <div class="self">
                        <span class="user">&#xe69c;</span>
                        <span>我是个人用户</span>
                    </div>
                </router-link>
                <router-link to="/unit">
                    <div class="unit">
                        <span class="user">&#xe69c;</span>
                        <span>我是单位用户</span>
                    </div>
                </router-link>
            </div>


        </div>



    </div>
</div>
    
</template>
<style scoped>
@font-face {
    font-family: 'iconfont';
    src: url('../assets/font/iconfont.eot');
    src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'), url('../assets/font/iconfont.woff2') format('woff2'), url('../assets/font/iconfont.woff') format('woff'), url('../assets/font/iconfont.ttf') format('truetype'), url('../assets/font/iconfont.svg#iconfont') format('svg');
}

body {
    display: flex;
    background-color: #d7d7d7;
    flex-direction: column;
    height: 100vh;
}

header {
    height: 70px;
    background-color: #060606;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 3px 3px 8px #d7d7d7;
    /* overflow: hidden; */
}

header a {
    display: inline-block;
    height: 70px;
    text-decoration: none;
    display: inline-block;
    /* background-color: blue; */
}

.logo {
    display: inline-block;
    /* background-color: #fff; */
    color: #d7d7d7;
    margin-top: -7px;
    vertical-align: middle;
    font-family: "iconfont" !important;
    font-size: 50px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

header .tit {
    height: 70px;
    line-height: 70px;
    color: #d7d7d7;
    font-size: 20px;
    font-weight: 900;
    margin-left: 50px;
}

header .return {
    display: flex;
    height: 70px;
    width: 70px;
    /* background-color: #fff; */
    float: right;
    justify-content: center;
    align-items: center;
}

header .return .btn {
    border: 2px solid#d7d7d7;
    padding: 5px;
    border-radius: 30%;
    transition: all .2s;
    color: #d7d7d7;
}

header .return .btn:hover {
    box-shadow: 2px 1px 8px #d7d7d7;
    cursor: pointer;
}

header a div {
    display: inline-block;
}

.bd {
    position: relative;
    display: flex;
    flex: 1;
    height: 100vh;
    /* width: 100%; */
    background: url(../assets/img/bd.png) no-repeat;
    background-size: 50%, 50%;
    background-position: 50px -70px;
}

.bd .center {
    position: relative;
}

.bd .chose {
    perspective: 800px;
    text-align: center;
    position: absolute;
    right: 0;
    background: url(../assets/img/a.png) no-repeat;
    background-size: 80% 100%;
    margin-top: 50px;
    height: 500px;
    width: 350px;
    border-radius: 20px;
    background-color: #eee;
    box-shadow: 3px 3px 8px #bbb;
}

.bd .chose span {
    display: block;
    margin-top: 30px;
    font-weight: 900;
    color: #060606;
}

.bd .chose .tit {
    margin-top: 50px;
    height: 200px;
    width: 100%;
}

.chose .self,
.chose .unit {
    height: 50px;
    width: 70%;
    border: 1px solid #ccc;
    margin-top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    background-color: #ccc;
    cursor: pointer;
    transition: all .2s;
}

.chose .self:hover,
.chose .unit:hover {
    background-color: #bbb;
}

.chose .self span,
.chose .unit span {
    display: inline;
    margin-top: 0;
    line-height: 50px;
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
}

.chose .user {
    display: inline;
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
export default {
    name:'Index',
}
</script>