import axios from 'axios'

export const join = (users)=>{
    return axios.post(`/api/user/join`,users,{
        headers:{
            'Content-Type' : 'multipart/form-data'
        }
    })
}