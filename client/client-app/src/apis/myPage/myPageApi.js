
import axios from "axios";

export const getList = (phone) => axios.get(`/api/user/listByPhone?phone=${phone}`)

// export const getUser = () => axios.get()

export const getList2 = (username) => axios.get(`/api/user/listByUserName?username=${username}`)

export const search = (keyword) => axios.get(`/api/home/totalSearch?keyword=${keyword}`)