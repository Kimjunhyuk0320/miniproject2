import axios from "axios";

export const getCommentList = (parentNo, parentTable, jwt) => axios.get(`/api/comment?parentNo=${parentNo}&parentTable=${parentTable}`, {
        headers: {
                Authorization: `Bearer ${jwt}`
        }
})

export const insertComment = (parentNo, parentTable, writer, content, username, profileNo, jwt) =>
        axios.post('/api/comment', { parentNo, parentTable, writer, content, username, profileNo }, {
                headers: {
                        Authorization: `Bearer ${jwt}`
                }
        })

export const updateComment = (commentNo, writer, content, jwt) =>
        axios.put('/api/comment', { commentNo, writer, content }, {
                headers: {
                        Authorization: `Bearer ${jwt}`
                }
        })

export const deleteComment = (commentNo, jwt) => axios.delete(`/api/comment/${commentNo}`, {
        headers: {
                Authorization: `Bearer ${jwt}`
        }
})
