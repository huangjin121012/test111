<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import Index from './components/index.vue'

export default {
  name: "app"
};
</script>

<style>
router-link,
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #d7d7d7;
}

div {
  box-sizing: border-box;
}

@font-face {
  font-family: "iconfont";
  src: url("./assets/font/iconfont.eot");
  src: url("./assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/iconfont.woff2") format("woff2"),
    url("./assets/font/iconfont.woff") format("woff"),
    url("./assets/font/iconfont.ttf") format("truetype"),
    url("./assets/font/iconfont.svg#iconfont") format("svg");
}

.center {
  margin: 0 auto;
  width: 1024px;
  /* background-color: pink; */
}

.common_header {
  margin: 0 auto;
  width: 1024px;
  display: flex;
  justify-content: space-between;
}

header {
  display: flex;
  height: 45px;
  width: 100%;
  background-color: #313131;
}

header span {
  /* background-color: #fff; */
  line-height: 45px;
  color: #d7d7d7;
  font-weight: 700;
}

header .tit {
  font-size: 20px;
}

.help,
.logo {
  display: inline-block;
  /* background-color: #fff; */
  color: #d7d7d7;
  vertical-align: middle;
  font-family: "iconfont" !important;
  font-size: 30px;
  font-weight: 900;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  text-shadow: 5px 0px 3px rgba(255, 255, 255, 0.5);
}

.help {
  cursor: pointer;
}
</style>
