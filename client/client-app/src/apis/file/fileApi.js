import axios from "axios";

export const upload = (formData, headers) => axios.post('/api/file/upload', formData, headers)

// 다운로드
export const download = (fileNo, jwt) => axios.get(`/api/file/${fileNo}`, {
    responseType: 'blob',
    Authorization: `Bearer ${jwt}`
})

// 파일 삭제
export const remove = (fileNo, jwt) => axios.delete(`/api/file/${fileNo}`, {
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})
