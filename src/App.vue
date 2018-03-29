<template>
    <div id="app">
        <header class="header clear">
            <div class="fl logo"></div>
            <ul class="breadcrumb clear fl">
                <li class="fl" v-for="(i, index) in breadcrumbList">
                    <span @click="breadcrumbCallback(i)">{{i}}</span><i class="el-icon-arrow-right" v-show="index !== breadcrumbList.length-1"></i>
                </li>
            </ul>
        </header>
        <section class="section">
            <aside class="aside">
                <el-menu router :default-active="asideNav">
                    <el-menu-item index="/projectManage"><i class="el-icon-edit-outline"></i><span slot="title">项目管理</span></el-menu-item>
                    <el-menu-item index="/platformManage"><i class="el-icon-menu"></i><span slot="title">平台与应用管理</span></el-menu-item>
                </el-menu>
            </aside>
            <div class="main"><router-view/></div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return{
                asideNav: null
            }
        },
        computed: {
            breadcrumbList() {
                let arr;
                switch (this.$route.name){
                    case 'projectManage' : arr = ['项目管理'];break;
                    case 'documentManage' : arr = ['项目管理','测试项目','文档管理'];break;
                    case 'apiList' : arr = ['项目管理','测试项目','API接口'];break;
                    case 'apiDetail' : arr = ['项目管理','测试项目','API接口'];break;
                    case 'addApi' : arr = ['项目管理','测试项目','API接口'];break;
                    case 'setApi' : arr = ['项目管理','测试项目','API接口'];break;
                    case 'platformManage' : arr = ['平台与应用管理'];break;
                }
                return arr;
            }
        },
        methods: {
            breadcrumbCallback(arg) {
                arg === '项目管理' && this.$router.push({path: '/projectManage',});
            }
        },
        beforeMount() {
            this.asideNav =
                this.$route.name === 'platformManage' ? '/platformManage' : '/projectManage';
        }
    }
</script>

<style lang="scss">@import "./assets/css/app";</style>

<style lang="scss" scoped>
    #app{
        height: calc(100%);
        .header{
            height: 50px;
            background-color: #fff;
            border-bottom: 1px solid #e5e5e5;
            .logo{
                width: 241px;
                height: 50px;
                line-height: 50px;
            }
            .breadcrumb{
                height: 50px;
                line-height: 50px;
                width: calc(100% - 261px);
                margin-left: 20px;
                color: #999;
                font-size: 14px;
                li:first-child:hover{
                    cursor: pointer;
                    color: #47af4e;
                }
                i{
                    margin: 0 4px;
                }
            }
        }
        .section{
            height: calc(100% - 51px);
            .aside{
                position: fixed;
                top: 51px;
                left: 0;
                width: 240px;
                border-right: 1px solid #e5e5e5;
                background-color: #fff;
                height: calc(100%);
                .el-menu-item.is-active{
                    background-color: #E0F7E0;
                }
            }
            .main{
                height: calc(100%);
                width: calc(100% - 241px);
                margin-left: 241px;
            }
        }
    }
</style>
