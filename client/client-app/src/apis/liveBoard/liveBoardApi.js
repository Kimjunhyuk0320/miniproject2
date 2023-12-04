
import axios from "axios";

export const getPageList = (pageNo, rows, searchType, keyword, order) => axios.get(`/api/liveBoard/liveBoardPageList?pageNo=${pageNo}&rows=${rows}&searchType=${searchType}&keyword=${keyword}&order=${order}`)

export const initPage = (pageNo, rows, pageCount, totalCount, searchType, keyword) => axios.get(`/api/liveBoard/pageInfoLiveBoard?pageNo=${pageNo}&rows=${rows}&pageCount=${pageCount}&totalCount=${totalCount}&searchType=${searchType}&keyword=${keyword}`)

export const getPage = (boardNo) => axios.get(`/api/liveBoard/${boardNo}`)

export const getTicketNum = (boardNo, name, phone, count) => axios.post(`/api/liveBoard/ticketNum`,{boardNo, name, phone, count})

export const ticketPurchase = (boardNo, name, phone, count) => axios.post('/api/liveBoard/purchase', {boardNo, name, phone, count})

export const getCommentList = (boardNo) => axios.get(`/api/liveBoard/commentList?boardNo=${boardNo}`)

export const insertComment = (parentNo, parentTable, writer, content, username, profileNo ) => 
        axios.get(`/api/liveBoard/commentInsert?parentNo=${parentNo}&parentTable=${parentTable}&writer=${writer}&content=${content}&username=${username}&profileNo=${profileNo}`)

export const updateComment = (commentNo, writer, content ) => 
        axios.get(`/api/liveBoard/commentUpdate?commentNo=${commentNo}&writer=${writer}&content=${content}`)

export const deleteComment = (commentNo ) => 
        axios.get(`/api/liveBoard/commentDelete?commentNo=${commentNo}`)