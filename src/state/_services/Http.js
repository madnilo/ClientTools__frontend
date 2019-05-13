import axios  from 'axios'
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
    }
)
