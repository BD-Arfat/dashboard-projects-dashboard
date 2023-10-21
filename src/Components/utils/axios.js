import axios from "axios"

const axiosInstance = axios.create({
  // Server url
  baseURL: 'https://dashboard-sarvar-eqkz3ldzt-bd-arfat.vercel.app'
})

export default axiosInstance