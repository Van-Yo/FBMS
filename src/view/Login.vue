<template>
    <div class="container-area flex-ac flex-pc">
        <div class="model"></div>
        <div class="login-area">
            <el-button type="primary" @click="login" :loading="loadingFlag">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loadingFlag:false
        };
    },
    created(){},
    methods: {
        login(){
            this.loadingFlag = true;
            setTimeout(()=>{
                this.loadingFlag = false;
                this.$router.push('/');
            },3000)
        }
    },
    components: {}
};
</script>

<style lang="scss" scoped>
.container-area{
    width: 100vw;
    height: 100vh;
    background: url('../assets/images/login-bg.jpg') no-repeat;
    background-size: 100% 100% ;
    .model {
        z-index: 99;
        position: fixed;
        left: 0 ;
        right: 0;
        bottom: 0;
        top: 0;
        background:rgba(0,0,0,0.3)
    }
    .login-area{
        z-index: 100;
    }
}
.flex-ac {
}
.flex-pc {
}
</style>
