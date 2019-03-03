import Vue from 'vue';
import Router from 'vue-router';
import homeRouter from "../modules/dashboard/router";
import userRouter from "../modules/user/router";
import layoutRouter from "../modules/layout/router";
import rightRouter from "../modules/right/router";

Vue.use(Router)



const router = new Router({
  mode: 'history',
  routes: userRouter.concat(homeRouter)
    .concat(layoutRouter)
    .concat(rightRouter)
})
console.log(router)
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