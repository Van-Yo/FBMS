<template>
    <div class="home-container">
        <transition name="el-zoom-in-center">
            <div class="before-show-page" v-if="showBeforePageFlag">
                <div>欢迎使用</div>
            </div>
        </transition>
        <el-container class="container">
            <el-aside
                width="450px"
                ref="aside"
                :class="{ hiddenAside: !asideShowFlag }"
                >Aside</el-aside
            >
            <el-container>
                <el-header class="flex-ac">
                    <!-- <router-link to="/index">首页</router-link>
                  <router-link to="/user">user</router-link> -->
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        text-color="#fff"
                    >
                        <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3"
                            ><router-link to="/user">user</router-link></el-menu-item
                        >
                    </el-menu>
                    <el-button type="primary" @click="changeThemeType">一键换色</el-button>
                    {{$store.state.themeType}}
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer class="flex-pb flex-ac">
                    <i
                        class="el-icon-s-tools aside-controller"
                        @click="asideShowFlag = !asideShowFlag"
                    ></i>
                    <div>footer</div></el-footer
                >
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showBeforePageFlag: false,
            asideShowFlag: true,
            activeIndex: '1',
            themeType:'default'
        };
    },
    created() {
        this.initPage();
    },
    methods: {
        initPage() {
            setTimeout(() => {
                this.showBeforePageFlag = false;
            }, 3000);
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        changeThemeType(){
            if(this.themeType == 'default'){
                this.themeType = 'light'
                this.$store.commit('changeThemeType','light')
            }else{
                this.themeType = 'default'
                this.$store.commit('changeThemeType','default')
            }
            
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.hiddenAside {
    width: 0 !important;
}
.home-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    ::v-deep .el-menu{
      background :none;
    }
    ::v-deep .el-submenu__title:hover{
        color:$darkColor !important;
        background: none;
    }
    ::v-deep .el-menu-item:hover{
        color:$darkColor !important;
        background: none;
    }
    ::v-deep .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
        background: none;
        
    }
    ::v-deep .el-menu--horizontal>.el-menu-item.is-active{
        color:$darkColor !important;
    }
    .container {
        .el-menu-demo {
        }
        .flex-pb {
            .el-icon-s-tools {
            }
            .aside-controller {
            }
            div {
            }
        }
        .flex-ac {
        }
    }
    .before-show-page {
        div {
        }
    }
    .el-menu-demo {
        a {
        }
    }
    .flex-pb {
        .el-icon-s-tools {
        }
        .aside-controller {
        }
        div {
        }
    }
    .flex-ac {
    }
    .aside-controller {
        font-size: 30px;
        cursor: pointer;
        color: $brightColor;
    }
}
.before-show-page {
  z-index: 99;
    background: $themeColor;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 60px;
}
.el-header,
.el-footer {
    @include themeify {
      background-color: themed('main-color');
    }
    // background-color: $themeColor;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    @include themeify {
      background-color: themed('main-color');
    }
    color: #fff;
    text-align: center;
    line-height: 200px;
    transition: all 0.3s;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>