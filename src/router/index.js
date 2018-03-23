import Vue from 'vue'
import Router from 'vue-router'
// 接口管理
import ApiManage from '~/modules/apiManage/apiManage'
import ProjectList from '~/modules/apiManage/components/projectList'
import ApiList from '~/modules/apiManage/components/apiList'
import AddApi from '~/modules/apiManage/components/addApi'
import SetApi from '~/modules/apiManage/components/SetApi'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/apiManage/projectList'
        },
        {
            path: '/apiManage',
            name: 'apiManage',
            component: ApiManage,
            children: [
                {
                    path: '/apiManage/projectList',
                    name: 'projectList',
                    component: ProjectList
                },
                {
                    path: '/apiManage/apiList/:projectId',
                    name: 'apiList',
                    component: ApiList
                },
                {
                    path: '/apiManage/addApi/:projectId',
                    name: 'addApi',
                    component: AddApi
                },
                {
                    path: '/apiManage/setApi/:projectId/:apiId',
                    name: 'setApi',
                    component: SetApi
                }
            ]
        }
    ]
})
