<template>
    <div id="projectManageContainer">
        <VuePerfectScrollbar id="projectManage">
            <header class="system">
                <el-button type="primary" size="small" icon="el-icon-plus" @click="addProject('新增项目')">新增项目</el-button>
                <el-input class="search" placeholder="请输入项目名称" prefix-icon="el-icon-search" size="small" clearable></el-input>
                <span class="count fr">共{{projectData.length}}个项目</span>
            </header>
            <section class="content">
                <el-table :data="projectData" stripe style="width: 100%">
                    <el-table-column prop="name" label="项目名称"></el-table-column>
                    <el-table-column label="文档管理">
                        <template slot-scope="scope">
                            <span class="underline" @click="toDocumentManage(scope)">查看相关文档</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="接口管理">
                        <template slot-scope="scope">
                            <span class="underline" @click="toApiManage(scope)">查看相关接口</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="version" label="版本号" width="90"></el-table-column>
                    <el-table-column prop="type" label="类型" width="90"></el-table-column>
                    <el-table-column prop="time" label="最后修改时间" width="170"></el-table-column>
                    <el-table-column label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" icon="el-icon-edit-outline" @click="setProject('修改项目',scope)">修改</el-button>
                            <el-button type="text" size="small" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </section>
        </VuePerfectScrollbar>
        <el-dialog
            :title="projectTipTitle"
            width="400px"
            :visible.sync="projectTipDialog"
            :before-close="closeDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">项目类型：</span>
                    <div class="fl dialogContentBox">
                        <el-select class="dialogSelect" v-model="projectTipData.type" size="small" placeholder="请选择项目类型">
                            <el-option label="Web" value="Web"></el-option>
                            <el-option label="App" value="App"></el-option>
                            <el-option label="PC" value="PC"></el-option>
                            <el-option label="其他" value="other"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">项目名称：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段名" size="small" v-model="projectTipData.name"></el-input>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">项目版本：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段说明" size="small" v-model="projectTipData.version"></el-input>
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
        name: "project-manage",
        components: {VuePerfectScrollbar},
        data() {
            return{
                projectData: [
                    {
                        id: 1,
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 2,
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 3,
                        name: '测试项目',
                        version: 'v 1.1',
                        type: 'Web',
                        time: '2018-01-23 23:59:59'
                    }
                ],
                projectTipDialog: false,
                projectTipTitle: null,
                projectTipData: {
                    name: null,
                    version: null,
                    type: null
                }

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
            toApiManage(scope) {
                this.$router.push({ path: '/apiManage/apiList', query: { uuid: scope.row.id } });
            },
            toDocumentManage(scope) {
                this.$router.push({ path: '/documentManage', query: { uuid: scope.row.id } });
            },
            addProject(title) {
                this.projectTipTitle = title;
                this.projectTipDialog = true;
            },
            setProject(title,scope){
                this.projectTipTitle = title;
                this.projectTipDialog = true;
                this.projectTipData.name = scope.row.name;
                this.projectTipData.version = scope.row.version;
                this.projectTipData.type = scope.row.type;
            },
            closeDialog() {
                this.projectTipDialog = false;
                this.$message({type: 'info', message: '取消'+this.projectTipTitle});
            },
            submitDialog() {
                this.projectTipDialog = false;
                this.$message({type: 'success', message: this.projectTipTitle+'完成'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    #projectManageContainer{
        height: calc(100%);
        #projectManage{
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
