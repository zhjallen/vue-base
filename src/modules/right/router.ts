
const rightRouter = [
    {
        path: '/userList',
        name: 'UserList',
        component: resolve => require(['./views/userList.vue'], resolve),
        meta: {
            keepAlive: false,
        }
    },


]
export default rightRouter;