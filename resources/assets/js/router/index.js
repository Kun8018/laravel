import Vue from 'vue';
import VueRouter from 'vue-router';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import Home from '../components/ExampleComponent.vue'
import Login from '../components/Login.vue'
import Notfound from '../components/Notfound.vue'
import Register1 from '../components/Register.vue'

Vue.use(VueRouter);
Vue.use(Antd);

const router = new VueRouter({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Home
        },
        
        {
            path: '*',
            redirect:'/404'
        },
        {
            name: '404',
            path: '/404',
            component: Notfound
        },
        {
            name: 'register1',
            path: '/register1',
            component: Register1
        }
    ],
    
});

export default router