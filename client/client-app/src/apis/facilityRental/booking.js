import axios from 'axios'

export const insert = (reservation)=>{
    return axios.post(`/api/booking`,reservation)
}

export const rrList = (username)=>{
    return axios.get(`/api/booking/rr?username=${username}`)
}

export const rreqList = (username)=>{
    return axios.get(`/api/booking/rreq?username=${username}`)
}

export const accept = (brNo)=>{
    return axios.put(`/api/booking/accept`,brNo)
}

export const denied = (brNo)=>{
    return axios.put(`/api/booking/denied`,brNo)
}

export const confirmed = (brNo)=>{
    return axios.put(`/api/booking/confirm`,brNo)
}

export const delBooking = (brNo)=>{
    return axios.delete(`/api/booking/${brNo}`)
}
