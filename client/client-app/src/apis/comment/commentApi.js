import axios from "axios";

export const getCommentList = (parentNo, parentTable) => axios.get(`/api/comment?parentNo=${parentNo}&parentTable=${parentTable}`)

export const insertComment = (parentNo, parentTable, writer, content, username, profileNo ) => 
        axios.post('/api/comment',{parentNo, parentTable, writer, content, username, profileNo})

export const updateComment = (commentNo, writer, content ) => 
        axios.put('/api/comment',{commentNo, writer, content})

export const deleteComment = (commentNo ) => axios.delete(`/api/comment/${commentNo}`)
