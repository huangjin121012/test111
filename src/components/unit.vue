<template>
    <div class="unit">
        <login-unit/>
    </div>
</template>
<script>
import Head from '../views/head';
import loginUnit from '../views/login_unit';
export default {
    name:'Unit',
    components:{
        Head,
        loginUnit
    }

}
</script>
<style scoped>
.unit{
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    background: #313131;
    /* fallback for old browsers */
    background: -moz-linear-gradient(to bottom, #313131, #C9964A);
    /* Firefox 3.6-15, Firefox 16-60 */
    background: -webkit-linear-gradient(to bottom, #313131, #C9964A);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #313131, #C9964A);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>