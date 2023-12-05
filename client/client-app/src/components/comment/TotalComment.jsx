import React from 'react'

const TotalComment = ({commentList}) => {


  const commentCount = commentList.length


  
  return (
    <h2 style={{margin: '20px'}} id="totalCount">
      <span>댓글 {commentCount} 개</span>
    </h2>
  )
}

export default TotalComment