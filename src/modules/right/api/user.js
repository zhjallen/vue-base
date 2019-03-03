import api from "../../../utils/api/index";
function getUserList(params) {
    return api.get("/users", {
        params
    })
}
export { getUserList };