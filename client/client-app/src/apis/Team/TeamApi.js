import axios from 'axios'

export const pageInfo = (pageInfo,jwt) => {
    return axios.get(`/api/team/pageInfo?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const teamList = (team,jwt) => {
    return axios.get(`/api/team?pageNo=${team.pageNo}&rows=${team.rows}&searchType=${team.searchType}&keyword=${team.keyword}&order=${team.order}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
export const teamRead = (teamNo,jwt) => {
    return axios.get(`/api/team/${teamNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
export const teamInsert = (team,jwt) => {
    return axios.post("/api/team", team, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
export const teamUpdate = (team,jwt) => {
    return axios.put("/api/team", team, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
export const teamDelete = (teamNo,jwt) => {
    return axios.delete(`/api/team/${teamNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const teamReg = (teamApp,jwt) => {
    return axios.post(`/api/team/app`, teamApp, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}


