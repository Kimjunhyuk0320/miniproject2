import axios from 'axios'



export const teamAppListByLeader = (username,jwt) => {
    return axios.get(`/api/user/team/listByLeader?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const teamAppListByMember = (username,jwt) => {
    return axios.get(`/api/user/team/listByMember?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const delApp = (appNo,jwt) => {
    return axios.delete(`/api/team/app/${appNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}



export const readApp = (appNo,jwt) => {
    return axios.get(`/api/user/team/readApp?appNo=${appNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const confirmedPageInfo = (pageInfo,jwt) => {
    return axios.get(`/api/user/team/pageInfo?username=${pageInfo.username}&pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const confirmedLiveList = (team, jwt) => {
    return axios.get(`/api/user/team/confirmedLiveList?username=${team.username}&pageNo=${team.pageNo}&rows=${team.rows}&searchType=${team.searchType}&pageCount=${team.pageCount}&totalCount=${team.totalCount}&searchType=${team.searchType}&keyword=${team.keyword}&order=${team.order}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const accept = (appNo, jwt) => {
    return axios.put(`/api/team/app/accept`, appNo, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const denied = (appNo, jwt) => {
    return axios.put(`/api/team/app/denied`, appNo, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const confirmed = (appNo, jwt) => {
    return axios.put(`/api/team/app/confirmed`, appNo, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
