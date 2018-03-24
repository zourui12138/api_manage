<template>
    <div id="apiDetail" class="clear">
        <GroupList class="fl" :groupData="groupData"/>
        <div class="apiDetail fr">
            <header class="system clear">
                <el-button size="small" icon="el-icon-arrow-left" @click="backApiList">返回列表</el-button>
                <el-button type="primary" size="small" @click="toSetApi">修改</el-button>
                <el-button type="primary" size="small" icon="el-icon-delete" @click="deleteFun">删除</el-button>
            </header>
            <VuePerfectScrollbar class="apiDetailContent">
                <div class="apiDetailTitle clear">
                    <header class="fl">启用</header>
                    <section class="fl">
                        <p><button>HTTP</button><span>add/aaa</span></p>
                        <p><button>POST</button><span>测试接口</span></p>
                    </section>
                </div>
                <div class="apiBox">
                    <h1>请求头部</h1>
                    <el-table :data="headerData" border :header-cell-style="{backgroundColor:'#FAFAFA'}" style="width: 100%">
                        <el-table-column prop="label" label="标签" width="230"></el-table-column>
                        <el-table-column prop="content" label="内容"></el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="apiBox">
                    <h1>请求参数</h1>
                    <el-table :data="requestData" border :header-cell-style="{backgroundColor:'#FAFAFA'}" style="width: 100%">
                        <el-table-column prop="name" label="字段名"></el-table-column>
                        <el-table-column prop="type" label="字段类型" width="230"></el-table-column>
                        <el-table-column prop="comment" label="字段说明"></el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="apiBox">
                    <h1>返回参数</h1>
                    <el-table :data="responseData" border :header-cell-style="{backgroundColor:'#FAFAFA'}" style="width: 100%">
                        <el-table-column prop="name" label="字段名"></el-table-column>
                        <el-table-column prop="type" label="字段类型" width="230"></el-table-column>
                        <el-table-column prop="comment" label="字段说明"></el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import GroupList from '~/components/groupList'

    export default {
        name: "api-detail",
        components: {VuePerfectScrollbar, GroupList},
        data() {
            return{
                groupData: [
                    {
                        id: '1',
                        label: '所有接口'
                    },
                    {
                        id: '2',
                        label: '接口回收站'
                    },
                    {
                        id: '3',
                        label: '接口分组1',
                        children: [
                            {
                                id: '3-1',
                                label: '接口分组1-1'
                            },
                            {
                                id: '3-2',
                                label: '接口分组1-2'
                            }
                        ]
                    },
                    {
                        id: '4',
                        label: '接口分组2',
                        children: [
                            {
                                id: '4-1',
                                label: '接口分组2-1'
                            },
                            {
                                id: '4-2',
                                label: '接口分组2-2'
                            }
                        ]
                    },
                    {
                        id: '5',
                        label: '接口分组3'
                    }
                ],
                headerData: [
                    {
                        label: 'Content-Type',
                        content: '我是请求头部内容'
                    }
                ],
                requestData: [
                    {
                        name: 'uuid',
                        type: 'String',
                        comment: '该条数据的uuid'
                    }
                ],
                responseData: [
                    {
                        name: 'status',
                        type: 'Number',
                        comment: '1：表示启用，2表示禁用，3表示维护'
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
            backApiList() {
                this.$router.push({path: '/apiManage/apiList'});
            },
            toSetApi(){
                this.$router.push({path: '/apiManage/setApi'});
            }
        },
        beforeMount() {
            console.log(this.$route.params);
        }
    }
</script>

<style lang="scss" scoped>
    #apiDetail{
        height: calc(100% - 20px);
        padding: 0 20px 20px;
        .apiDetail{
            height: 100%;
            width: calc(100% - 250px);
            .apiDetailContent{
                height: calc(100% - 54px);
                .apiDetailTitle{
                    padding: 10px;
                    border: 1px solid #e5e5e5;
                    background-color: #fff;
                    header{
                        width: 48px;
                        height: 48px;
                        line-height: 48px;
                        text-align: center;
                        color: #fff;
                        background-color: #47af4e;
                        border-radius: 4px;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    section{
                        margin-left: 10px;
                        p{
                            height: 20px;
                            line-height: 20px;
                            font-size: 14px;
                            button{
                                height: 20px;
                                width: 54px;
                                font-size: 14px;
                                border-radius: 4px;
                                color: #fff;
                                margin-right: 14px;
                                background-color: #47af4e;
                                cursor: pointer;
                            }
                        }
                        p:first-child{
                            margin-bottom: 8px;
                            button{
                                background-color: #28c59a;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
