import Vuex from 'vuex'
import Vue from 'vue';
import layoutState from "../modules/layout/store/index";
import userState from "../modules/user/store/index";

Vue.use(Vuex);
console.log(userState, "state")
export default new Vuex.Store({
  modules: {
    layoutState,
    userState
  }
})