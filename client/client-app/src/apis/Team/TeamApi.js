import axios from 'axios'

export const pageInfo = (pageInfo)=>{
    return axios.get(`/api/team/pageInfo?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`)
}

export const teamList = (team)=>{
    return axios.get(`/api/team?pageNo=${team.pageNo}&rows=${team.rows}&searchType=${team.searchType}&keyword=${team.keyword}&order=${team.order}`)
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

