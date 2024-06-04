import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/v1',  
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
    
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if(responseStatus){
        (responseStatus === 401 || responseStatus === 403) && logout()
    }
}
