<template>
    <div id="app">
        <header class="header clear">
            <div class="fl logo"></div>
            <div class="fl breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="i in breadcrumbList" :key="i.id">{{i.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </header>
        <section class="section">
            <aside class="aside">
                <el-menu router :default-active="asideNav">
                    <el-menu-item index="/projectManage"><i class="el-icon-edit-outline"></i><span slot="title">接口管理</span></el-menu-item>
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
                    case 'projectList' :
                        arr = [
                            {
                                id: '1',
                                name: '接口管理',
                                path: ''
                            }
                        ];
                        break;
                    case 'apiList' :
                        arr = [
                            {
                                id: '1',
                                name: '接口管理',
                                path: ''
                            },
                            {
                                id: '2',
                                name: 'Api列表',
                                path: ''
                            }
                        ];
                        break;
                    case 'apiDetail' :
                        arr = [
                            {
                                id: '1',
                                name: '接口管理',
                                path: ''
                            },
                            {
                                id: '2',
                                name: 'Api列表',
                                path: ''
                            },
                            {
                                id: '3',
                                name: 'Api详情',
                                path: ''
                            }
                        ];
                        break;
                    case 'addApi' :
                        arr = [
                            {
                                id: '1',
                                name: '接口管理',
                                path: ''
                            },
                            {
                                id: '2',
                                name: '项目列表',
                                path: ''
                            },
                            {
                                id: '3',
                                name: 'Api列表',
                                path: ''
                            },
                            {
                                id: '4',
                                name: '添加Api',
                                path: ''
                            }
                        ];
                        break;
                    case 'setApi' :
                        arr = [
                            {
                                id: '1',
                                name: '接口管理',
                                path: ''
                            },
                            {
                                id: '2',
                                name: '项目列表',
                                path: ''
                            },
                            {
                                id: '3',
                                name: 'Api列表',
                                path: ''
                            },
                            {
                                id: '4',
                                name: '修改Api',
                                path: ''
                            }
                        ];
                        break;
                }
                return arr;
            }
        },
        methods: {},
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
                .el-breadcrumb{
                    height: 50px;
                    line-height: 50px;
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
