import Vue from 'vue'
import Router from 'vue-router'
// 项目管理
import ProjectManage from '~/modules/projectManage/projectManage'
// 项目管理 --> 接口管理
import ApiManage from '~/modules/projectManage/apiManage'
import ApiList from '~/modules/projectManage/apiManage/apiList'
import ApiDetail from '~/modules/projectManage/apiManage/apiDetail'
import AddApi from '~/modules/projectManage/apiManage/addApi'
import SetApi from '~/modules/projectManage/apiManage/SetApi'
// 项目管理 --> 文档管理
import DocumentManage from '~/modules/projectManage/documentManage'
// 平台与应用管理
import PlatformManage from '~/modules/platformManage/platformManage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/projectManage'
        },
        {
            path: '/projectManage',
            name: 'projectManage',
            component: ProjectManage
        },
        {
            path: '/apiManage',
            name: 'apiManage',
            component: ApiManage,
            children: [
                {
                    path: '/apiManage/apiList',
                    name: 'apiList',
                    component: ApiList
                },
                {
                    path: '/apiManage/apiDetail',
                    name: 'apiDetail',
                    component: ApiDetail
                },
                {
                    path: '/apiManage/addApi',
                    name: 'addApi',
                    component: AddApi
                },
                {
                    path: '/apiManage/setApi',
                    name: 'setApi',
                    component: SetApi
                }
            ]
        },
        {
            path: '/documentManage',
            name: 'documentManage',
            component: DocumentManage
        },
        {
            path: '/platformManage',
            name: 'platformManage',
            component: PlatformManage
        }
    ]
})
