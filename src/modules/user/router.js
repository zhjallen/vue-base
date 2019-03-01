
const userRouter = [{
    path: '/login',
    name: 'login',
    component: resolve => require(['./views/login.vue'], resolve),
    meta: {
      keepAlive: false,
    }
  },

]

export default userRouter;