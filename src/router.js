import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultView from './Default.vue';
import GoodbyeView from './Goodbye.vue';
import HelloView from './Hello.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/', component: DefaultView
    },
    {
        path: '/goodbye', component: GoodbyeView
    },
    {
        path: '/hello/:name', component: HelloView
    },
];

export default new VueRouter({
    mode: 'history',
    routes
});
