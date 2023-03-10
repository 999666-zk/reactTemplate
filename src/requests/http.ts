import axios from 'axios'

const http = axios.create({
  baseURL: 'https://qingmall-29ii8-1306124533.ap-shanghai.service.tcloudbase.com/qingflow/v1.0',
  timeout: 10000,
})

export default http
