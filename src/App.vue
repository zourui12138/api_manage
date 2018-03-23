<template>
    <div id="app">
        <header class="header"></header>
        <section class="section">
            <aside class="aside">
                <el-menu default-active="1">
                    <el-menu-item index="1"><i class="el-icon-edit-outline"></i><span slot="title">接口管理</span></el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-menu"></i><span slot="title">数据库管理</span></el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-menu"></i><span slot="title">文档管理</span></el-menu-item>
                </el-menu>
            </aside>
            <div class="main"><router-view/></div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'App'
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
