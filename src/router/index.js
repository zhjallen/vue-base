import Vue from 'vue';
import Router from 'vue-router';
import userRouter from "../modules/user/router";
import layoutRouter from "../modules/layout/router";
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: userRouter
    .concat(layoutRouter)
})
router.beforeEach((to, from, next) => {
  // if (window.userInfo && window.userInfo.userId) {
  //   next();
  // } else {
  //   getUserInfo(saveUserId, next);
  // }
  // let userInfo = {
  //   userId: "030759195437816097"
  // }
  // window["userInfo"] = userInfo;
  // next()
  next()
})

export default router;