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
let baseURL="";
process.env.NODE_ENV === "development" ? baseURL = "/api" :
  process.env.NODE_ENV === "test" ? baseURL = "http://ims.dev.zjjc.com" :
  process.env.NODE_ENV === "production" ? baseURL = "http://ims.zhujianjc.com:81" :
  baseURL = ""
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
        console.log(url,"url",method,params,data)
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
const api = new Api({
  headers: {
    Accept: "application/json",
    "content-type": "application/json"
  }
})
export default api;