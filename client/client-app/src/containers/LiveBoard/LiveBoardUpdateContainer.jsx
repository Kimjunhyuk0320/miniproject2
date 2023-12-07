import React, { useEffect, useState } from 'react'
import UpdateForm from '../../components/LiveBoard/UpdateForm'
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'


const LiveBoardUpdateContainer = ({no}) => {
  const [liveBoard, setLiveBoard] = useState({})

  const getLiveBoard = async () => {
    const response = await liveBoards.getPage(no);
    const data = await response.data
    setLiveBoard(data)
  }

  useEffect(()=>{
    getLiveBoard()
    
  },[])



  return (
    <div>
        <UpdateForm liveBoard={liveBoard}/>
    </div>
  )
}

export default LiveBoardUpdateContainer