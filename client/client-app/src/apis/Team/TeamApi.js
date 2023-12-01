import axios from 'axios'

export const pageInfo = (pageInfo)=>{
    return axios.get("/api/team/pageInfo",pageInfo)
}

export const teamList = (team)=>{
    return axios.get("/api/team",team)
}
export const teamRead = (teamNo)=>{
    return axios.get(`/api/team/${teamNo}`)
}
export const teamInsert = (team)=>{
    return axios.post("/api/team",team)
}
export const teamUpdate = (team)=>{
    return axios.put("/api/team",team)
}
export const teamDelete = (teamNo)=>{
    return axios.delete(`/api/team/${teamNo}`)
}

