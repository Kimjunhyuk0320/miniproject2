import axios from "axios";

export const upload = (formData, headers) => axios.post('/api/file/upload', formData, headers)

// 다운로드
export const download = (fileNo) => axios.get(`/api/file/${fileNo}`, {responseType: 'blob',} )

// 파일 삭제
export const remove = (fileNo) => axios.delete(`/api/file/${fileNo}`)
