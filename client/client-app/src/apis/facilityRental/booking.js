import axios from 'axios'

export const insert = (reservation)=>{
    return axios.post(`/api/booking`,reservation)
}

