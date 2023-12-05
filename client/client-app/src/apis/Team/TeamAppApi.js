import axios from 'axios'



export const teamAppListByLeader = (pageInfo)=>{
    return axios.get(`/api/user/team/listByLeader?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`)
}
export const confirmedPageInfo = (pageInfo)=>{
    return axios.get(`/api/team/pageInfo?pageNo=${pageInfo.pageNo}&rows=${pageInfo.rows}&pageCount=${pageInfo.pageCount}&totalCount=${pageInfo.totalCount}&searchType=${pageInfo.searchType}&keyword=${pageInfo.keyword}`)
}