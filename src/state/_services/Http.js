import axios from 'axios'
import BASE_URL from '../_config/config'

export const Http = axios.create({
    baseURL: BASE_URL
})

Http.interceptors.request.use(
    (req) => {
        return req
    }
)

Http.interceptors.response.use(
    (res) => {
        return res
    },
    // (error) => {
        // if (error.response.status >= 400) {
        //     //TODO dispatch messages to the error component (a toast component or something)
        //     //after implementing auth, redirect to login page and wipe storage
        // }
        // return Promise.reject(error.response)
    // }
    )
