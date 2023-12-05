import React, { useEffect, useState } from 'react'
import TotalComment from '../../components/comment/TotalComment'
import CommentInsert from '../../components/comment/CommentInsert'
import CommentList from '../../components/comment/CommentList'
import * as comments from '../../apis/comment/commentApi'
const CommentContainer = ({no, parentTable}) => {
  const [commentList, setCommentList] = useState([])
  const parentNo = no
  const getCommentList = async (parentNo) => {
    const response = await comments.getCommentList(parentNo, parentTable)
    const data = await response.data
    setCommentList(data)
  }


  const insertComment = async (parentNo, parentTable, writer, content, username, profileNo) => {
    const response = await comments.insertComment(parentNo, parentTable, writer, content, username, profileNo)
    const data = await response.data
    getCommentList(parentNo)
  }

  const updateComment = async (commentNo, writer, content) => {
    const response = await comments.updateComment(commentNo, writer, content)
    const data = await response.data
    getCommentList(parentNo)
    return data
  }

  const deleteComment = async (commentNo) => {
    const response = await comments.deleteComment(commentNo)
    const data = await response.data
    getCommentList(parentNo)
  }

  useEffect(() => {
    getCommentList(parentNo)
  }, [])

  





  return (
    <div>
        <TotalComment commentList={commentList}/>
        <CommentInsert insertComment={insertComment} parentNo={parentNo} parentTable={parentTable}/>
        <CommentList commentList={commentList} deleteComment={deleteComment} updateComment={updateComment}/>
    </div>
  )
}

export default CommentContainer