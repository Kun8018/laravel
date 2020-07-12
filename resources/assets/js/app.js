
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import router from './router/index.js'
import axios from 'axios';

Vue.use(ElementUI);
Vue.use(ant)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://php.com';

const app = new Vue({
    el: '#app',
    router
});
