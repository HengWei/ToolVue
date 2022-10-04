import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVue from '../components/Home.vue'
import UploadVue from '../components/Upload.vue'
import NewPDName from '../components/NewProductName.vue'
import FindModel from '../components/FindModel.vue'

Vue.use(VueRouter)

export default new VueRouter({    
    base: '/ITTool/',
    routes: [
        { path: '/', redirect: '/index' },
        {
            path: '/index',
            name: 'Home',
            component:  HomeVue 
        },
        {
            path: '/Upload',
            component: UploadVue
        },
        {
            path: '/NewProductName',
            component: NewPDName
        },
        {
            path: '/FindModel',
            component: FindModel
        }
    ]
})