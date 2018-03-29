<template>
    <div id="apiList" class="clear">
        <GroupList class="fl" :groupData="groupData"/>
        <div class="apiList fl">
            <header class="system clear">
                <el-button type="primary" size="small" icon="el-icon-plus" @click="toAddApi">添加接口</el-button>
                <el-input class="search" placeholder="请输入接口名称或更新人" prefix-icon="el-icon-search" size="small" clearable></el-input>
                <span class="count fr">共{{apiData.length}}个接口</span>
            </header>
            <VuePerfectScrollbar class="content">
                <el-table :data="apiData" @row-click="toApiDetail" node-key="id" stripe style="width: 100%">
                    <el-table-column label="接口名称">
                        <template slot-scope="scope">
                            <i class="apiStatus" :class="[scope.row.status === '1' && 'enable',scope.row.status === '2' && 'disable',scope.row.status === '3' && 'maintain']"></i>
                            <span>{{ scope.row.apiName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="接口URI">
                        <template slot-scope="scope">
                            <i class="apiType fl">{{ scope.row.type }}</i>
                            <span>{{ scope.row.uri }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="creator" label="创建者" width="110"></el-table-column>
                    <el-table-column prop="mender" label="最新更新者" width="110"></el-table-column>
                    <el-table-column prop="time" label="更新时间" width="170"></el-table-column>
                    <el-table-column label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" icon="el-icon-edit-outline" @click.stop="toSetApi(scope)">修改</el-button>
                            <el-button type="text" size="small" icon="el-icon-delete" @click.stop="deleteFun">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </VuePerfectScrollbar>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import GroupList from '~/components/groupList'

    export default {
        name: "api-list",
        components: {VuePerfectScrollbar, GroupList},
        data() {
            return{
                apiData: [
                    {
                        id: 1,
                        apiName: '测试接口',
                        uri: 'add/aaa',
                        creator: '刘欢',
                        mender: '刘欢',
                        type: 'POST',
                        status: '1',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 2,
                        apiName: '测试接口',
                        uri: 'add/aaa',
                        creator: '刘欢',
                        mender: '刘欢',
                        type: 'POST',
                        status: '1',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 3,
                        apiName: '测试接口',
                        uri: 'add/aaa',
                        creator: '刘欢',
                        mender: '刘欢',
                        type: 'POST',
                        status: '1',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 4,
                        apiName: '测试接口',
                        uri: 'add/aaa',
                        creator: '刘欢',
                        mender: '刘欢',
                        type: 'POST',
                        status: '1',
                        time: '2018-01-23 23:59:59'
                    },
                    {
                        id: 5,
                        apiName: '测试接口',
                        uri: 'add/aaa',
                        creator: '刘欢',
                        mender: '刘欢',
                        type: 'POST',
                        status: '1',
                        time: '2018-01-23 23:59:59'
                    }
                ],
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
            toAddApi() {
                this.$router.push({
                    path: '/apiManage/addApi',
                    query: {uuid: this.$route.query.uuid}
                });
            },
            toSetApi(scope) {
                this.$router.push({
                    path: '/apiManage/setApi',
                    query: {
                        uuid: this.$route.query.uuid,
                        apiId: scope.row.id
                    }
                });
            },
            toApiDetail(scope) {
                this.$router.push({
                    path: '/apiManage/apiDetail',
                    query: {
                        uuid: this.$route.query.uuid,
                        apiId: scope.id
                    }
                });
            }
        },
        beforeMount() {
            console.log(this.$route.query.uuid);
        }
    }
</script>

<style lang="scss" scoped>
    #apiList{
        height: calc(100% - 20px);
        padding: 0 20px 20px;
        .apiGroup{
            height: calc(100%);
            width: 240px;
            .content{
                height: calc(100% - 56px);
                background-color: #fff;
                border: 1px solid #e5e5e5;
                position: relative;
                .contentTitle{
                    height: 47px;
                    line-height: 47px;
                    padding-left: 24px;
                    font-size: 14px;
                    border-bottom: 1px solid #e5e5e5;
                }
                .contentList{
                    height: calc(100% - 48px);
                }
            }
        }
        .apiList{
            height: 100%;
            width: calc(100% - 240px);
            .content{
                height: calc(100% - 56px);
                background-color: #fff;
                border: 1px solid #e5e5e5;
                border-left: none;
                .apiStatus{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    vertical-align: top;
                    margin-top: 5px;
                    margin-right: 5px;
                }
                .apiStatus.enable{
                    background-color: #47af4e;
                }
                .apiStatus.disable{
                    background-color: #f56c6c;
                }
                .apiStatus.maintain{
                    background-color: #e6a23c;
                }
                .apiType{
                    display: inline-block;
                    width: 50px;
                    height: 23px;
                    line-height: 23px;
                    text-align: center;
                    font-style: normal;
                    color: #fff;
                    background-color: #47af4e;
                    border-radius: 4px;
                    margin-right: 5px;
                    font-size: 14px;
                }
            }
        }
    }
</style>
