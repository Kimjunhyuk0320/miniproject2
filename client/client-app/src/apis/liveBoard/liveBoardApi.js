
import axios from "axios";

export const getPageList = (pageNo, rows, searchType, keyword, order) => axios.get(`/api/liveBoard/liveBoardPageList?pageNo=${pageNo}&rows=${rows}&searchType=${searchType}&keyword=${keyword}&order=${order}`)

export const initPage = (pageNo, rows, pageCount, totalCount, searchType, keyword) => axios.get(`/api/liveBoard/pageInfoLiveBoard?pageNo=${pageNo}&rows=${rows}&pageCount=${pageCount}&totalCount=${totalCount}&searchType=${searchType}&keyword=${keyword}`)

export const getPage = (boardNo) => axios.get(`/api/liveBoard/${boardNo}`)

export const getTicketNum = (boardNo, name, phone, count) => axios.post(`/api/liveBoard/ticketNum`,{boardNo, name, phone, count})

export const ticketPurchase = (boardNo, name, phone, count) => axios.post('/api/liveBoard/purchase', {boardNo, name, phone, count})

export const insertLiveBoard = (liveBoard, headers) => axios.post('/api/liveBoard/insert', liveBoard, headers)

export const updateLiveBoard = (liveBoard, headers) => axios.put('/api/liveBoard/update', liveBoard, headers)