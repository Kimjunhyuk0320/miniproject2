import React from 'react'
import { useParams } from 'react-router-dom'

const LiveBoardUpdate = () => {
  const { no } = useParams()
  return (
    <div>LiveBoardUpdate
        <h3>게시글 번호 {no}</h3>
    </div>
  )
}

export default LiveBoardUpdate