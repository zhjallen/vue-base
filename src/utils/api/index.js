import axios from "axios";
const methods = [
  "get",
  "put",
  "post",
  "head",
  "options",
  "patch"
]
axios.defaults.timeout = 5000;
process.env.NODE_ENV === "development" ? axios.defaults.baseURL = "/api" :
  process.env.NODE_ENV === "test" ? axios.defaults.baseURL = "http://ims.dev.zjjc.com" :
  process.env.NODE_ENV === "production" ? axios.defaults.baseURL = "http://ims.zhujianjc.com:81" :
  axios.defaults.baseURL = ""
class Api {
  constructor(opts) {
    this.opts = opts || {
      headers: {}
    }
    methods.forEach(method => {
      this[method] = (path, {
        params,
        data
      } = {}) => new Promise((resolve, reject) => {
        const url = baseURL + path;
        return axios({
          method,
          url,
          params,
          data
        }).then(onfulfilled => {
          resolve({
            data: onfulfilled.data,
            status: onfulfilled.status,
          })
        }).catch(error => {
          reject({
            status: error.response && error.response.status,
            error
          })
        })
      })
    });
  }
}
export default api = new Api({
  headers: {
    Accept: "application/json",
    "content-type": "application/json"
  }
})