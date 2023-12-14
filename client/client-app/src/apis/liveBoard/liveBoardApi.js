
import axios from "axios";

export const getPageList = (pageNo, rows, searchType, keyword, order, jwt) => axios.get(`/api/liveBoard/liveBoardPageList?pageNo=${pageNo}&rows=${rows}&searchType=${searchType}&keyword=${keyword}&order=${order}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

export const initPage = (pageNo, rows, pageCount, totalCount, searchType, keyword, jwt) => axios.get(`/api/liveBoard/pageInfoLiveBoard?pageNo=${pageNo}&rows=${rows}&pageCount=${pageCount}&totalCount=${totalCount}&searchType=${searchType}&keyword=${keyword}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

export const getPage = (boardNo, jwt) => axios.get(`/api/liveBoard/${boardNo}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

export const getTicketNum = (boardNo, name, phone, count, jwt) => axios.post(`/api/liveBoard/ticketNum`, { boardNo, name, phone, count }, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

export const ticketPurchase = (boardNo, name, phone, count, jwt) => axios.post('/api/liveBoard/purchase', { boardNo, name, phone, count }, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

export const insertLiveBoard = (liveBoard, headers) => axios.post('/api/liveBoard/insert', liveBoard, headers)

export const updateLiveBoard = (liveBoard, headers) => axios.put('/api/liveBoard/update', liveBoard, headers)