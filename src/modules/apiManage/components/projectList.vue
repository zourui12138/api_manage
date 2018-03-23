<template>
    <VuePerfectScrollbar id="projectList">
        <header class="system">
            <el-button type="primary" size="small" icon="el-icon-plus">新增项目</el-button>
            <el-input class="search" placeholder="请输入项目名称" prefix-icon="el-icon-search" size="small" clearable></el-input>
            <span class="count fr">共{{projectData.length}}个项目</span>
        </header>
        <section class="content">
            <el-table :data="projectData" style="width: 100%" @row-click="toApiList">
                <el-table-column prop="name" label="项目名称"></el-table-column>
                <el-table-column prop="version" label="版本号" width="90"></el-table-column>
                <el-table-column prop="type" label="类型" width="90"></el-table-column>
                <el-table-column prop="time" label="最后修改时间" width="170"></el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" icon="el-icon-edit-outline">修改</el-button>
                        <el-button type="text" size="small" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </section>
    </VuePerfectScrollbar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "project-list",
        components: {VuePerfectScrollbar},
        data() {
            return{
                projectData: [
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    }
                ]
            }
        },
        methods: {
            deleteFun() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({type: 'success', message: '删除成功!'});
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            toApiList(row) {
                console.log(row);
                this.$router.push({ path: '/apiManage/apiList/12138' })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #projectList{
        height: calc(100% - 20px);
        padding: 0 20px 20px;
        .content{
            border: 1px solid #e5e5e5;
            border-bottom: none;
            border-radius: 6px;
            overflow: hidden;
        }
    }
</style>
