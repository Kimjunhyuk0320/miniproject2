import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardUpdateContainer from '../../containers/LiveBoard/LiveBoardUpdateContainer'

const LiveBoardUpdate = () => {
  const { no } = useParams()
  return (
    <div>
        <h3>게시글 번호 {no}</h3>
        <LiveBoardUpdateContainer/>
    </div>
  )
}

export default LiveBoardUpdate