import axios from 'axios'



export const teamAppListByLeader = (username)=>{
    return axios.get(`/api/user/team/listByLeader?username=${username}`)
}

export const readApp = (appNo)=>{
    return axios.put(`/api/user/team/readApp`,appNo)
}

export const confirmedPageInfo = (pageInfo)=>{
    return axios.get(`/api/team/pageInfo?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`)
}

export const accept = (appNo)=>{
    return axios.put(`/api/team/app/accept`,appNo)
}

export const denied = (appNo)=>{
    return axios.put(`/api/team/app/denied`,appNo)
}

export const confirmed = (appNo)=>{
    return axios.put(`/api/team/app/confirmed`,appNo)
}
