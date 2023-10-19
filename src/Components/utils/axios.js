import axios from "axios"

const axiosInstance = axios.create({
  // Server url
  baseURL: 'http://localhost:5000'
})

export default axiosInstance