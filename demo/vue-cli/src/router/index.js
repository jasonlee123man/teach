import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../pages/About';
import My from '../pages/My';
import Comment from "../pages/Comment"
import Test from '../pages/Test'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: "/about",
            component: About
        },
        {
            path: "/my",
            component: My
        },
        {
            path: "/comment",
            component: Comment
        }, {
            path: "/test",
            component: Test
        },
        {
            path: "/",
            redirect: "/my"
        }
    ]
})