<template>
    <div id="addApiContainer">
        <VuePerfectScrollbar id="addApi">
            <header class="system clear">
                <el-button size="small" icon="el-icon-arrow-left" @click="backApiList">返回详情</el-button>
                <div class="fr">
                    <el-button type="primary" size="small" @click="saveApiWarn">继续添加</el-button>
                    <el-button type="primary" size="small" @click="saveApiWarn">保存</el-button>
                </div>
            </header>
            <section class="content">
                <div class="basic">
                    <div class="clear">
                        <span class="fl label">分组：</span>
                        <div class="fl basicBox">
                            <el-cascader
                                size="small"
                                expand-trigger="hover"
                                :options="groupData"
                                v-model="basicMsgData.group"
                                placeholder="请选择分组">
                            </el-cascader>
                        </div>
                    </div>
                    <div class="clear">
                        <span class="fl label">状态：</span>
                        <div class="fl basicBox">
                            <el-select class="basicSelect" v-model="basicMsgData.status" size="small" placeholder="请选择接口状态">
                                <el-option label="启用" value="enable"></el-option>
                                <el-option label="禁用" value="disable"></el-option>
                                <el-option label="维护" value="maintain"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="clear">
                        <span class="fl label">URL：</span>
                        <div class="fl basicBox">
                            <el-select class="basicSelect" v-model="basicMsgData.type" placeholder="请选择接口类型" size="small">
                                <el-option label="POST" value="POST"></el-option>
                                <el-option label="GET" value="GET"></el-option>
                                <el-option label="DELETE" value="DELETE"></el-option>
                                <el-option label="PUT" value="PUT"></el-option>
                            </el-select><el-input class="basicUrl" placeholder="请输入内容" v-model="basicMsgData.url" size="small"><template slot="prepend">Http://</template></el-input>
                        </div>
                    </div>
                    <div class="clear">
                        <span class="fl label">名称：</span>
                        <div class="fl basicBox">
                            <el-input v-model="basicMsgData.name" placeholder="请选择接口名称" size="small"></el-input>
                        </div>
                    </div>
                </div>
                <div class="contentBox">
                    <h1>请求头部</h1>
                    <h2><el-button size="small" type="primary" plain>导入JSON</el-button><el-button size="small" type="primary" plain @click="openAddHeader">添加请求头部</el-button></h2>
                    <el-table :data="requestData.header" border style="width: 100%">
                        <el-table-column prop="label" label="标签" width="230"></el-table-column>
                        <el-table-column prop="content" label="内容"></el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="contentBox">
                    <h1>请求参数</h1>
                    <h2><el-button size="small" type="primary" plain>导入JSON</el-button><el-button size="small" type="primary" plain>导入GET参数</el-button><el-button size="small" type="primary" plain @click="openAddRequest">添加请求参数</el-button></h2>
                    <el-table :data="requestData.argument" border style="width: 100%">
                        <el-table-column prop="name" label="字段名"></el-table-column>
                        <el-table-column prop="type" label="字段类型" width="230"></el-table-column>
                        <el-table-column prop="comment" label="字段说明"></el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="contentBox">
                    <h1>返回参数</h1>
                    <h2><el-button size="small" type="primary" plain>导入JSON</el-button><el-button size="small" type="primary" plain @click="openAddResponse">添加返回参数</el-button></h2>
                    <el-table :data="responseData" border style="width: 100%">
                        <el-table-column prop="name" label="字段名"></el-table-column>
                        <el-table-column prop="type" label="字段类型" width="230"></el-table-column>
                        <el-table-column prop="comment" label="字段说明"></el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary" icon="el-icon-delete" @click="deleteFun">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </section>
        </VuePerfectScrollbar>
        <el-dialog title="添加请求头部" width="400px" :visible.sync="headerDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">头部标签：</span>
                    <div class="fl dialogContentBox">
                        <el-select class="dialogSelect" v-model="addHeaderData.label" size="small" placeholder="请选择头部标签">
                            <el-option label='Accept-Charset' value='Accept-Charset'></el-option>
                            <el-option label='Accept-Encoding' value='Accept-Encoding'></el-option>
                            <el-option label='Accept-Language' value='Accept-Language'></el-option>
                            <el-option label='Accept-Ranges' value='Accept-Ranges'></el-option>
                            <el-option label='Authorization' value='Authorization'></el-option>
                            <el-option label='Cache-Control' value='Cache-Control'></el-option>
                            <el-option label='Connection' value='Connection'></el-option>
                            <el-option label='Cookie' value='Cookie'></el-option>
                            <el-option label='Content-Length' value='Content-Length'></el-option>
                            <el-option label='Content-Type' value='Content-Type'></el-option>
                            <el-option label='Content-MD5' value='Content-MD5'></el-option>
                            <el-option label='Date' value='Date'></el-option>
                            <el-option label='Expect' value='Expect'></el-option>
                            <el-option label='From' value='From'></el-option>
                            <el-option label='Host' value='Host'></el-option>
                            <el-option label='If-Match' value='If-Match'></el-option>
                            <el-option label='If-Modified-Since' value='If-Modified-Since'></el-option>
                            <el-option label='If-None-Match' value='If-None-Match'></el-option>
                            <el-option label='If-Range' value='If-Range'></el-option>
                            <el-option label='If-Unmodified-Since' value='If-Unmodified-Since'></el-option>
                            <el-option label='Max-Forwards' value='Max-Forwards'></el-option>
                            <el-option label='Origin' value='Origin'></el-option>
                            <el-option label='Pragma' value='Pragma'></el-option>
                            <el-option label='Proxy-Authorization' value='Proxy-Authorization'></el-option>
                            <el-option label='Range' value='Range'></el-option>
                            <el-option label='Referer' value='Referer'></el-option>
                            <el-option label='TE' value='TE'></el-option>
                            <el-option label='Upgrade' value='Upgrade'></el-option>
                            <el-option label='User-Agent' value='User-Agent'></el-option>
                            <el-option label='Via' value='Via'></el-option>
                            <el-option label='Warning' value='Warning'></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">头部内容：</span>
                    <div class="fl dialogContentBox">
                        <el-input v-model="addHeaderData.content" placeholder="请输入头部内容" size="small"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="small" @click="headerDialog = false">取 消</el-button>
                <el-button size="small" type="primary" @click="headerDialog = false">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加请求参数" width="400px" :visible.sync="requestDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">字段名：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段名" size="small" v-model="addRequestData.name"></el-input>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">字段类型：</span>
                    <div class="fl dialogContentBox">
                        <el-select class="dialogSelect" v-model="addRequestData.type" size="small" placeholder="请选择字段类型">
                            <el-option label="String" value="String"></el-option>
                            <el-option label="Number" value="Number"></el-option>
                            <el-option label="Boolean" value="Boolean"></el-option>
                            <el-option label="Object" value="Object"></el-option>
                            <el-option label="Array" value="Array"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">字段说明：</span>
                    <div class="fl dialogContentBox">
                        <el-input v-model="addRequestData.comment" placeholder="请选择字段说明" size="small"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="small" @click="requestDialog = false">取 消</el-button>
                <el-button size="small" type="primary" @click="requestDialog = false">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加返回参数" width="400px" :visible.sync="responseDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">字段名：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请选择字段名" size="small" v-model="addResponseData.name"></el-input>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">字段类型：</span>
                    <div class="fl dialogContentBox">
                        <el-select class="dialogSelect" v-model="addResponseData.type" size="small" placeholder="请选择字段类型">
                            <el-option label="String" value="String"></el-option>
                            <el-option label="Number" value="Number"></el-option>
                            <el-option label="Boolean" value="Boolean"></el-option>
                            <el-option label="Object" value="Object"></el-option>
                            <el-option label="Array" value="Array"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="clear">
                    <span class="fl dialogContentLabel">字段说明：</span>
                    <div class="fl dialogContentBox">
                        <el-input v-model="addResponseData.comment" placeholder="请选择字段说明" size="small"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="small" @click="responseDialog = false">取 消</el-button>
                <el-button size="small" type="primary" @click="responseDialog = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "add-api",
        components: {VuePerfectScrollbar},
        data() {
            return{
                groupData: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                    {
                                        value: 'yizhi',
                                        label: '一致'
                                    },
                                    {
                                        value: 'fankui',
                                        label: '反馈'
                                    },
                                    {
                                        value: 'xiaolv',
                                        label: '效率'
                                    },
                                    {
                                        value: 'kekong',
                                        label: '可控'
                                    }
                                ]
                            },
                            {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                    {
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    },
                                    {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                basicMsgData: {
                    group: null,
                    status: null,
                    url: null,
                    type: null,
                    name: null
                },
                responseData: [
                    {
                        name: 'status',
                        type: 'Number',
                        comment: '1：表示启用，2表示禁用，3表示维护'
                    }
                ],
                requestData: {
                    header: [
                        {
                            label: 'Content-Type',
                            content: '我是请求头部内容'
                        }
                    ],
                    argument: [
                        {
                            name: 'uuid',
                            type: 'String',
                            comment: '该条数据的uuid'
                        }
                    ]
                },
                headerDialog: false,
                addHeaderData: {
                    label: null,
                    content: null
                },
                requestDialog: false,
                addRequestData: {
                    name: null,
                    type: null,
                    comment: null
                },
                responseDialog: false,
                addResponseData: {
                    name: null,
                    type: null,
                    comment: null
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
            openAddHeader() {
                this.headerDialog = true;
            },
            openAddRequest() {
                this.requestDialog = true;
            },
            openAddResponse() {
                this.responseDialog = true;
            },
            saveApiWarn() {
                this.$msgbox({
                    title: '错误',
                    message: '编辑失败，请检查信息是否填写完整！',
                    type: 'error',
                    showCancelButton: false,
                    showConfirmButton: false
                });
            },
            backApiList() {
                this.$router.push({ path: '/apiManage/apiList/'+this.$route.params.projectId });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #addApiContainer{
        height: calc(100%);
        #addApi{
            height: calc(100% - 20px);
            padding: 0 20px 20px;
            .content{
                .basic{
                    background-color: #fff;
                    border: 1px solid #e5e5e5;
                    padding: 10px;
                    .label{
                        width: 60px;
                        font-size: 14px;
                        line-height: 40px;
                        font-weight: 600;
                    }
                    .basicBox{
                        height: 40px;
                        line-height: 40px;
                        width: calc(100% - 60px);
                    }
                    .basicSelect{
                        width: 150px;
                        margin-right: 10px;
                    }
                    .basicUrl{
                        width: calc(100% - 160px);
                    }
                }
                .contentBox{
                    margin-top: 10px;
                    background-color: #fff;
                    h1{
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        font-weight: 500;
                        border: 1px solid #e5e5e5;
                        padding-left: 10px;
                    }
                    h2{
                        height: 50px;
                        line-height: 50px;
                        padding-left: 10px;
                        border: 1px solid #e5e5e5;
                        border-top: none;
                        border-bottom: none;
                    }
                }
            }
        }
        .dialogContent{
            .dialogContentLabel{
                height: 40px;
                line-height: 40px;
                width: 70px;
            }
            .dialogContentBox{
                height: 40px;
                line-height: 40px;
                width: calc(100% - 70px);
                .dialogSelect{
                    width: calc(100%);
                }
            }
        }
    }
</style>
