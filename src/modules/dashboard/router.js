import layoutComponent from "../layout/views/index.vue";
import Home from "./views/home.vue"

// const _import_ = (moduleName, viewName) => import(`../${moduleName}/views/${viewName}`);

const homeRouter = [{
    path: '/home',
    component: resolve => require(['./views/home.vue'], resolve),
    //redirect: '/dash',
    // children: [
    //     {
    //         path: 'home',
    //         name: 'dash',
    //         component: import("./views/home.vue"),
    //         // meta: { title: '主页', icon: 'fdddfont icon-home', noCache: false }
    //     }
    // ],
   
},

]

export default homeRouter;