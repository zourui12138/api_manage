<template>
    <div id="platformManageContainer">
        <VuePerfectScrollbar id="platformManage">
            <header class="system">
                <el-button type="primary" size="small" icon="el-icon-plus" @click="addPlatform('新增平台(应用)')">新增平台(应用)</el-button>
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
                            <el-button type="text" size="small" icon="el-icon-edit-outline" @click="setPlatform('修改平台(应用)',scope)">修改</el-button>
                            <el-button type="text" size="small" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </section>
        </VuePerfectScrollbar>
        <el-dialog
            :title="platformTipTitle"
            width="400px"
            :visible.sync="platformTipDialog"
            :before-close="closeDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">系统类型：</span>
                    <div class="fl dialogContentBox">
                        <el-select class="dialogSelect" v-model="platformTipData.type" size="small" placeholder="请选择项目类型">
                            <el-option label="测试平台" value="测试平台"></el-option>
                            <el-option label="服务平台" value="服务平台"></el-option>
                            <el-option label="演示平台" value="演示平台"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">平台名称：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段名" size="small" v-model="platformTipData.name"></el-input>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">访问地址：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段说明" size="small" v-model="platformTipData.ip"></el-input>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">端口号：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段说明" size="small" v-model="platformTipData.port"></el-input>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">主机名称：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段说明" size="small" v-model="platformTipData.hostIp"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="small" @click="closeDialog">取 消</el-button>
                <el-button size="small" type="primary" @click="submitDialog">确 定</el-button>
            </div>
        </el-dialog>
    </div>
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
                ],
                platformTipData: {
                    name: null,
                    type: null,
                    ip: null,
                    port: null,
                    hostIp: null
                },
                platformTipTitle: null,
                platformTipDialog: false
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
            addPlatform(title) {
                this.platformTipTitle = title;
                this.platformTipDialog = true;
            },
            setPlatform(title,scope){
                this.platformTipTitle = title;
                this.platformTipDialog = true;
                this.platformTipData.name = scope.row.name;
                this.platformTipData.ip = scope.row.ip;
                this.platformTipData.type = scope.row.type;
                this.platformTipData.port = scope.row.port;
                this.platformTipData.hostIp = scope.row.hostIp;
            },
            closeDialog() {
                this.platformTipDialog = false;
                this.$message({type: 'info', message: '取消'+this.platformTipTitle});
            },
            submitDialog() {
                this.platformTipDialog = false;
                this.$message({type: 'success', message: this.platformTipTitle+'完成'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    #platformManageContainer{
        height: calc(100%);
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
    }
</style>
