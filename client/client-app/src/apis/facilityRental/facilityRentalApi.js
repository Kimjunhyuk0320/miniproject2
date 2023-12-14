import axios from 'axios'

export const pageInfo = (pageInfo,jwt) => {
    return axios.get(`/api/fr/pageInfo?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const frList = (team,jwt) => {
    return axios.get(`/api/fr?pageNo=${team.pageNo}&rows=${team.rows}&searchType=${team.searchType}&keyword=${team.keyword}&order=${team.order}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}
export const frRead = (frNo,jwt) => {
    return axios.get(`/api/fr/${frNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const frInsert = (fr,jwt) => {
    return axios.post(`/api/fr`, fr, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const frUpdate = (fr,jwt) => {
    return axios.put(`/api/fr`, fr, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const frDelete = (frNo,jwt) => {
    return axios.delete(`/api/fr/${frNo}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
}