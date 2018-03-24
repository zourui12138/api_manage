<template>
    <div class="apiGroup">
        <header class="system"><el-button type="primary" size="small" icon="el-icon-plus" @click="addGroup">新建分组</el-button></header>
        <section class="content">
            <h1 class="contentTitle">分组</h1>
            <VuePerfectScrollbar class="contentList">
                <el-tree
                    ref="tree"
                    default-expand-all
                    :data="groupData"
                    node-key="id"
                    highlight-current
                    @node-click="getCurrentNode">
                    <div slot-scope="{ node, data }">
                        <i v-if="data.id === '1'" class="el-icon-menu"></i>
                        <i v-if="data.id === '2'" class="el-icon-delete"></i>
                        <span>{{ node.label }}</span>
                    </div>
                </el-tree>
            </VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "group-list",
        components: {VuePerfectScrollbar},
        props: ['groupData'],
        methods: {
            getCurrentNode() {},
            addGroup() {
                this.$prompt('请输入组名', '新建分组', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^\S+$/,
                    inputErrorMessage: '组名不能为空'
                }).then(({ value }) => {
                    this.$message({type: 'success', message: '你的添加的组名是: ' + value});
                }).catch(() => {
                    this.$message({type: 'info', message: '取消添加分组'});
                });
            }
        },
        mounted() {
            // 默认选中所有分组
            this.$refs.tree.setCurrentKey('3-1');
        }
    }
</script>

<style lang="scss" scoped>
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
</style>
