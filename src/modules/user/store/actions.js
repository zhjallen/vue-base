import api from "../../../utils/api/index";

const actions = {
  userLogin(userName, passWord) {
    return api.post("/user/login", {
      params: {
        userName,
        passWord
      }
    }).then(success => {
      commit("SAVE_UERINFO", success)
    }).catch(error => {

    })
  }
}
export default actions;