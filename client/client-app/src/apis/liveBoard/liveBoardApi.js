
import axios from "axios";

export const getPageList = (pageNo, rows, searchType, keyword, order) => axios.get(`/api/liveBoard/liveBoardPageList?pageNo=${pageNo}&rows=${rows}&searchType=${searchType}&keyword=${keyword}&order=${order}`)

export const initPage = (pageNo, rows, pageCount, totalCount, searchType, keyword) => axios.get(`/api/liveBoard/pageInfoLiveBoard?pageNo=${pageNo}&rows=${rows}&pageCount=${pageCount}&totalCount=${totalCount}&searchType=${searchType}&keyword=${keyword}`)

