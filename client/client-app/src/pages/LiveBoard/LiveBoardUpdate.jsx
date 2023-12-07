import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardUpdateContainer from '../../containers/LiveBoard/LiveBoardUpdateContainer'
import './css/update.css'

const LiveBoardUpdate = () => {
  const { no } = useParams()
  return (
    <div className='LiveBoardUpdate'>
        <LiveBoardUpdateContainer no={no}/>
    </div>
  )
}

export default LiveBoardUpdate