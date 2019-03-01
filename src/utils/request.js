import axios from 'axios';
// import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
process.env.NODE_ENV === "development" ? axios.defaults.baseURL = "/api" :
  process.env.NODE_ENV === "test" ? axios.defaults.baseURL = "http://ims.dev.zjjc.com" :
  process.env.NODE_ENV === "production" ? axios.defaults.baseURL = "http://ims.zhujianjc.com:81" :
  axios.defaults.baseURL = ""

/**
 * 获取cookie
 */
// function getCookie() {
//   let value_start = "",
//     value_end = "",
//     value = "";

//   if (document.cookie.length > 0 && (document.cookie.indexOf(c_name + "=")) != -1) {
//     value_start = document.cookie.indexOf(c_name + "=");
//     value_start = value_start + c_name.length + 1
//     value_end = document.cookie.indexOf(";", value_start)
//     if (value_end == -1) {
//       value_end = document.cookie.length
//     }
//     value = document.cookie.substring(value_start, value_end);
//   }
//   return value;
// }
// http request 拦截器

axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin":"*",
      // "x-auth-token": sessionStorage.getItem("x-auth-token"),
    }

    // if(token){
    //   config.params = {'token':token}
    // }

    //config.params = {'token':"93bf83cd-faab-40ef-8830-b58a2c6cd59a"}
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // if ( response.data.code === -401) {
    //   router.push({
    //     path: '/dingreview/login',
    //     query: {
    //       redirect: router.currentRoute.fullPath
    //     } // 从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}