import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies();

export const join = (users, jwt) => {
    return axios.post(`/api/user`, users, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const usernameCheck = (username, jwt) => {
    return axios.get(`/api/user/getLoginIdDup?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const nicknameCheck = (nickname, jwt) => {
    return axios.get(`/api/user/getNicknameDup?nickname=${nickname}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const phoneCheck = (phone, jwt) => {
    return axios.get(`/api/user/getPhoneDup?phone=${phone}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}


export const login = (users, jwt) => {
    return axios.post(`/api/user/login`, users)
}

export const logout = (jwt) => {
    return axios.post(`/api/user/logout`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}


export const jwtInfo = (jwt) => {
    return axios.get(`/api/user/jwtInfo`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const userInfo = (username, jwt) => {
    return axios.get(`/api/user/${username}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const update = (users, jwt) => {
    return axios.put(`/api/user`, users, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const getCookieValue = (cookieName) => {
    return cookies.get(cookieName)
}

export const delCookieValue = (cookieName) => {
    return cookies.set(cookieName, '', { expires: new Date(0) });
}
