import React from 'react'
import TotalComment from '../../components/LiveBoard/TotalComment'
import CommentInsert from '../../components/LiveBoard/CommentInsert'
import CommentList from '../../components/LiveBoard/CommentList'

const CommentContainer = () => {
  return (
    <div>
        <TotalComment/>
        <CommentInsert/>
        <CommentList/>
    </div>
  )
}

export default CommentContainer