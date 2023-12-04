import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardReadContainer from '../../containers/LiveBoard/LiveBoardReadContainer'
import CommentContainer from '../../containers/LiveBoard/CommentContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/read.css'

const LiveBoardRead = () => {
  const { no } = useParams()


  
  return (
    <div className='totalContainer'>
        LiveBoardRead
        <h3>게시글 번호 {no}</h3>
        <LiveBoardReadContainer no={no}/>
        <CommentContainer no={no}/>
    </div>
  )
}

export default LiveBoardRead