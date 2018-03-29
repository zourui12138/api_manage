<template>
    <div id="documentManageContainer">
        <VuePerfectScrollbar id="documentManage">
            <header class="system">
                <el-button type="primary" size="small" icon="el-icon-upload" @click="openDialog">上传文档</el-button>
                <el-input class="search" placeholder="请输入文档名称/文档类型" prefix-icon="el-icon-search" size="small" clearable></el-input>
                <span class="count fr">共{{documentData.length}}个文档</span>
            </header>
            <section class="content">
                <el-table :data="documentData" stripe style="width: 100%">
                    <el-table-column prop="name" label="文档名称"></el-table-column>
                    <el-table-column prop="type" label="文档类型"></el-table-column>
                    <el-table-column prop="time" label="上传时间"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" icon="el-icon-download" @click="downloadFun">下载</el-button>
                            <el-button type="text" size="small" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </section>
        </VuePerfectScrollbar>
        <el-dialog
            title="文档上传"
            :visible.sync="documentTipDialog"
            width="400px"
            :before-close="closeDialog">
            <el-upload
                ref="upload"
                :limit="5"
                action="https://jsonplaceholder.typicode.com/posts/"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取上传文档</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，不超过500kb，且上传文件个数上限为5</div>
            </el-upload>
            <div slot="footer">
                <el-button size="small" @click="closeDialog">取 消</el-button>
                <el-button size="small" type="primary" @click="submitDialog">上传到服务器</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "document-manage",
        components: {VuePerfectScrollbar},
        data() {
            return{
                documentData: [
                    {
                        id: 1,
                        name: '测试项目文档1',
                        type: 'docx',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 1,
                        name: '测试项目文档1',
                        type: 'docx',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 1,
                        name: '测试项目文档1',
                        type: 'docx',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 1,
                        name: '测试项目文档1',
                        type: 'docx',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 1,
                        name: '测试项目文档1',
                        type: 'docx',
                        time: '2018-01-23 23:59:59'
                    }
                ],
                documentTipDialog: false
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
            downloadFun() {
                this.$confirm('此操作将下载该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({type: 'success', message: '已开始下载'});
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消下载'});
                });
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            openDialog() {
                this.documentTipDialog = true;
            },
            closeDialog() {
                this.documentTipDialog = false;
                this.$message({type: 'info', message: '取消文档上传'});
            },
            submitDialog() {
                this.documentTipDialog = false;
                this.$message({type: 'success', message: '完成文档上传'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    #documentManageContainer{
        height: calc(100%);
        #documentManage{
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
