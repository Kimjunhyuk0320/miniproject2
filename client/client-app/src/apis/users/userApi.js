import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies();

export const join = (users) => {
    return axios.post(`/api/user`, users, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const usernameCheck = (username) => {
    return axios.get(`/api/user/getLoginIdDup?username=${username}`)
}

export const nicknameCheck = (nickname) => {
    return axios.get(`/api/user/getNicknameDup?nickname=${nickname}`)
}

export const phoneCheck = (phone) => {
    return axios.get(`/api/user/getPhoneDup?phone=${phone}`)
}


export const login = (users) => {
    return axios.post(`/api/user/login`, users)
}

export const jwtInfo = (jwt) => {
    return axios.get(`/api/user/jwtInfo`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const userInfo = (username) => {
    return axios.get(`/api/user/${username}`)
}

export const update = (users) => {
    return axios.put(`/api/user`, users, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const getCookieValue = (cookieName) => {
    return cookies.get(cookieName)
}

export const delCookieValue = (cookieName) => {
    return cookies.set(cookieName, '', { expires: new Date(0) });
}
