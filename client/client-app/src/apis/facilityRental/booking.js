import axios from 'axios'

export const insert = (reservation, jwt) => {
    return axios.post(`/api/booking`, reservation, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const rrList = (username, jwt) => {
    return axios.get(`/api/booking/rr?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const rreqList = (username, jwt) => {
    return axios.get(`/api/booking/rreq?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const accept = (brNo, jwt) => {
    return axios.put(`/api/booking/accept`, brNo, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const denied = (brNo, jwt) => {
    return axios.put(`/api/booking/denied`, brNo, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const confirmed = (brNo, jwt) => {
    return axios.put(`/api/booking/confirm`, brNo, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const delBooking = (brNo, jwt) => {
    return axios.delete(`/api/booking/${brNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
