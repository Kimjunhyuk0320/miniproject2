
import axios from "axios";

export const getList = (phone,jwt) => axios.get(`/api/user/listByPhone?phone=${phone}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

// export const getUser = () => axios.get()

export const getList2 = (username,jwt) => axios.get(`/api/user/listByUserName?username=${username}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

export const search = (keyword,jwt) => axios.get(`/api/home/totalSearch?keyword=${keyword}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})