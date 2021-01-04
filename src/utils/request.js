import axios from 'axios'
import { Message, Loading } from 'element-ui'
const ConfigBaseURL = 'http://localhost:8486/' //默认路径，这里也可以使用env来判断环境
let loadingInstance = null //这里是loading
//使用create方法创建axios实例
const Service = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: ConfigBaseURL,
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 添加请求拦截器
Service.interceptors.request.use(
  config => {
  loadingInstance = Loading.service({
    lock: true,
    text: 'loading...'
  })
  // config.headers['Content-Type'] = 'application/json'
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // Add X-Access-Token header to every request, you can add other custom headers here
  // if (UserModule.token) {
  //   // config.headers['X-Access-Token'] = UserModule.token
  //   config.headers['Authentication'] = UserModule.token
  // }
  return config
  },
  error => {
    Promise.reject(error)
  }
)

// 添加响应拦截器
Service.interceptors.response.use(response => {
  loadingInstance.close()
  if(response.data.code !== 0){
    Message({
      message:  response.data.message,
      type: 'error',
      duration: 3 * 1000
    })
  }
  return response.data
}, error => {
  console.log('TCL: error', error)
  const msg = error.Message !== undefined ? error.Message : ''
  Message({
    message: '网络错误' + msg,
    type: 'error',
    duration: 3 * 1000
  })
  loadingInstance.close()
  return Promise.reject(error)
})

export default Service