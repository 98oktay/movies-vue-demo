import Vue from 'vue'
import AddMovie from "@/pages/AddMovie";
import Home from "@/pages/Home";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,

    },
    {
        path: '/new',
        name: "new",
        component: AddMovie
    }
];

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes
});


export default router;
