import axios from 'axios'



export const teamAppListByLeader = (username)=>{
    return axios.get(`/api/user/team/listByLeader?username=${username}`)
}

export const teamAppListByMember = (username)=>{
    return axios.get(`/api/user/team/listByMember?username=${username}`)
}

export const delApp = (appNo)=>{
    return axios.delete(`/api/team/app/${appNo}`)
}



export const readApp = (appNo)=>{
    return axios.get(`/api/user/team/readApp?appNo=${appNo}`)
}

export const confirmedPageInfo = (pageInfo)=>{
    return axios.get(`/api/user/team/pageInfo?username=${pageInfo.username}&pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`)
}

export const confirmedLiveList = (team)=>{
    return axios.get(`/api/user/team/confirmedLiveList?username=${team.username}&pageNo=${team.pageNo}&rows=${team.rows}&searchType=${team.searchType}&pageCount=${team.pageCount}&totalCount=${team.totalCount}&searchType=${team.searchType}&keyword=${team.keyword}&order=${team.order}`)
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
