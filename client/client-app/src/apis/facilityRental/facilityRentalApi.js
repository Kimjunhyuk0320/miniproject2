import axios from 'axios'

export const pageInfo = (pageInfo)=>{
    return axios.get(`/api/fr/pageInfo?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`)
}

export const frList = (team)=>{
    return axios.get(`/api/fr?pageNo=${team.pageNo}&rows=${team.rows}&searchType=${team.searchType}&keyword=${team.keyword}&order=${team.order}`)
}
export const frRead = (frNo)=>{
    return axios.get(`/api/fr/${frNo}`)
}

export const frInsert = (fr) =>{
    return axios.post(`/api/fr`,fr,{
        headers:{
            'Content-Type' : 'multipart/form-data'
        }
    })
}

export const frUpdate = (fr)=>{
    return axios.put(`/api/fr`,fr,{
        headers:{
            'Content-Type' : 'multipart/form-data'
        }
    })
}

export const frDelete = (frNo)=>{
    return axios.delete(`/api/fr/${frNo}`)
}