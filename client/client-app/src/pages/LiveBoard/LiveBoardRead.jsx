import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardReadContainer from '../../containers/LiveBoard/LiveBoardReadContainer'
import CommentContainer from '../../containers/comment/CommentContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/read.css'

const LiveBoardRead = () => {
  const { no } = useParams()
  const parentTable = "live_board"

  
  return (
    <div id='LiveBoardRead'>
      <div className='totalContainer'>
          <LiveBoardReadContainer no={no}/>
          <CommentContainer no={no} parentTable={parentTable}/>
      </div>
    </div>
  )
}

export default LiveBoardRead