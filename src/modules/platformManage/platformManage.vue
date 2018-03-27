<template>
    <VuePerfectScrollbar id="platformManage">
        <header class="system">
            <el-button type="primary" size="small" icon="el-icon-plus">新增平台(应用)</el-button>
            <el-input class="search" placeholder="请输入平台(应用)名称" prefix-icon="el-icon-search" size="small" clearable></el-input>
            <span class="count fr">共{{platformData.length}}个平台(应用)</span>
        </header>
        <section class="content">
            <el-table :data="platformData" stripe style="width: 100%">
                <el-table-column label="平台(应用)名称">
                    <template slot-scope="scope"><span class="underline">{{scope.row.name}}</span></template>
                </el-table-column>
                <el-table-column prop="ip" label="访问地址"></el-table-column>
                <el-table-column prop="port" label="端口号" width="120"></el-table-column>
                <el-table-column prop="type" label="系统类型" width="120"></el-table-column>
                <el-table-column prop="hostIp" label="主机名称" width="140"></el-table-column>
                <el-table-column label="操作" width="140">
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
        name: "platform-manage",
        components: {VuePerfectScrollbar},
        data() {
            return{
                platformData: [
                    {
                        name: '优易区块链新应用',
                        type: '测试平台',
                        ip: 'http://210.13.50.98:10154/',
                        hostIp: '210.133.255.255',
                        port: '10154'
                    },
                    {
                        name: '优易区块链新应用',
                        type: '测试平台',
                        ip: 'http://210.13.50.98:10154/',
                        hostIp: '210.13.50.98',
                        port: '10154'
                    },
                    {
                        name: '优易区块链新应用',
                        type: '测试平台',
                        ip: 'http://210.13.50.98:10154/',
                        hostIp: '210.13.50.98',
                        port: '10154'
                    },
                    {
                        name: '优易区块链新应用',
                        type: '测试平台',
                        ip: 'http://210.13.50.98:10154/',
                        hostIp: '210.13.50.98',
                        port: '10154'
                    },
                    {
                        name: '优易区块链新应用',
                        type: '测试平台',
                        ip: 'http://210.13.50.98:10154/',
                        hostIp: '210.13.50.98',
                        port: '10154'
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    #platformManage{
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
